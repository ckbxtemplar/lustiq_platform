import { Metadata } from 'next';
import SubscriptionStatus from '@/app/ui/subscriptionstatus' 
import {getTranslations} from 'next-intl/server';
import SoonEvents from '@/app/ui/main/soonEvents';
import Brands from '@/app/ui/main/brands';
 
export const metadata: Metadata = {
  title: 'Cancel Subscribe',
};
 
export default async function SubscribeCancelPage() {
	
	const t = await getTranslations('pages.subscribe');

  return (
		<main className="page_content">
			<section className="section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-8">
							<h1 className="register_heading text-center">{t('title')}</h1>
							<p className="register_heading_description text-center mb-1">
								{t('sub')}
							</p>
							<p className="register_heading_description text-center mb-4">
								{t('sub2')}
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

			<SoonEvents/>
			<Brands />
			<div className="section_space_lg"></div>			
		</main>
  );
}