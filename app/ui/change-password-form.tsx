'use client';

import { Button } from './button';
import Link from 'next/link';
import { changePassword, changePasswordState } from '@/app/lib/user-actions';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ChangePasswordForm() {
	const searchParams = useSearchParams();
	const uid = searchParams.get('u') || 0;
	const token = searchParams.get('t') || 0;

	const initialState: changePasswordState = { 
		errors: { }, message: null 
	};
  const [state, formAction, isPending] = useActionState(changePassword, initialState);
	
  return (
	<form action={formAction}>
		<input type="hidden" name="uid" value={uid}/>
		<input type="hidden" name="token" value={token}/>
		<div className="register_form signup_login_form">
			<div className="form_item">
				<input type="password" id="password" name="password" placeholder="New Password"/>				
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
				<input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password"/>
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
					<small>Change Now</small>
					<small>Change Now</small>
				</span>
			</Button>	
			{state.errors?.userUpdate && (
					<div className="alert alert-warning d-flex align-items-center gap-1 mt-1 py-1" role="alert" aria-live="polite" aria-atomic="true">
						{state.errors?.userUpdate &&
							state.errors.userUpdate.map((error: string) => (
								<p className="m-0 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>	
				)}			
		</div>
	</form>
  );
}
