"use client";

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import {useTranslations} from 'next-intl';

export default function SoonRichtext({version = 'soon'}) {
	
	const b = useTranslations('buttons');
	const t = useTranslations('pages.home.heroSection');
	const tags = useTranslations('tags');

  return (
			<section className="getstart_section section_space_lg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col col-lg-6">
							<div className="content_wrap ps-lg-5">
								<div className="section_heading">
									<h2 className="heading_text">
										Come Teach with Us and Become an Instructor Today
									</h2>
									<p className="heading_description mb-0">
										Augue ut lectus arcu bibendum at varius vel. Ullamcorper eget nulla facilisi etiam dignissim. Habitasse platea dictumst quisque sagittis. Quis lectus nulla at volutpat diam ut venenatis
									</p>
								</div>
								<div className="btn_wrap p-0">
									<a className="btn btn_dark" href="contact.html">
										<span>
											<small>Get Started</small>
											<small>Get Started</small>
										</span>
									</a>
								</div>
							</div>
						</div>						
						<div className="col col-lg-6">
							<div className="image_widget">
								<Image src="/assets/images/about/about_image_4.jpg" width={570} height={595} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
					</div>
				</div>
			</section>
)}