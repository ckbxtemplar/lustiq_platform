import AcmeLogo from '@/app/ui/acme-logo';
import ForgetPasswordForm from '@/app/ui/forget-password-form';
import { Suspense } from 'react';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};
 
export default async function ForgetPassword() {

  return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-5">
							<h1 className="register_heading text-center">Forget Password</h1>
							<p className="register_heading_description text-center">
								Please enter your Email
							</p>
							<Suspense>
								<ForgetPasswordForm />
							</Suspense>
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}