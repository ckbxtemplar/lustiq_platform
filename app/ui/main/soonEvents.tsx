"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function SoonEvents({page = 'soon'}) {
	
	const t = useTranslations('components.soonEventsSection');

  return (
		<section className="popular_event_section section_space_lg bg_dark bg-pattern3 decoration_wrap">
			<div className="container">
				<div className="row align-items-center">
					<div className="col col-lg-7">
						<div className="section_heading mb-lg-0">
							<h2 className="heading_text text-white">
								{t('title')}
							</h2>
							<div className="heading_description mb-0 text-white">
								{t('sub')}
							</div>
							<div className="btn_wrap pb-0 d-none">
								<a className="btn btn_primary" href="event.html">
									<span>
										<small>All Events</small>
										<small>All Events</small>
									</span>
								</a>
							</div>
						</div>
					</div>
					<div className="col col-lg-5">
						<div className="popular_event_list">
							<ul className="unordered_list_block info_list">					
								<li>
									<div className="column text-center">
										<i className="fas fa-square"></i>
									</div>
									<div className="column">
										<h6 className='mb-0 fw-normal'>{t('points.1')}</h6>
									</div>
								</li>
								<li>
									<div className="column">
										<i className="fas fa-square"></i>
									</div>
									<div className="column">
										<h6 className='mb-0 fw-normal'>{t('points.2')}</h6>
									</div>
								</li>
								<li>
									<div className="column">
										<i className="fas fa-square"></i>
									</div>
									<div className="column">
										<h6 className='mb-0 fw-normal'>{t('points.3')}</h6>
									</div>
								</li>
								<li>
									<div className="column">
										<i className="fas fa-square"></i>
									</div>
									<div className="column">
										<h6 className='mb-0 fw-normal'>{t('points.4')}</h6>
									</div>
								</li>
								<li>
									<div className="column">
										<i className="fas fa-square"></i>
									</div>
									<div className="column">
										<h6 className='mb-0 fw-normal'>{t('points.5')}</h6>
									</div>
								</li>																					
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_3.png" width={270} height={270} alt="Collab – Online Learning Platform"/>
			</div>
			<div className="deco_item shape_img_2" data-parallax='{"x" : -130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_3.png" width={270} height={270} alt="Collab – Online Learning Platform"/>
			</div>
			<div className="deco_item shape_img_3" data-parallax='{"y" : -130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_3.png" width={386} height={386} alt="Collab – Online Learning Platform"/>
			</div>
		</section>
)}