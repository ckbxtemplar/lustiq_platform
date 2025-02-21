'use client';

import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/user-actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState( authenticate, undefined );
	const msg = searchParams.get('m') || false;

  return (
<form action={formAction}>
	{msg && <div className="alert alert-success d-flex" role="alert" aria-live="polite" aria-atomic="true">{msg}</div>}
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
		<div className="form_item">
			<input 
				type="password" 
				name="password" 
				placeholder="**********"
				id="password"
				required
				minLength={6}		
			/>
		</div>
		<div className="remenber_forget row mb-3 align-items-center justify-content-between">
			<div className="col col-6">
				<div className="checkbox_item mb-0">
					<input id="checkbox_remenber" type="checkbox" name="remember" value="true"/>
					<label htmlFor="checkbox_remenber">Remember me</label>
				</div>
			</div>
			<div className="col col-6">
				<div className="forget_password text-end">
					<a href="/forgetpassword">Forget Password</a>
				</div>
			</div>
		</div>
		<input type="hidden" name="redirectTo" value={callbackUrl} />	
		
		<Button className="btn btn_dark mb-2" aria-disabled={isPending}>
			<span>
				<small>Login Now</small>
				<small>Login Now</small>
			</span>
		</Button>	

		<div
			className=""
			aria-live="polite"
			aria-atomic="true"
		>
			{errorMessage && (
				<div className="alert alert-warning d-flex align-items-center gap-1 mt-1" role="alert" aria-live="polite" aria-atomic="true">
					<ExclamationCircleIcon className="h-5 w-5" />
					<p className="m-0">{errorMessage}</p>
				</div>
			)}
			</div>	

		<p className="mb-0 text-center">Don't have an account? <Link href="/regist">Register Here</Link></p>
	</div>
</form>
  );
}
