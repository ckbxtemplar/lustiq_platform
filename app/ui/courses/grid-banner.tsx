"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


export default function GridBanner() {

	return (	
		<section className="page_banner">
		<div className="container">
			<div className="content_wrapper" style={{backgroundImage: `url('assets/images/banner/page_banner_image.png')`}}>
				<div className="row align-items-center">
					<div className="col col-lg-6">
						<ul className="breadcrumb_nav unordered_list">
							<li><a href="index.html">Home</a></li>
							<li>Courses</li>
						</ul>
						<h1 className="page_title">Course Grid</h1>
						<p className="page_description">
							Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel. Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus turpis in eu mi bibendum neque egestas
						</p>
						<form action="#">
							<div className="form_item mb-0">
								<input type="search" name="search" placeholder="What do you want to learn ?"/>
								<button type="submit" className="btn btn_dark">
									<span>
										<small>Search</small>
										<small>Search</small>
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</section>)
};