"use client";

import { useState } from 'react';
import {useTranslations} from 'next-intl';

export default function CoursesFlexibility() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (query: string) => {
		setSearchQuery(query);
	};

	const t = useTranslations('components.flexibility');

	return (
	<section className="policy_section section_space_lg">
	<div className="container position-relative">
		<div className="section_heading text-center">
			<h2 className="heading_text mb-0">
				{t('title')}
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
							<span className="d-block">{t('t1_1')}</span>{t('t1_2')}
						</h3>
					</div>
					<p className="mb-0">
						{t('s1')}
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
							<span className="d-block">{t('t2_1')}</span>{t('t2_2')}</h3>
					</div>
					<p className="mb-0">
						{t('s2')}
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
							<span className="d-block">{t('t3_1')}</span>{t('t3_2')}</h3>
					</div>
					<p className="mb-0">
						{t('s3')}
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
							<span className="d-block">{t('t4_1')}</span>{t('t4_2')}</h3>
					</div>
					<p className="mb-0">
						{t('s4')}
					</p>
				</div>
			</div>
		</div>
	</div>
	</section>
	)}