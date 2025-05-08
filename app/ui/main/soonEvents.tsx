"use client";

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import {useTranslations} from 'next-intl';

export default function SoonEvents({page = 'soon'}) {
	
	const b = useTranslations('buttons');
	const t = useTranslations('pages.home.heroSection');
	const tags = useTranslations('tags');

  return (
		<section className="popular_event_section section_space_lg bg_dark decoration_wrap">
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-7">
					<div className="section_heading mb-lg-0">
						<h2 className="heading_text text-white">
							Online Events are Amazing Opportunities to Have Fun and Learn
						</h2>
						<p className="heading_description mb-0 text-white">
							Rhoncus dolor purus non enim praesent elementum facilisis. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Iaculis eu non diam phasellus vestibulum lorem sed risus.
						</p>
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
						<h3 className="wrap_title">Most Popular Events</h3>
						<ul className="unordered_list_block">
							<li>
								<div className="column">
									<b className="day">12</b>
									<span className="month">february</span>
									<strong className="time">03:50 PM</strong>
								</div>
								<div className="column">
									<h4 className="event_title">Digital Transformation Conference</h4>
									<span className="event_name">
										<strong>Prepare for:</strong> <small>Lora Hill</small>
									</span>
								</div>
							</li>
							<li>
								<div className="column">
									<b className="day">12</b>
									<span className="month">february</span>
									<strong className="time">03:50 PM</strong>
								</div>
								<div className="column">
									<h4 className="event_title">Digital Transformation Conference</h4>
									<span className="event_name">
										<strong>Prepare for:</strong> <small>Lora Hill</small>
									</span>
								</div>
							</li>
							<li>
								<div className="column">
									<b className="day">12</b>
									<span className="month">february</span>
									<strong className="time">03:50 PM</strong>
								</div>
								<div className="column">
									<h4 className="event_title">Digital Transformation Conference</h4>
									<span className="event_name">
										<strong>Prepare for:</strong> <small>Lora Hill</small>
									</span>
								</div>
							</li>
							<li>
								<div className="column">
									<b className="day">12</b>
									<span className="month">february</span>
									<strong className="time">03:50 PM</strong>
								</div>
								<div className="column">
									<h4 className="event_title">Digital Transformation Conference</h4>
									<span className="event_name">
										<strong>Prepare for:</strong> <small>Lora Hill</small>
									</span>
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