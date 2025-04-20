"use client"

import { useState } from 'react';
import Breadcrumb from '@/app/ui/breadcrumb';
import {useTranslations} from 'next-intl';

interface BannerProps {
	page?: string;  
	title: string;
	description: string;
	search:boolean;
	onSearch?: (query: string) => void;
}


export default function Banner({page, title, description, search, onSearch }: BannerProps) {
  
	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get('search') as string;    
    if (onSearch) {
      onSearch(searchQuery); // ✅ csak ha definiálva van
    }		
  };

	const t = useTranslations('buttons');

	return (	
		<section className="page_banner">
		<div className="container">
			<div className="content_wrapper" style={{backgroundImage: `url('/assets/images/banner/page_banner_image.png')`}}>
				<div className="row align-items-center">
					<div className="col col-md-6">

						<Breadcrumb/>

						<h1 className="page_title">{title}</h1>
						<p className="page_description">
							{description}
						</p>
						{ search && onSearch && <form action="#" onSubmit={handleFormSubmit}>
							<div className="form_item mb-0">
								<input 
								type="search" 
								name="search" 
								placeholder="What do you want to learn ?"
								/>
								<button type="submit" className="btn btn_dark">
									<span>
										<small>{t('search')}</small>
										<small>{t('search')}</small>
									</span>
								</button>
							</div>
						</form> }
						{ page === "dashboard_profile" && <ul className="tags_list unordered_list">
                  <li><a href="#section_personal_data">PERSONAL DATA</a></li>
                  <li><a href="#section_billing_address">Billing address</a></li>
                </ul> }
					</div>
				</div>
			</div>
		</div>
		</section>)
};