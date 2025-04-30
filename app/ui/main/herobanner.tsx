"use client";

import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import {useTranslations} from 'next-intl';

export default function HeroBanner() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
			redirect(`/courses?s=${encodeURIComponent(searchQuery)}`);
    }
  };
	
	const b = useTranslations('buttons');
	const t = useTranslations('pages.home.heroSection');
	const tags = useTranslations('tags');

  return (
	<section className="hero_banner style_2 mouse_move" style={{ backgroundImage: "url('/assets/images/shape/shape_img_6.png')" }}>
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-6">
					<h1 className="banner_big_title">						
						{t('title')}
					</h1>
					<p className="banner_description">						
						{t('subtitle')}
					</p>
					<form action="#" onSubmit={handleSearch}>
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
					<ul className="tags_list unordered_list">
						<li><a href="#!">{tags('sexuality')}</a></li>
						<li><a href="#!">{tags('selfawareness')}</a></li>
						<li><a href="#!">{tags('intimacy')}</a></li>
						<li><a href="#!">{tags('relationship')}</a></li>
						<li><a href="#!">{tags('desire')}</a></li>
						<li><a href="#!">{tags('sexeducation')}</a></li>
						<li><a href="#!">{tags('sexpositive')}</a></li>
						<li><a href="#!">{tags('emotionalsecurity')}</a></li>
						<li><a href="#!">{tags('sexpsychology')}</a></li>
						<li><a href="#!">{tags('bodyawareness')}</a></li>
					</ul>
				</div>
				<div className="col col-lg-6">
					<div className="banner_image_2">
						<div className="child_image image_wrap_1">
							<div className="layer" data-depth="0.1">
								<Image src="/assets/images/banner/hero_banner_img_team1.jpg" width={700} height={467} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_2">
							<div className="layer" data-depth="0.2">
								<Image src="/assets/images/banner/hero_banner_img_3.jpg" width={518} height={345} alt="Collab – Online Learning Platform"/>
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