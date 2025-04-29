"use client";

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { courseElementsDetails } from "@/app/utils/courseDataUtils";

export default function CoursePubDetails({ data }: { data: any }) {

	const t = useTranslations('pages.courses');
	const courseElements = courseElementsDetails(data.lessons);

	return (
		<section className="details_section courses_info_section section_space_lg">
			<div className="container">
				<div className="row">
					<div className="col col-lg-6">
						<div className="content_wrap">
							<div className="section_heading">
								<h2 className="heading_text mb-0">
								{data.sub_title}
								</h2>
							</div>
							<p>{data.card_description}</p>
						</div>
					</div>
					<div className="col col-lg-3 col-md-6">
						<div className="service_item" data-magnetic>
							<div className="item_icon">
								<Image src="/assets/images/icon/icon_desktop.svg" width={36} height={32} alt="Collab – Online Learning Platform" />
							</div>
							<div className="item_content">
								<h3 className="item_title">{t('format')}</h3>
								<ul className="info_list unordered_list_block">
									{courseElements.formats.map((item:string,index:number) => {
										return(
										<li key={'course-format-'+index}>
											<i className="fas fa-square"></i>
											<span>{item}</span>
										</li>)		
									})}
								</ul>
							</div>
						</div>
					</div>
					<div className="col col-lg-3 col-md-6">
						<div className="service_item" data-magnetic>
							<div className="item_icon">
								<Image src="/assets/images/icon/icon_calendar.svg" width={28} height={32} alt="Collab – Online Learning Platform" />
							</div>
							<div className="item_content">
								<h3 className="item_title">{t('duration')}</h3>
								<ul className="info_list unordered_list_block">
								{ Object.entries(courseElements.counter).map(([key, value]) => (
										<li key={'course-counter-'+key}>
											<i className="fas fa-square"></i>
											<span>{key}<b className='ms-2'>{value}</b></span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}