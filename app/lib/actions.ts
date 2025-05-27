'use server';

import { subscribeUser } from '@/app/lib/data';
import { sendMail } from '@/app/lib/sendmail';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {getTranslations} from 'next-intl/server';
import { subscribeToKlaviyo } from '@/app/lib/klaviyo';

/* Contact form START */
const ContactFormSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email address.' }),
  name: z.string().min(3, { message: 'Name must be at least 3 characters long.' }),
  message: z.string().min(20, { message: 'Message must be at least 20 characters long.' }),
});

export type ContactFormState = {
	state: number | null;
  errors?: {
    email?: string[];
		name?: string[];		
		message?: string[];				
  };
  message?: string | null;
	fields?: object | null;	
};

const ContactFormData = ContactFormSchema.pick({ email: true, name: true, message:true });

export async function contactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {

	const f = {
    email: formData.get('email') as string,
    name: formData.get('name') as string,
    message: formData.get('message') as string,
		subject: formData.get('subject') as string,
		telephone: formData.get('telephone') as string,		
	};

	const validatedFields = ContactFormData.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
    message: formData.get('message'),
  });  

  if (!validatedFields.success) {
    return {
			state: 0,	
			fields: f,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to send message.',
    };
  }
	const { email, name, message } = validatedFields.data;
	const telephone = formData.get('telephone');
	const subject = formData.get('subject');


	const response = sendMail({
		email: 'hello@lustiq.eu',
		sendTo: 'kassai.viktor@gmail.com',
		subject: 'Contact Form Message | Lustiq Platform',
		html: {
			template: 'contact_form',
			params:f
		}
	});	
	
	return {
		state: 1,	
		fields: f,
		message: 'Thank you for your message, our colleague will respond soon.',
	};

	return {
		state: 0,	
		fields: f,		
		message: 'Missing or invalid fields. Failed to send message.',
	};	
}


/* Newsletter forms START */
const NewsletterSubscribeSchema = z.object({
	email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type NewsletterSubscribeState = {
	state: number | null;
  errors?: {
    email?: string[];
		alreadySubscribed?: string[];		
  };
  message?: string | null;
};

const NewsletterSubscribeData = NewsletterSubscribeSchema.pick({ email: true });

export async function NewsletterSubscribe(prevState: NewsletterSubscribeState, formData: FormData): Promise<NewsletterSubscribeState> {
	
	const t = await getTranslations('server.newsletter');

	const validatedFields = NewsletterSubscribeData.safeParse({
    email: formData.get('email')
  });  

  if (!validatedFields.success) {
    return {
		state: 0,	
      	errors: validatedFields.error.flatten().fieldErrors,
      	message: t('missing')
    };
  }
	const { email } = validatedFields.data;

	// Sql 
	const subscribe = await subscribeUser(email);
	if (!subscribe || subscribe.success === 0)	// hiba
	{ 
			return {		
				state: 0,		
				errors: { alreadySubscribed: ['already subscribed to the newsletter']  },
				message: t('already'),
			}
	}
	else if (subscribe.success === 1) // már feliratkozott
	{ 
		return {
			state: subscribe.success,
			errors: { alreadySubscribed: ['already subscribed to the newsletter']  },
			message: t('already')
		}
	}
	else if (subscribe.success === 2) // siker
	{ 
		const response = sendMail({
			email: 'hello@lustiq.eu',
			sendTo: email,
			subject: 'Subscribed | Lustiq Platform',
			html: {
				template: 'user_activate',
				params:{
				}
			}
		});

		subscribeToKlaviyo(email,'newsletter'); // nem kell await .. klaviyo-ra nem várunk

		return {
			state: subscribe.success,
			message: t('msg_success')
		}

	}

	return {
		state: 0,
		message: t('unknown')
	}	
}



/* Invoice forms START */

const InvoiceFormSchema = z.object({
  id: z.string(),
  customerId: z.string({
		invalid_type_error: 'Please select a customer.',
	}),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'],{
		invalid_type_error: 'Please select an invoice status.',
	}),
  date: z.string(),
});
 
const CreateInvoice = InvoiceFormSchema.omit({ id: true, date: true });
const UpdateInvoice = InvoiceFormSchema.omit({ id: true, date: true });

export type InvoiceState = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: InvoiceState, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;	

	const amountInCents = amount * 100;
	const date = new Date().toISOString().split('T')[0];	
	
	// IDE KERÜL a data.ts meghívása ami elvégzi az SQL műveletet.
	console.log('letrehozas');
	revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');	
}

export async function updateInvoice(
  id: string,
  prevState: InvoiceState,
  formData: FormData,	
) {
	const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
	// SQL
  // await sql`
  //   UPDATE invoices
  //   SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
  //   WHERE id = ${id}
  // `;
	console.log('update: '+id);
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
	throw new Error('Failed to Delete Invoice');
	// SQL	
  // await sql`DELETE FROM invoices WHERE id = ${id}`;
	console.log('torles: '+id);
  revalidatePath('/dashboard/invoices');
}