import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import NewsletterSection from '@/app/ui/newsletter-section';
import CoursesFelxibility from '@/app/ui/courses/courses-flexibility';
import Image from 'next/image';
import Lessons from '@/app/ui/dashboard/components/Lessons';
import { notFound } from "next/navigation";
import Breadcrumb from '@/app/ui/breadcrumb';
import { richTextToHTML, courseElementsDetails } from "@/app/utils/courseDataUtils";

export const metadata: Metadata = {
  title: 'Course',
};

export default async function DashboardCouresView(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const slug = params.id;	

	interface Lesson {
		title: string;
		description: string; 
	}												

	interface Data {
		lessons: Lesson[];
	}

	const course = await fetchCourse(slug);

	if (!course || !course?.data || !course?.data?.courses || course.data.courses.length !== 1) {
		notFound();
	}	

	const data = course.data.courses[0];

	const courseElements = courseElementsDetails(data.lessons);

	const videoCounter = courseElements?.counter.video;

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
							<ul className="info_list unordered_list_block pb-0">
								<li>
									<i className="fas fa-check"></i>
									<div dangerouslySetInnerHTML={{ __html: richTextToHTML(data.introduction) }} />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="details_section course_details_section">
			<div className="container">
				<div className="row justify-content-start">
					<div className="col col-md-4 offset-md-8">
						<aside className="sidebar">
						
							<div className="course_info_card d-none d-lg-block position-absolute me-5">
								<div className="details_image">
									<Image src={data?.cover?.url ? `http://localhost:1337${data.cover.url}` : '/assets/images/course/course_details_image_1.jpg'} width={480} height={360} alt="Collab – Online Learning Platform"/>
								</div>
								<ul className="meta_info_list unordered_list d-none">
									<li>
										<i className="fas fa-star"></i>
										<span>5 (3k reviews)</span>
									</li>
								</ul>

								<ul className="course_info_list unordered_list_block">
									<li>
										<span><i className="fas fa-user"></i> Created</span>
										<strong>{data?.author?.name || 'Unknown'}</strong>
									</li>
									<li>
										<span><i className="fas fa-chart-bar"></i> Level</span>
										<strong>{data?.Details?.level || 'Beginner'}</strong>
									</li>
									<li>
										<span><i className="fas fa-clock"></i> Duration</span>
										<strong>{data?.Details?.duration || '0'} Hours</strong>
									</li>
									<li>
										<span><i className="fas fa-video"></i> Lessons</span>
										<strong>{courseElements?.counter.video || '0'} Video</strong>
									</li>
								</ul>
							</div>

							<div className="callbox_wrap d-none">
								<h3 className="widget_title">Get More Benefits with Our Plans</h3>
								<a className="btn border_dark w-100" href="pricing.html">
									<span>
										<small>Our Plans</small>
										<small>Our Plans</small>
									</span>
								</a>
								<a className="btn btn_dark w-100" href="course.html">
									<span>
										<small>See Whole Course</small>
										<small>See Whole Course</small>
									</span>
								</a>
							</div>

							<div className="widget course_list_wrap d-none">
								<h3 className="widget_title">Other Courses</h3>
								<ul className="course_list unordered_list_block">
									<li>
										<a className="course_small_layout" href="course_details.html">
											<span className="item_image">
												<Image src="/assets/images/course/course_image_15.jpg" width={240} height={240} alt="Collab – Online Learning Platform"/>
											</span>
											<span className="item_content">
												<strong className="item_title">Foundations of User Experience (UX) Design</strong>
												<small className="item_price">
													<b>$12.99</b>
												</small>
											</span>
										</a>
									</li>
									<li>
										<a className="course_small_layout" href="course_details.html">
											<span className="item_image">
												<Image src="/assets/images/course/course_image_16.jpg" width={240} height={240} alt="Collab – Online Learning Platform"/>
											</span>
											<span className="item_content">
												<strong className="item_title">Management Principles and Practices</strong>
												<small className="item_price">
													<del>$23.99</del>
													<b>$19.99</b>
												</small>
											</span>
										</a>
									</li>
									<li>
										<a className="course_small_layout" href="course_details.html">
											<span className="item_image">
												<Image src="/assets/images/course/course_image_17.jpg" width={240} height={240} alt="Collab – Online Learning Platform"/>
											</span>
											<span className="item_content">
												<strong className="item_title">Programming for Everybody (Getting Started Python)</strong>
												<small className="item_price">
													<b>$12.99</b>
												</small>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</aside>						
					</div>
					<div className="col col-md-8">
						<div className="section_heading my-4">
									<h2 className="heading_text">{data.sub_title}</h2>
						</div>
					</div>
					<div className="col col-md-12">

						<div className="pb-lg-0">
							<div className="pe-lg-5">

								<Lessons lessons={data.lessons}/>

							</div>
						</div>

					</div>

				</div>
			</div>
		</section>

		<CoursesFelxibility/>

		<NewsletterSection/>

	</main>)
}