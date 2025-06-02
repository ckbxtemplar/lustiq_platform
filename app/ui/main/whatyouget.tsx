"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function WhatYouGet({version = 'pricing'}) {
	
	const t = useTranslations('components.whatyouget.'+version);
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
        <section className="expect_from_course section_space_lg" id="section_whatyouget">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4">
                <div className="section_heading">
                  <h2 className="heading_text mb-3 pb-3">
                    {t('title')}
                  </h2>
                  <p className="heading_description my-3 py-3">
                    {t('sub')}
                  </p>
									<div className="btn_wrap d-none d-lg-flex justify-content-start  mt-3 pt-3">
										<a className="btn btn-dark" href="/regist?msg=registbeforecheckout">
											<span>
												<small>{t('btn')}</small>
												<small>{t('btn')}</small>
											</span>
										</a>
									</div>									
                </div>

              </div>
              <div className="col col-lg-8">



                <div className="row">
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img src="/assets/images/whatyouget/1.png" alt="Collab – Online Learning Platform"/>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('o1t')}</h3>
                        <p className="mb-0">
                          {t('o1d')}
                        </p>
                        <p className="mb-0 fw-bold">
                          {t('o1s')}
                        </p>												
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img src="/assets/images/whatyouget/2.png" alt="Collab – Online Learning Platform"/>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('o2t')}</h3>
                        <p className="mb-0">
                          {t('o2d')}
                        </p>
                        <p className="mb-0 fw-bold">
                          {t('o2s')}
                        </p>												
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img src="/assets/images/whatyouget/3.png" alt="Collab – Online Learning Platform"/>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('o3t')}</h3>
                        <p className="mb-0">
                          {t('o3d')}
                        </p>
                        <p className="mb-0 fw-bold">
                          {t('o3s')}
                        </p>												
                      </div>
                    </div>
                  </div>
                  <div className="col col-md-6">
                    <div className="service_item" data-magnetic>
                      <div className="item_icon">
                        <img src="/assets/images/whatyouget/4.png" alt="Collab – Online Learning Platform"/>
                      </div>
                      <div className="item_content">
                        <h3 className="item_title">{t('o4t')}</h3>
                        <p className="mb-0">
                          {t('o4d')}
                        </p>
                        <p className="mb-0 fw-bold">
                          {t('o4s')}
                        </p>												
                      </div>
                    </div>
                  </div>
                </div>

                <div className="btn_wrap pb-0 d-block d-lg-none text-center">
                  <a className="btn border_dark" href="course.html">
                    <span>
                      <small>Explore Courses</small>
                      <small>Explore Courses</small>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
)}