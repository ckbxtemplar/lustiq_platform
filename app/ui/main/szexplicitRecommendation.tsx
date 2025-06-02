"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function SzexplicitRecommendation({version = 'pricing'}) {
	
	const t = useTranslations('components.szexplicit.'+version);
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
		<section className="popular_event_section section_space_lg pb-0 bg_light decoration_wrap">
			<div className="container">
				<div className="row align-items-top">
					<div className="col col-lg-6 section_heading">		
						<h2 className="heading_text">
							{t('title')}
						</h2>
						<div className="quote_icon mb-3"><img src="/assets/images/icon/icon_quote.svg" alt="Collab – Online Learning Platform"/></div>
						<h3 className="mb-3">
							{t('subtitle')}
						</h3>
						<p>{t('sub')}</p>

						<div className="btn_wrap my-5 p-0">
							<a className="btn btn_dark" href="https://www.youtube.com/@Szexplicit" target="_youtube">
								<span>
									<small>{t('btn')}</small>
									<small>{t('btn')}</small>
								</span>
							</a>
						</div>

					</div>
					<div className="col col-lg-6">		
						<div className="row">
							<div className="col col-lg-6 p-2">
								<div className="yt_channel_item">
										<a href="#!">
											<img src="/assets/images/youtube/yt_1.jpg" alt="Microsoft"/>
											<p className='fw-normal mt-2 mb-0 text-start'>Az első élő eseményünk | Felmértük mit tanultatok a szexről</p>
										</a>
								</div>								
							</div>
							<div className="col col-lg-6 p-2">
								<div className="yt_channel_item">
										<a href="#!">
											<img src="/assets/images/youtube/yt_2.jpg" alt="Microsoft"/>
											<p className='fw-normal mt-2 mb-0 text-start'>"Imádkoztam azért, hogy hetero legyek" | Hodász András, egykori pap</p>
										</a>
								</div>								
							</div>
							<div className="col col-lg-6 p-2">
								<div className="yt_channel_item">
										<a href="#!">
											<img src="/assets/images/youtube/yt_3.jpg" alt="Microsoft"/>
											<p className='fw-normal mt-2 mb-0 text-start'>Élethű szexrobot személyiséggel és alakváltó segédeszköz | SexTech Konferencián jártunk</p>
										</a>
								</div>								
							</div>
							<div className="col col-lg-6 p-2">

								<div className="yt_channel_item">
										<a href="#!">
											<img src="/assets/images/youtube/yt_4.jpg" alt="Microsoft"/>
											<p className='fw-normal mt-2 mb-0 text-start'>Szorongás és pánikbetegség mellett lehet jó a szex? | Takács Dalma, művészetterapeuta</p>
										</a>
								</div>								

							</div>

						</div>
						<div className="btn_wrap mt-4 p-0 text-end">
							<a className="btn border_red btn_small" href="https://www.youtube.com/@Szexplicit" target="_youtube">
								<span>
									<small>{t('btn2')}</small>
									<small>{t('btn2')}</small>
								</span>
							</a>
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