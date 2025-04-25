import { Metadata } from 'next';
import SubscriptionStatus from '@/app/ui/subscriptionstatus' 

export const metadata: Metadata = {
  title: 'Success Subscribe',
};
 
export default function SubscribeSuccessPage() {
  return (
		<main className="page_content">
			<section className="section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-8">
							<h1 className="register_heading text-center">Előfizetési státusz</h1>
							<p className="register_heading_description text-center mb-1">
								Köszönjük, hogy visszatértél a fizetési oldalról! 
							</p>
							<p className="register_heading_description text-center mb-4">
								Az aktuális előfizetési státuszod itt látható:
							</p>
							<div className="register_form signup_login_form">
								<div className="form_item m-0">
									<SubscriptionStatus/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}