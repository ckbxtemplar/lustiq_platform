"use client";

import { useState } from 'react';
import {useTranslations} from 'next-intl';

export default function CoursesFlexibility() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	const t = useTranslations('pages.courses');

	return (
	<section className="policy_section section_space_lg">
	<div className="container position-relative">
		<div className="section_heading text-center">
			<h2 className="heading_text mb-0">
				Flexibility in Planning and Teaching
			</h2>
		</div>
		<div className="row">
			<div className="col col-lg-3">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon bg_dark">
							<i className="fas fa-book-open"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Allocate the time </span>
							for study
						</h3>
					</div>
					<p className="mb-0">
						Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat
					</p>
				</div>
			</div>
			<div className="col col-lg-3">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon bg_dark">
							<i className="fas fa-code-branch"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Alternative learning </span>
							formats
						</h3>
					</div>
					<p className="mb-0">
						Posuere ac ut consequat semper viverra nam libero justo. Semper feugiat nibh sed pulvinar proin gravida hendrerit
					</p>
				</div>
			</div>
			<div className="col col-lg-3">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon bg_dark">
							<i className="fas fa-comment-smile"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Mentors with over 5 </span>
							years of experience
						</h3>
					</div>
					<p className="mb-0">
						Nunc sed velit dignissim sodales ut eu sem. Id faucibus nisl tincidunt eget. Nunc non blandit massa enim
					</p>
				</div>
			</div>
			<div className="col col-lg-3">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon bg_dark">
							<i className="fas fa-user-graduate"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Follow the Training </span>
							Program
						</h3>
					</div>
					<p className="mb-0">
						Tincidunt vitae semper quis lectus nulla at. Eget lorem dolor sed viverra ipsum nunc. Tellus at urna condimentum
					</p>
				</div>
			</div>
		</div>
	</div>
	</section>
	)}