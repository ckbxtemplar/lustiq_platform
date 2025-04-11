import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import NewsletterSection from '@/app/ui/newsletter-section';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { GridListSkeleton } from '@/app/ui/skeletons';
import GridList from '@/app/ui/courses/grid-list';
import { notFound } from "next/navigation";
import Breadcrumb from '@/app/ui/breadcrumb';
import { richTextToHTML, courseElementsDetails, formatCaptionIcon } from "@/app/utils/courseDataUtils";
import CourseVideo from '@/app/ui/dashboard/components/CourseVideo';

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

	console.log(data);

	const courseElements = courseElementsDetails(data.lessons);

  return (
		<main className="page_content">

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
									<span>{data?.Details?.duration || '0'} Hours</span>
								</li>
							</ul>
							<ul className="btns_group unordered_list">
								<li className="d-none">
									<div className="item_price">
										<del className="remove_price">$29.99</del>
										<span className="sale_price">$19.99</span>
									</div>
								</li>
								<li>
									<Link href="/pricing" className="btn btn_dark">
										<span>
											<small>Subscribe</small>
											<small>Subscribe</small>
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

		<section className="details_section courses_info_section section_space_lg">
			<div className="container">
				<div className="row">
					<div className="col col-lg-6">
						<div className="content_wrap">
							<div className="section_heading">
								<h2 className="heading_text mb-0">
									What You will Learn
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
								<h3 className="item_title">Course Format</h3>
								<ul className="info_list unordered_list_block">
									{courseElements.formats.map((item:string,index:number) => {
										return(
										<li key={'course-format-'+index}>
											{/* <i className={formatCaptionIcon(item)}></i> */}
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
								<h3 className="item_title">Duration Course</h3>
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
									<CourseVideo videoSrc={data.intro_video.url} videoName={data.intro_video.name}/>
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
									{item.title}
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

		<section className="details_section mentor_details_section section_space_lg bg_light">
			<div className="container">
				<div className="pt-0">
					<div className="row align-items-center">
						<div className="col col-lg-4">
							<div className="details_image image_widget">
								<Image src={data?.cover?.url ? `http://localhost:1337${data.author.avatar.url}` : '/assets/images/mentor/mentor_details_image_1.jpg'} width={1042} height={1088} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="col col-lg-8">
							<div className="details_content ps-lg-5">
								<h2 className="details_item_title">Course Instructors</h2>
								<h3 className="mentor_name">{data.author.name}</h3>
								<h4 className="mentor_designation">{data.author.position}</h4>
								<ul className="meta_info_list unordered_list">
									<li>
										<i className="fas fa-envelope me-2"></i>
										<span>{data.author.email}</span>
									</li>
								</ul>
								<p dangerouslySetInnerHTML={{ __html: richTextToHTML(data.author.introduction) }} />
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