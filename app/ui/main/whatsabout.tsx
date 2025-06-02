"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function WhatsAbout({version = 'pricing'}) {
	
	const t = useTranslations('components.whatsabout.'+version);
	const tags = useTranslations('tags');

	const sub2A = ['soon2'];
	const boldA = ['soon1'];
	const italicA = ['soon1'];

	let img_src = 'lustiq_rt_1.jpg';
	let img_w = 600;
	let img_h = 600;

	switch (version) {	
		case 'pricing':
			img_src = 'lustiq_rt_1.jpg';
			img_w = 600;
			img_h = 600;
			break;			
	}

	return (
			<section className="getstart_section section_space_lg" id="section_whatsabout">
				<div className="container">
					<div className="row align-items-start">
						<div className="col col-lg-4">
							<div className="image_widget">
								<Image src={'/assets/images/about/'+img_src} width={img_w} height={img_h} alt="Collab – Online Learning Platform"/>
							</div>
						</div>						
						<div className="col col-lg-7">
							<div className="content_wrap ps-lg-5">
								<div className="section_heading my-1">
									<h2 className="heading_text">
										{t('title')}
									</h2>
									<p className="heading_description mb-3">
										{t('sub')}
									</p>
									<p className="heading_description mb-0">
										{t('sub2')}
									</p>	
								</div>

								<div className="btn_wrap my-5 p-0">
									<a className="btn btn_dark btn_small" href="/regist?msg=registbeforecheckout">
										<span>
											<small>{t('btn')}</small>
											<small>{t('btn')}</small>
										</span>
									</a>
								</div>

								<div className="iconbox_item">
									<div className="title_wrap">
										<div className="py-1 pe-3">
											<i className="far fa-file-audio fa-2x"></i>											
										</div>
										<h6 className='fw-bold w-75'>{t('o11')}<br/>{t('o12')}</h6>
									</div>									
								</div>
								<div className="iconbox_item">
									<div className="title_wrap">
										<div className="py-1 pe-3">
											<i className="fas fa-chalkboard-teacher fa-2x"></i>
										</div>
										<h6 className='fw-bold w-75'>{t('o21')}<br/>{t('o22')}</h6>
									</div>									
								</div>
								<div className="iconbox_item">
									<div className="title_wrap">
										<div className="py-1 pe-3">
											<i className="fas fa-mobile-alt fa-2x"></i>
										</div>
										<h6 className='fw-bold w-75'>{t('o31')}<br/>{t('o32')}</h6>
									</div>									
								</div>																							
								


							</div>
						</div>						
					</div>
				</div>
			</section>
)}