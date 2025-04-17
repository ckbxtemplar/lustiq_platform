"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


export default function OffcanvasFilter() {

	return (
		<>
<aside className="sidebar filter_offcanvas position-fixed m-0">
<div className="close_btn_wrap">
	<button type="button" className="offCanvas_close_btn">
		<i className="fal fa-times"></i>
	</button>
</div>
<div className="content_wrapper">
	<div className="widget">
		<div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_category" aria-expanded="true" aria-controls="collapse_category">
			Category
		</div>
		<div className="collapse show" id="collapse_category">
			<div className="card card-body">
				<div className="checkbox_item">
					<input id="checkbox_design" type="checkbox">
					<label for="checkbox_design"><span>Design</span><span>(18)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_it_software" type="checkbox">
					<label for="checkbox_it_software"><span>IT & Software</span><span>(11)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_development" type="checkbox">
					<label for="checkbox_development"><span>Development</span><span>(10)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_marketing" type="checkbox">
					<label for="checkbox_marketing"><span>Marketing</span><span>(4)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_business" type="checkbox">
					<label for="checkbox_business"><span>Business</span><span>(8)</span></label>
				</div>
			</div>
		</div>
	</div>

	<div className="ratings_widget widget">
		<div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_ratings" aria-expanded="true" aria-controls="collapse_ratings">
			Ratings
		</div>
		<div className="collapse show" id="collapse_ratings">
			<div className="card card-body">
				<div className="checkbox_item">
					<input id="checkbox_star5" type="checkbox">
					<label for="checkbox_star5">
						<span>
							<i className="fas fa-star"></i> 5 stars
						</span>
						<span>(23)</span>
					</label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_star4half" type="checkbox">
					<label for="checkbox_star4half">
						<span>
							<i className="fas fa-star"></i> 4.5 stars
						</span>
						<span>(22)</span>
					</label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_star4" type="checkbox">
					<label for="checkbox_star4">
						<span>
							<i className="fas fa-star"></i> 4 stars
						</span>
						<span>(20)</span>
					</label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_star3half" type="checkbox">
					<label for="checkbox_star3half">
						<span>
							<i className="fas fa-star"></i> 3.5 stars
						</span>
						<span>(18)</span>
					</label>
				</div>
			</div>
		</div>
	</div>

	<div className="widget">
		<div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_instructors" aria-expanded="true" aria-controls="collapse_instructors">
			Instructors
		</div>
		<div className="collapse show" id="collapse_instructors">
			<div className="card card-body">
				<div className="checkbox_item">
					<input id="checkbox_lisa_baker" type="checkbox">
					<label for="checkbox_lisa_baker"><span>Lisa Baker</span><span>(18)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_brandy_carlson" type="checkbox">
					<label for="checkbox_brandy_carlson"><span>Brandy Carlson</span><span>(10)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_kevin_taylor" type="checkbox">
					<label for="checkbox_kevin_taylor"><span>Kevin Taylor</span><span>(11)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_catherine_parker" type="checkbox">
					<label for="checkbox_catherine_parker"><span>Catherine Parker</span><span>(11)</span></label>
				</div>
			</div>
		</div>
	</div>

	<div className="widget">
		<div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_price" aria-expanded="true" aria-controls="collapse_price">
			Price
		</div>
		<div className="collapse show" id="collapse_price">
			<div className="card card-body">
				<div className="checkbox_item">
					<input id="checkbox_all" type="checkbox">
					<label for="checkbox_all"><span>All</span><span>(18)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_free" type="checkbox">
					<label for="checkbox_free"><span>FREE</span><span>(10)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_paid" type="checkbox">
					<label for="checkbox_paid"><span>Paid</span><span>(11)</span></label>
				</div>
			</div>
		</div>
	</div>

	<div className="widget">
		<div className="widget_title" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_level" aria-expanded="true" aria-controls="collapse_level">
			Level
		</div>
		<div className="collapse show" id="collapse_level">
			<div className="card card-body">
				<div className="checkbox_item">
					<input id="checkbox_all_levels" type="checkbox">
					<label for="checkbox_all_levels"><span>All Levels</span><span>(18)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_beginner" type="checkbox">
					<label for="checkbox_beginner"><span>Beginner</span><span>(10)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_intermediate" type="checkbox">
					<label for="checkbox_intermediate"><span>Intermediate</span><span>(11)</span></label>
				</div>
				<div className="checkbox_item">
					<input id="checkbox_expert" type="checkbox">
					<label for="checkbox_expert"><span>Expert</span><span>(11)</span></label>
				</div>
			</div>
		</div>
	</div>
</div>
</aside>
<div className="offCanvas_overlay"></div>
</>
)}