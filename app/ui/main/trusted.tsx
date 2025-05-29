"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Trusted() {
	
	const t = useTranslations('components.trusted');

  return (
		<section className="popular_event_section section_space_lg bg_dark bg-pattern3 decoration_wrap">
			<div className="container-fluid">
				<div className="row align-items-center justify-content-center">
					
					<div className="col col-lg-4">
						<div className="section_heading mb-lg-0">
							<h2 className="heading_text text-white">
								{t('title')}<br/><span className='fw-normal'>{t('sub')}</span>
							</h2>
							<div className="heading_description mb-0 text-white">
								{t('desc')}
							</div>
							<div className="heading_description mb-0 text-white">
								{t('subdesc')}
							</div>							
							<div className="btn_wrap pb-0">
								<a className="btn btn_primary btn_small text-white" href="/contact">
									<span >
										<small className='text-white fw-normal'>{t('btn')}</small>
										<small className='text-white fw-normal'>{t('btn')}</small>
									</span>
								</a>
							</div>
						</div>
					</div>

					<div className="col col-lg-3">
						<div className="popular_event_list mb-0">
							<ul className="unordered_list_block info_list">					
								<li>
									<div className="column"></div>
									<div className="column">
										<h5 className='my-0'>{t('o1t')}</h5>
										<p className='my-0'>{t('o1d')}</p>
									</div>
								</li>
								<li>
									<div className="column"></div>
									<div className="column">
										<h5 className='my-0'>{t('o2t')}</h5>
										<p className='my-0'>{t('o2d')}</p>
									</div>
								</li>
								<li>
									<div className="column"></div>
									<div className="column">
										<h5 className='my-0'>{t('o3t')}</h5>
										<p className='my-0'>{t('o3d')}</p>
									</div>
								</li>																											
							</ul>
						</div>
					</div>
					<div className="col col-lg-auto d-none d-md-block">
						<Image src="/assets/images/trusted/image_1.png" width={300} height={300} alt="Collab – Online Learning Platform"/>
					</div>

				</div>
			</div>
			<div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_3.png" width={270} height={270} alt="Collab – Online Learning Platform"/>
			</div>
			<div className="deco_item shape_img_3" data-parallax='{"y" : 170, "x": -230, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_3.png" width={200} height={200} alt="Collab – Online Learning Platform"/>
			</div>
		</section>
)}