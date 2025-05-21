"use client";

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import {useTranslations} from 'next-intl';
import { ScrollRevealWords } from '@/components/animate/text/scroll-reveal';

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
	<section className="hero_banner bg-pattern style_2 mouse_move" style={{ backgroundImage: "url('/assets/images/shape/shape_img_6.png')" }}>
		<div className="container">
			<div className="row align-items-center">
				
				<div className="col col-lg-6">
					<h2 className="text-white my-5">						
						<ScrollRevealWords>{t('title')}</ScrollRevealWords>
					</h2>
					{ page === 'home' && (
					<h1 className="banner_big_title my-5">						
						<ScrollRevealWords>{t('title2')}</ScrollRevealWords>
					</h1>						
					)}
					<h4 className="text-white my-5"><ScrollRevealWords>{t('subtitle2')}</ScrollRevealWords></h4>				
					<h4 className="text-white my-5"><ScrollRevealWords>{t('subtitle')}</ScrollRevealWords></h4>					
					{ page === 'home' && (
					<form action="#" onSubmit={handleSearch} className="mt-5">
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
					<ul className="tags_list unordered_list d-none">
						<li><a href="#!">{tags('sexpositive')}</a></li>
						<li><a href="#!">{tags('selfconfidence')}</a></li>
						<li><a href="#!">{tags('communication')}</a></li>
						<li><a href="#!">{tags('relationship')}</a></li>
						<li><a href="#!">{tags('bodyawareness')}</a></li>
						<li><a href="#!">{tags('desire')}</a></li>
						<li><a href="#!">{tags('safety')}</a></li>						
					</ul>
				</div>
				<div className="col col-lg-6">
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
	</section>
)}