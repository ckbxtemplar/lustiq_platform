import RegistForm from '@/app/ui/regist-form';
import { Suspense } from 'react';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Regist',
};
 
export default function RegistPage() {
  return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-5">
							<h1 className="register_heading text-center">Create Account</h1>
							<p className="register_heading_description text-center">
								Please enter your User/Email & Password
							</p>
							<Suspense>
								<RegistForm />
							</Suspense>
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}