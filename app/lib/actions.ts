'use server';

import { getUser } from '@/app/lib/data';
import { sendMail } from '@/app/lib/sendmail';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
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