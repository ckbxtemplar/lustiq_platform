"use client";

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import {useTranslations} from 'next-intl';
import TagsCloud from '@/app/ui/tags-cloud';

export default function HeroBanner({page = 'home'}) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
			redirect(`/courses?s=${encodeURIComponent(searchQuery)}`);
    }
  };
	
	const b = useTranslations('buttons');
	const t = useTranslations('pages.'+page+'.heroSection');
	const tags = useTranslations('tags');

  return (
	<section className="hero_banner bg-white style_2 mouse_move pb-5">
		<div className="container">
			<div className="row align-items-center">
				
				<div className="col col-lg-7">
					<div className="my-5 text-start">
						<h1 className="text-black banner_big_title m-0">						
							{t('title')}
						</h1>																	
						<a href='#newsletter' className='btn btn_dark btn_small mt-3'><span><small>{t('ctaButton')}</small><small>{t('ctaButton')}</small></span></a>
					</div>
					<div className="my-5 text-end text-md-start">
						<p className="banner_description m-0">{t('subtitle')}</p>					
						<a href='/courses' className='btn border_dark btn_small mt-3'><span><small>{t('ctaButton2')}</small><small>{t('ctaButton2')}</small></span></a>					
					</div>
					{ page === 'Xhome' && (
					<form action="#" onSubmit={handleSearch} className="mt-5 d-none d-md-block">
						<div className="form_item">
							<input 
								type="search" 
								name="search" 
								placeholder={t('buttonPlaceholder')}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button type="submit" className="btn btn_dark">
								<span>
									<small>{b('search')}</small>
									<small>{b('search')}</small>
								</span>
							</button>
						</div>
					</form>
					)}
					<div className="my-5">
						<TagsCloud/>
					</div>
				</div>
				<div className="col col-lg-5">
					<div className="banner_image_2">
						<div className="child_image image_wrap_1">
							<div className="layer" data-depth="0.1">
								<Image src="/assets/images/banner/hero_banner_img_team1_v2.jpg" width={700} height={405} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_2">
							<div className="layer" data-depth="0.2">
								<Image src="/assets/images/banner/hero_banner_img_7.jpg" width={594} height={437} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_3">
							<div className="layer" data-depth="0.3">
								<Image src="/assets/images/banner/hero_banner_img_4.jpg" width={580} height={425} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_4">
							<div className="layer" data-depth="0.3">
								<Image src="/assets/images/banner/hero_banner_img_5.jpg" width={518} height={345} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className='container-fluid px-5'>
			<div className="row mt-5">
				<div className="col col-md-4">
					<div className="service_item" data-magnetic>
						<div className="item_icon">							
							<img src="/assets/images/service/icon_academic_cap.svg" alt="Collab – Online Learning Platform"/>
						</div>
						<div className="item_content">
							<h3 className="item_title">{t('a_1_t')}</h3>
							<p className="mb-0">
								{t('a_1_d')}
							</p>
						</div>
					</div>
				</div>
				<div className="col col-md-4">
					<div className="service_item" data-magnetic>
						<div className="item_icon">
							<img src="/assets/images/service/icon_communication.svg" alt="Collab – Online Learning Platform"/>
						</div>
						<div className="item_content">
							<h3 className="item_title">{t('a_2_t')}</h3>
							<p className="mb-0">
								{t('a_1_d')}
							</p>
						</div>
					</div>
				</div>
				<div className="col col-md-4">
					<div className="service_item" data-magnetic>
						<div className="item_icon">							
							<img src="/assets/images/service/icon_physics.svg" alt="Collab – Online Learning Platform"/>
						</div>
						<div className="item_content">
							<h3 className="item_title">{t('a_3_t')}</h3>
							<p className="mb-0">
								{t('a_3_d')}
							</p>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</section>
)}