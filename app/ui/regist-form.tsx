'use client';

import { Button } from './button';
import Link from 'next/link';
import { registUser, RegistUserState } from '@/app/lib/user-actions';
import { useActionState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function RegistForm() {
	const searchParams = useSearchParams();
	const locale = useLocale();
	const callbackUrl = searchParams.get('callbackUrl') || '';

	const initialState: RegistUserState = { 
		errors: { }, message: null 
	};
  const [state, formAction, isPending] = useActionState(registUser, initialState);
	
	const t = useTranslations('pages.regist');

	useEffect(() => {
    if (typeof window !== "undefined") {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new (window as any).bootstrap.Tooltip(tooltipTriggerEl));

      return () => {
        tooltipList.forEach(tooltip => tooltip.dispose());
      };
    }
  }, []);

  return (
	<form action={formAction}>
		<div className="register_form signup_login_form">
			<input type="hidden" id="callback" name="callbackurl" value={callbackUrl}/>
			<input type="hidden" id="lang" name="lang" value={locale}/>
			<div className="form_item">
				<input type="email" id="email" name="email" placeholder={t('email')}/>
				{state.errors?.email && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{state.errors?.email &&
							state.errors.email.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}	
			</div>
			<div className="form_item">
				<input type="password" id="password" name="password" placeholder={t('password')}/>				
				{state.errors?.password && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{state.errors?.password &&
							state.errors.password.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}				
			</div>
			<div className="form_item">
				<input type="password" id="confirmPassword" name="confirmPassword" placeholder={t('password2')}/>
				{state.errors?.confirmPassword && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{state.errors?.confirmPassword &&
							state.errors.confirmPassword.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}			
			</div>

			<Button type="submit" className="btn btn_dark" aria-disabled={isPending}>
				<span>
					<small>{t('signupButton')}</small>
					<small>{t('signupButton')}</small>
				</span>
			</Button>	
			{state.errors?.userCreate && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{state.errors?.userCreate &&
							state.errors.userCreate.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}			
			<div className="row justify-content-center mt-5">
				<div className="col-auto align-self-center p-1">
					<del>Or Login With</del>
				</div>
				<div className="col-auto align-self-center p-1">
					<ul className="social_links unordered_list_center">
						<li>							
							<Link href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Not available yet">
								<i className="fab fa-google"></i>
							</Link>
						</li>
					</ul>							
				</div>
			</div>
		</div>
	</form>
  );
}
