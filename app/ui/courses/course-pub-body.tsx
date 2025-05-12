"use client";

import {useTranslations} from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import CourseVideo from '@/app/ui/dashboard/components/CourseVideo';
import { richTextToHTML } from "@/app/utils/courseDataUtils";

export default function CoursePubBody({ data }: { data: any }) {

	const t = useTranslations('pages.courses');
  
	return (
		<section className="details_section course_details_section mb-5">
			<div className="container">
				<div className="row">
					<div className="col col-lg-8 order-lg-last">
						<div className="ps-lg-5">
							<div className="section_heading">
								<h2 className="heading_text">
									Course Content
								</h2>
							</div>
							<div className="intro_video mb-4">
								<div className="video_wrap">
									{ data.intro_video?.url && (<CourseVideo videoSrc={data.intro_video.url} videoName={data.intro_video.name}/>)}
								</div>
							</div>
							<div dangerouslySetInnerHTML={{ __html: richTextToHTML(data.introduction) }} />
						</div>
					</div>

					<div className="col col-lg-4">
						<div className="accordion style_2" id="corse_details_accordion">
							{data.lessons.map((item:any,index:number) => {
								return(
							<div className="accordion-item" key={'accordian-item-'+index}>
								<div className={`accordion-button `+(index===0?`collapsed`:``)} role="button" data-bs-toggle="collapse" data-bs-target={'#collapse_'+index} aria-expanded={(index===0?`true`:`false`)}>
									{item.title=='ai' ? (
										<span>{t('ai')}</span>
									) : (
										<span>{item.title}</span>
									)}
								</div>
								<div id={'collapse_'+index} className={`accordion-collapse collapse `+(index===0?`show`:``)} data-bs-parent="#corse_details_accordion">
									<div className="accordion-body">
										<p>{item.description_public}</p>
									</div>
								</div>
							</div>)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}