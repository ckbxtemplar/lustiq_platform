'use server';

import { subscribeUser } from '@/app/lib/data';
import { sendMail } from '@/app/lib/sendmail';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
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

	const validatedFields = NewsletterSubscribeData.safeParse({
    email: formData.get('email')
  });  

  if (!validatedFields.success) {
    return {
			state: 0,	
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing or invalid fields. Failed to create user.',
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
				message: 'Already subscribed to the newsletter',
			}
	}
	else if (subscribe.success === 1) // már feliratkozott
	{ 
		return {
			state: subscribe.success,
			errors: { alreadySubscribed: ['already subscribed to the newsletter']  },
			message: 'Already subscribed to the newsletter',
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

		return {
			state: subscribe.success,
			message: 'Subscribe was successful',
		}

	}

	return {
		state: 0,
		message: 'Unknown error',
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