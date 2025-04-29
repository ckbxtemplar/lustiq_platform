import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import NewsletterSection from '@/app/ui/newsletter-section';
import CoursePubBanner from '@/app/ui/courses/course-pub-banner';
import CoursePubDetails from '@/app/ui/courses/course-pub-details';
import CoursePubBody from '@/app/ui/courses/course-pub-body';
import CourseAuthor from '@/app/ui/courses/course-author';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { GridListSkeleton } from '@/app/ui/skeletons';
import GridList from '@/app/ui/courses/grid-list';
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Course',
};

export default async function CouresView(props: { params: Promise<{ id: string, lang: string }>}) {
  const params = await props.params;
  const slug = params.id;
	const language = params.lang;

	const course = await fetchCourse(slug);

	if (!course || !course?.data || !course?.data?.courses || course.data.courses.length !== 1) {
		notFound();
	}	

	const data = course.data.courses[0];

  return (
		<main className="page_content">

		<CoursePubBanner data={data} />

		<CoursePubDetails data={data} />

		<CoursePubBody data={data} />

		<CourseAuthor data={data.author}></CourseAuthor>

		<section className="course_deals_section section_space_lg bg_light decoration_wrap overflow-hidden d-none">
			<div className="container">
				<div className="row align-items-center justify-content-lg-between">
					<div className="col col-lg-5 order-lg-last">
						<div className="image_widget">
							<Image src="/assets/images/about/about_image_5.jpg" width={1000} height={940} alt="Collab – Online Learning Platform"/>
						</div>
					</div>
					<div className="col col-lg-6">
						<div className="content_wrap">
							<div className="section_heading">
								<h2 className="heading_text">
									Data Warehouse Concepts, Design, and Data Integration
								</h2>
								<p className="heading_description mb-0">
									Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Consectetur purus ut faucibus pulvinar elementum
								</p>
							</div>
							<div className="deals_countdown">
								<ul className="countdown_timer unordered_list" data-countdown="2025/03/31"></ul>
								<div className="discount_value">
									<strong>40%</strong>
									<span>Sale</span>
								</div>
							</div>
							<div className="btn_wrap pb-0">
								<Link className="btn border_dark" href="course.html">
									<span>
										<small>Explore Courses</small>
										<small>Explore Courses</small>
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
			</div>
			<div className="deco_item shape_img_2" data-parallax='{"x" : -130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
			</div>
			<div className="deco_item shape_img_3" data-parallax='{"y" : -130, "smoothness": 6}'>
				<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
			</div>
		</section>
		
		<section className="courses_archive_section section_space_md">
			<div className="container">
				<Suspense fallback={<GridListSkeleton />}>
					<GridList/>
				</Suspense>
			</div>
		</section>

		<NewsletterSection/>

	</main>
  );
}