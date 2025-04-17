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
	
	const t = useTranslations('buttons');

  return (
	<section className="hero_banner style_2 mouse_move" style={{ backgroundImage: "url('/assets/images/shape/shape_img_6.png')" }}>
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-6">
					<h1 className="banner_big_title">
						Learn Programming with Online Course
					</h1>
					<p className="banner_description">
						Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum fugiat
					</p>
					<form action="#" onSubmit={handleSearch}>
						<div className="form_item">
							<input 
								type="search" 
								name="search" 
								placeholder="What do you want to learn ?"
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
							/>
							<button type="submit" className="btn btn_dark">
								<span>
									<small>{t('search')}</small>
									<small>{t('search')}</small>
								</span>
							</button>
						</div>
					</form>
					<ul className="tags_list unordered_list">
						<li><a href="#!">JAVA</a></li>
						<li><a href="#!">PYTHON</a></li>
						<li><a href="#!">JavaScript</a></li>
						<li><a href="#!">C++</a></li>
						<li><a href="#!">QA</a></li>
						<li><a href="#!">Ruby</a></li>
						<li><a href="#!">Android</a></li>
						<li><a href="#!">.NET</a></li>
						<li><a href="#!">DevOps</a></li>
						<li><a href="#!">Project Manager</a></li>
					</ul>
				</div>
				<div className="col col-lg-6">
					<div className="banner_image_2">
						<div className="image_wrap_1">
							<div className="layer" data-depth="0.1">
								<Image src="/assets/images/banner/hero_banner_img_2.png" width={1130} height={3008} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_2">
							<div className="layer" data-depth="0.3">
								<Image src="/assets/images/banner/hero_banner_img_3.jpg" width={518} height={336} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_3">
							<div className="layer" data-depth="0.2">
								<Image src="/assets/images/banner/hero_banner_img_4.jpg" width={580} height={376} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="child_image image_wrap_4">
							<div className="layer" data-depth="0.4">
								<Image src="/assets/images/banner/hero_banner_img_5.jpg" width={518} height={336} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)}