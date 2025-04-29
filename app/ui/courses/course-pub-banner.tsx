"use client";

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/app/ui/breadcrumb';

export default function CoursePubBanner({ data }: { data: any }) {

	const t = useTranslations('pages.courses');
  
	return (
		<section className="page_banner">
			<div className="container">
				<div className="content_wrapper">
					<div className="row align-items-center">
						<div className="col col-lg-7">
							<Breadcrumb/>
							<h1 className="page_title">
							{data.title || "Untitled Course"}
							</h1>
							<ul className="meta_info_list unordered_list">
								<li>
									<i className="fas fa-chart-bar me-2"></i>
									<span>{data?.Details?.level || 'Beginner'}</span>
								</li>
								<li>
									<i className="fas fa-clock me-2"></i>
									<span>{data?.Details?.duration || '0'} {t('hours')}</span>
								</li>
							</ul>
							<ul className="btns_group unordered_list">
								<li>
									<Link href="/pricing" className="btn btn_dark">
										<span>
											<small>{t('subscribe')}</small>
											<small>{t('subscribe')}</small>
										</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col col-lg-5">
							<div className="image_widget page_banner_image">
								<Image src={data?.cover?.url ? `http://localhost:1337${data.cover.url}` : '/assets/images/course/course_details_image_1.jpg'} width={500} height={460} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}