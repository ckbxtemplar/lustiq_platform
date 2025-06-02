"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function WhyAndHow({version = 'pricing'}) {
	
	const t = useTranslations('components.whyandhow.'+version);
	const tags = useTranslations('tags');

	const sub2A = ['soon2'];
	const boldA = ['soon1'];
	const italicA = ['soon1'];

	let img_src = 'image_1.png';
	let img_w = 200;
	let img_h = 200;

	switch (version) {	
		case 'pricing':
			img_src = 'lustiq_rt_1.jpg';
			img_w = 600;
			img_h = 600;
			break;			
	}

	return (
			<section className="popular_event_section section_space_lg bg_light decoration_wrap" id="section_whyandhow">
				<div className="container">

					<div className="row align-items-center">					
						<div className="col col-lg-8">
							<div className="content_wrap pe-lg-3 text-end ps-lg-5">
									<h2 className="heading_text">
										{t('t1')}
									</h2>
									<p className="heading_description my-3">
										{t('d11')}
									</p>		
									<p className="heading_description">
										{t('d12')}
									</p>																													
							</div>
						</div>	
						<div className="col col-lg-3">
							<div className="">
								<Image src={'/assets/images/whyandhow/image0.png'} width={img_w} height={img_h} alt="Collab – Online Learning Platform"/>
							</div>
						</div>												
					</div>	
					<div className="row align-items-center">
						<div className="col col-lg-3">
							<div className="">
								<Image src={'/assets/images/whyandhow/image1.png'} width={img_w} height={img_h} alt="Collab – Online Learning Platform"/>
							</div>
						</div>						
						<div className="col col-lg-8">
							<div className="content_wrap ps-lg-3 text-start">
									<h2 className="heading_text">
										{t('t2')}
									</h2>
									<div className=" mt-3">
										{t('d21')}
									</div>
									<div className=" my-2">
										{t('d22')}
									</div>
									<div className=" mb-3">
										{t('d23')}
									</div>
									<p className="heading_description mb-3">
										{t('d24')}
									</p>																											
							</div>
						</div>						
					</div>

				</div>
				<div className="deco_item shape_img_1" data-parallax='{"y" : 230, "x":100, "smoothness": 6}'>
					<Image src="/assets/images/shape/shape_img_3.png" width={270} height={270} alt="Collab – Online Learning Platform"/>
				</div>
				<div className="deco_item shape_img_3" data-parallax='{"y" : -170, "x": -130, "smoothness": 6}'>
					<Image src="/assets/images/shape/shape_img_3.png" width={200} height={200} alt="Collab – Online Learning Platform"/>
				</div>				
			</section>
)}