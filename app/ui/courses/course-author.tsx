"use client";

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import { richTextToHTML } from "@/app/utils/courseDataUtils";

export default function CoursePubBanner({ data }: { data: any }) {

	const t = useTranslations('pages.courses');
  
	return (
		<section className="details_section mentor_details_section section_space_lg bg_light">
			<div className="container">
				<div className="pt-0">
					<div className="row align-items-center">
						<div className="col col-lg-4">
							<div className="details_image image_widget">
								<Image src={data.avatar.url ? `http://localhost:1337${data.avatar.url}` : '/assets/images/mentor/mentor_details_image_1.jpg'} width={1042} height={1088} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="col col-lg-8">
							<div className="details_content ps-lg-5">
								<h2 className="details_item_title">{t('instructors')}</h2>
								<h3 className="mentor_name">{data.name}</h3>
								<h4 className="mentor_designation">{data.position}</h4>
								<ul className="meta_info_list unordered_list">
									<li>
										<i className="fas fa-envelope me-2"></i>
										<span>{data.email}</span>
									</li>
								</ul>
								<p dangerouslySetInnerHTML={{ __html: richTextToHTML(data.introduction) }} />
								<div className="row d-none">
									<div className="col col-lg-4">
										<div className="counter_item pe-0">
											<h3 className="counter_value">
												<span className="counter_value_text">45</span>
												<span>+</span>
											</h3>
											<p className="mb-0">
												Persons Mentored
											</p>
										</div>
									</div>

									<div className="col col-lg-4">
										<div className="counter_item pe-0">
											<h3 className="counter_value">
												<span className="counter_value_text">10</span>
												<span>+</span>
											</h3>
											<p className="mb-0">
												Workshops Attended
											</p>
										</div>
									</div>

									<div className="col col-lg-4">
										<div className="counter_item pe-0">
											<h3 className="counter_value">
												<span className="counter_value_text">8</span>
												<span>+</span>
											</h3>
											<p className="mb-0">
												Coaching Certificates
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		</section>
  );
}