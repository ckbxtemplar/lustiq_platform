"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/app/ui/breadcrumb';

interface BannerProps {
	page?: string;  
	title: string;
	description: string;
	search:boolean;
}

export default function GridBanner({page, title, description, search }: BannerProps) {


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
						{ search && <form action="#">
							<div className="form_item mb-0">
								<input type="search" name="search" placeholder="What do you want to learn ?"/>
								<button type="submit" className="btn btn_dark">
									<span>
										<small>Search</small>
										<small>Search</small>
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