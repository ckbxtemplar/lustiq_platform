import {PersonalDataForm, BillingAddressForm} from '@/app/ui/dashboard/profile-forms';
import { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Banner from '@/app/ui/dashboard/banner';

export const metadata: Metadata = {
  title: 'Profile',
};
export default function ProfilePage() {
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
						<Banner page={'dashboard_profile'} title={"Profile settings"} description={"Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus turpis in eu mi bibendum neque egestas"} search={false} />
						<section className="section_space_md" id="section_personal_data">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col col-lg-6">	
										<div className="iconbox_item">
											<div className="title_wrap">
												<div className="item_icon bg_dark">
													<i className="fas fa-user"></i>
												</div>
												<h3 className="item_title mb-0">
													<span className="d-block">Personal data</span>
												</h3>
											</div>
											<p className="mb-3">
												Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat
											</p>
										</div>																									
										<Suspense>
											<PersonalDataForm />
										</Suspense>
										</div>
								</div>	
							</div>
						</section>
						<section className="section_space_md" id="section_billing_address">								
							<div className="container">								
								<div className="row justify-content-center">
									<div className="col col-lg-6 mt-3">				
										<div className="iconbox_item">
											<div className="title_wrap">
												<div className="item_icon bg_dark">													
													<i className="fas fa-wallet"></i>
												</div>
												<h3 className="item_title mb-0">
													<span className="d-block">Billing address</span>
												</h3>
											</div>
											<p className="mb-3">
												Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat
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