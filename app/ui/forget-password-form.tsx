'use client';

import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
import { useActionState } from 'react';
import { forgetPasswordSend } from '@/app/lib/user-actions';
import Link from 'next/link';

export default function ForgetPasswordForm() {
  const [response, formAction, isPending] = useActionState( forgetPasswordSend, undefined );

  const getAlertClass = (status: number  | null | undefined) => {
    if (status === 0) return 'alert-success'; // Siker
    if (status === 1) return 'alert-warning'; // Figyelmeztetés
    if (status === 2) return 'alert-danger'; // Hiba
    return '';
  };

  return (
<form action={formAction}>
	<div className="register_form signup_login_form">
		<div className="form_item">
			<input 
				type="email" 
				name="email" 
				id="email"
				placeholder="Enter your email address"
				required			
			/>
		</div>
		
		<Button className="btn btn_dark mb-2" aria-disabled={isPending}>
			<span>
				<small>Send Mail Now</small>
				<small>Send Mail Now</small>
			</span>
		</Button>	

		{response && (
			<div
				className={`alert d-flex align-items-center gap-1 mt-1 ${getAlertClass(response.status)}`}
				role="alert"
				aria-live="polite"
				aria-atomic="true"
			>
				<ExclamationCircleIcon className="h-5 w-5" />
				<p className="m-0">{response.message}</p>
			</div>
    )}

		<p className="mb-0 mt-3 text-center">Don't have an account? <Link href="/regist">Register Here</Link></p>
	</div>
</form>
  );
}
