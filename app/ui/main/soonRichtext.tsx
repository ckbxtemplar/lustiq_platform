"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function SoonRichtext({version = 'soon'}) {
	
	const b = useTranslations('buttons');
	const t = useTranslations('components.richTextSection.'+version);
	const tags = useTranslations('tags');

	const sub2A = ['soon2'];
	const boldA = ['soon1'];
	const italicA = ['soon1'];

	let img_src = 'lustiq_rt_1.jpg';
	let img_w = 600;
	let img_h = 600;

	switch (version) {	
		case 'soon1':
			img_src = 'lustiq_rt_1.jpg';
			img_w = 600;
			img_h = 600;
			break;
		case 'soon2':
			img_src = 'lustiq_rt_2.jpg';
			img_w = 600;				
			img_h = 600;				
	}

  return (
			<section className="getstart_section section_space_lg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col col-lg-7">
							<div className="content_wrap ps-lg-5">
								<div className="section_heading m-0">
									<h2 className="heading_text">
										{t('title')}
									</h2>
									<p className="heading_description mb-3">
										{t('sub')}
									</p>
									{sub2A.includes(version) && (
									<p className="heading_description mb-3">
										{t('sub2')}
									</p>	
									)}									
									{boldA.includes(version) && (
									<p className="heading_description mb-3 fw-bold">
										{t('bold')}
									</p>	
									)}
									{italicA.includes(version) && (		
									<p className="heading_description mb-3 fst-italic">
										{t('italic')}
									</p>					
									)}													
								</div>
								<div className="btn_wrap p-0 d-none">
									<a className="btn btn_dark" href="contact.html">
										<span>
											<small>Get Started</small>
											<small>Get Started</small>
										</span>
									</a>
								</div>
							</div>
						</div>						
						<div className="col col-lg-4 offset-lg-1">
							<div className="image_widget">
								<Image src={'/assets/images/about/'+img_src} width={img_w} height={img_h} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
					</div>
				</div>
			</section>
)}