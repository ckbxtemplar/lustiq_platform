import {PersonalDataForm, BillingAddressForm} from '@/app/ui/dashboard/profile-forms';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Banner from '@/app/ui/dashboard/banner';
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: 'Profile',
};
export default function ProfilePage() {

	const t = useTranslations('pages.dashboard.profile');

	return <div>
					<div className='shape_wrapper'>
						<div className="deco_item shape_img_1 wow fadeInLeft" data-wow-delay=".2s">
							<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
						</div>
						<div className="deco_item shape_img_2 wow fadeInRight" data-wow-delay=".4s">
							<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
						</div>						
						<div className="deco_item shape_img_3 wow fadeInLeft" data-wow-delay=".6s">
							<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
						</div>
						<div className="deco_item shape_img_4 wow fadeInRight" data-wow-delay=".8s">
							<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
						</div>						
					</div>						
					<main className={'page_content'}>
						<Banner page={'dashboard_profile'} 
						title={t('bannerTitle')} 
						description={t('bannerSub')} 
						search={false} />
						<section className="my-5" id="section_personal_data">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col col-lg-6">	
										<div className="iconbox_item">
											<div className="title_wrap">
												<div className="item_icon bg_dark">
													<i className="fas fa-user"></i>
												</div>
												<h3 className="item_title mb-0">
													<span className="d-block">{t('personal.title')}</span>
												</h3>
											</div>
											<p className="mb-3">
											{t('personal.sub')}
											</p>
										</div>																									
										<Suspense>
											<PersonalDataForm />
										</Suspense>
										</div>
								</div>	
							</div>
						</section>
						<section className="my-5" id="section_billing_address">								
							<div className="container">								
								<div className="row justify-content-center">
									<div className="col col-lg-6 mt-3">				
										<div className="iconbox_item">
											<div className="title_wrap">
												<div className="item_icon bg_dark">													
													<i className="fas fa-wallet"></i>
												</div>
												<h3 className="item_title mb-0">
													<span className="d-block">{t('billing.title')}</span>
												</h3>
											</div>
											<p className="mb-3">
											{t('billing.sub')}
											</p>
										</div>																
										<Suspense>
											<BillingAddressForm />
										</Suspense>
										</div>
								</div>	
								</div>
						</section>
					</main>
				</div>					
}