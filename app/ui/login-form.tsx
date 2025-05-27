'use client';

import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/user-actions';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [state, formAction, isPending] = useActionState( authenticate, { success: false, errorMessage: undefined, callbackUrl: undefined } );
	const msg = searchParams.get('m') || false;

	if (state.success) window.location.href	= state.callbackUrl || callbackUrl;

	const t = useTranslations('pages.login');

  return (
<form action={formAction}>
	{msg && <div className="alert alert-success d-flex" role="alert" aria-live="polite" aria-atomic="true">{msg}</div>}
	<div className="register_form signup_login_form">
		<div className="form_item">
			<input 
				type="email" 
				name="email" 
				id="email"
				placeholder={t('email')}
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
					<label htmlFor="checkbox_remenber">{t('remember')}</label>
				</div>
			</div>
			<div className="col col-6">
				<div className="forget_password text-end">
					<a href="/forgetpassword" className="btn_unfill">{t('forgot')}</a>
				</div>
			</div>
		</div>
		<input type="hidden" name="redirectTo" value={callbackUrl} />	
		<input type="hidden" name="redirect" value="false" />	
		<Button className="btn btn_dark mb-2" aria-disabled={isPending}>
			<span>
				<small>{t('loginButton')}</small>
				<small>{t('loginButton')}</small>
			</span>
		</Button>	

		<div
			className=""
			aria-live="polite"
			aria-atomic="true"
		>
			{state.errorMessage && (
				<div className="alert alert-warning d-flex align-items-center gap-1 mt-1" role="alert" aria-live="polite" aria-atomic="true">
					<ExclamationCircleIcon className="h-5 w-5" />
					<p className="m-0">{state.errorMessage}</p>
				</div>
			)}
		</div>	
		<div className="row mt-5 justify-content-center align-items-center">
			<div className="col-auto">
				{t('noaccount')}
			</div>
			<div className="col-auto">
					<a href="/regist" className="btn border_dark btn_small"><span><small>{t('noaccountButton')}</small><small>{t('noaccountButton')}</small></span></a>
			</div>
		</div>
	</div>
</form>
  );
}
