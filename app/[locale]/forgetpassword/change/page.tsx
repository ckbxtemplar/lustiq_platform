import AcmeLogo from '@/app/ui/acme-logo';
import ChangePasswordForm from '@/app/ui/change-password-form';
import { Suspense } from 'react';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Login',
};
 
export default async function Change() {

  return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-5">
							<h1 className="register_heading text-center">Change Password</h1>
							<p className="register_heading_description text-center">
								Please enter your new password
							</p>
							<Suspense>
								<ChangePasswordForm />
							</Suspense>
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}