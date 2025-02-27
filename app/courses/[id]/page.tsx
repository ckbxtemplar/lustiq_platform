import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import NewsletterSection from '@/app/ui/newsletter-section';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { GridListSkeleton } from '@/app/ui/skeletons';
import GridList from '@/app/ui/courses/grid-list';
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: 'Course',
};

export default async function CouresView(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const slug = params.id;	

	const course = await fetchCourse(slug);

	if (!course?.data || course.data.length !== 1) {
		notFound();
	}	

	const data = course.data[0];

	console.log(data);

  return (
		<main className="page_content">

		<section className="page_banner">
			<div className="container">
				<div className="content_wrapper">
					<div className="row align-items-center">
						<div className="col col-lg-7">
							<ul className="breadcrumb_nav unordered_list">
								<li><Link href="index.html">Home</Link></li>
								<li><Link href="course.html">Course</Link></li>
								<li>{data.title}</li>
							</ul>
							<h1 className="page_title">
								Introduction to User Experience Design
							</h1>
							<ul className="meta_info_list unordered_list">
								<li>
									<i className="fas fa-chart-bar"></i>
									<span>Beginner</span>
								</li>
								<li>
									<i className="fas fa-clock"></i>
									<span>120 Hours</span>
								</li>
								<li>
									<i className="fas fa-star"></i>
									<span>3.5 (3k reviews)</span>
								</li>
							</ul>
							<ul className="btns_group unordered_list">
								<li>
									<div className="item_price">
										<del className="remove_price">$29.99</del>
										<span className="sale_price">$19.99</span>
									</div>
								</li>
								<li>
									<Link href="pricing.html" className="btn btn_dark">
										<span>
											<small>Get Course</small>
											<small>Get Course</small>
										</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className="col col-lg-5">
							<div className="image_widget page_banner_image">
								<Image src="/assets/images/banner/page_banner_image_1.jpg" width={1142} height={900} alt="Collab – Online Learning Platform" />
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
							<ul className="info_list unordered_list_block">
								<li>
									<i className="fas fa-check"></i>
									<span>
										Fermentum iaculis eu non diam phasellus vestibulum. Porta non pulvinar neque laoreet suspendisse. Justo nec ultrices dui sapien proin sed libero
									</span>
								</li>
								<li>
									<i className="fas fa-check"></i>
									<span>
										At consectetur lorem donec massa sapien. Pulvinar sapien et ligula ullamcorper malesuada proin
									</span>
								</li>
								<li>
									<i className="fas fa-check"></i>
									<span>
										Quisque id diam vel quam elementum pulvinar. Eget felis eget nunc lobortis mattis aliquam faucibus purus.
									</span>
								</li>
							</ul>
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
									<li>
										<i className="fas fa-square"></i>
										<span>Video Tutorials</span>
									</li>
									<li>
										<i className="fas fa-square"></i>
										<span>Checking the Task</span>
									</li>
									<li>
										<i className="fas fa-square"></i>
										<span>Pulvinar sapien</span>
									</li>
									<li>
										<i className="fas fa-square"></i>
										<span>Software</span>
									</li>
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
									<li>
										<i className="fas fa-square"></i>
										<span>3 Weeks</span>
									</li>
									<li>
										<i className="fas fa-square"></i>
										<span>5 Video Tutorials</span>
									</li>
									<li>
										<i className="fas fa-square"></i>
										<span>3 Hours of Consultations</span>
									</li>
									<li>
										<i className="fas fa-square"></i>
										<span>1.5 Hours Webinar</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="details_section course_details_section">
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
									<Image src="/assets/images/video/video_poster_2.jpg" width={1500} height={700} alt="Collab – Online Learning Platform" />
									<Link className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=7e90gBu4pas">
										<span className="icon"><i className="fas fa-play"></i></span>
									</Link>
								</div>
							</div>
							<p>
								Nunc mattis enim ut tellus elementum sagittis vitae. Nisi lacus sed viverra tellus in hac. Amet dictum sit amet justo donec enim diam. Morbi non arcu risus quis varius quam quisque id. Mi eget mauris pharetra et ultrices neque. Natoque penatibus et magnis dis parturient montes nascetur.
							</p>
							<p>
								Elit ullamcorper dignissim cras tincidunt lobortis feugiat. Vitae sapien pellentesque habitant morbi tristique senectus et netus.
							</p>
							<Link className="btn border_dark btn_small" href="#!">
								<span>
									<small><Image src="/assets/images/icon/icon_clip.svg" width={16} height={18} alt="Collab – Online Learning Platform"/> Resources</small>
									<small><Image src="/assets/images/icon/icon_clip_white.svg" width={16} height={18} alt="Collab – Online Learning Platform"/> Resources</small>
								</span>
							</Link>
						</div>
					</div>

					<div className="col col-lg-4">
						<div className="accordion style_2" id="corse_details_accordion">
							<div className="accordion-item">
								<div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true">
									Section 1. Python Express Course
								</div>
								<div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#corse_details_accordion">
									<div className="accordion-body">
										<p className="completed_progress"><span>1/4</span> Completed</p>
										<div className="checkbox_item">
											<input id="checkbox_1_1" type="checkbox" />
											<label htmlFor="checkbox_1_1">1. Basic Python Syntax introduction</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_1_2" type="checkbox"/>
											<label htmlFor="checkbox_1_2">2. Expressions, Numbers, and Type Conversions</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_1_3" type="checkbox"/>
											<label htmlFor="checkbox_1_3">3. Morbi Non Arcu Risus Numbers Varius Quam</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_1_4" type="checkbox"/>
											<label htmlFor="checkbox_1_4">4. Branching with if Statements</label>
										</div>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false">
									Section 2. Introduction to Loops
								</div>
								<div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#corse_details_accordion">
									<div className="accordion-body">
										<p className="completed_progress"><span>1/4</span> Completed</p>
										<div className="checkbox_item">
											<input id="checkbox_2_1" type="checkbox" />
											<label htmlFor="checkbox_2_1">1. Basic Python Syntax introduction</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_2_2" type="checkbox"/>
											<label htmlFor="checkbox_2_2">2. Expressions, Numbers, and Type Conversions</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_2_3" type="checkbox"/>
											<label htmlFor="checkbox_2_3">3. Morbi Non Arcu Risus Numbers Varius Quam</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_2_4" type="checkbox"/>
											<label htmlFor="checkbox_2_4">4. Branching with if Statements</label>
										</div>
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false">
									Section 3. Strings, Lists and Dictionaries
								</div>
								<div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#corse_details_accordion">
									<div className="accordion-body">
										<p className="completed_progress"><span>1/4</span> Completed</p>
										<div className="checkbox_item">
											<input id="checkbox_3_1" type="checkbox" />
											<label htmlFor="checkbox_3_1">1. Basic Python Syntax introduction</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_3_2" type="checkbox"/>
											<label htmlFor="checkbox_3_2">2. Expressions, Numbers, and Type Conversions</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_3_3" type="checkbox"/>
											<label htmlFor="checkbox_3_3">3. Morbi Non Arcu Risus Numbers Varius Quam</label>
										</div>
										<div className="checkbox_item">
											<input id="checkbox_3_4" type="checkbox"/>
											<label htmlFor="checkbox_3_4">4. Branching with if Statements</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="details_section mentor_details_section section_space_lg">
			<div className="container">
				<div className="section_space_md pt-0">
					<div className="row align-items-center">
						<div className="col col-lg-6">
							<div className="details_image image_widget">
								<Image src="/assets/images/mentor/mentor_details_image_1.jpg" width={1042} height={1088} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="col col-lg-6">
							<div className="details_content ps-lg-5">
								<h2 className="details_item_title">Course Instructors</h2>
								<h3 className="mentor_name">Alex Edwards</h3>
								<h4 className="mentor_designation">Fullstack developer</h4>
								<ul className="meta_info_list unordered_list">
									<li>
										<i className="fas fa-clock"></i>
										<span>120 Hours</span>
									</li>
									<li>
										<i className="fas fa-star"></i>
										<span>4.9 (22 reviews)</span>
									</li>
								</ul>
								<p>
									Scelerisque viverra mauris in aliquam. Mauris pharetra et ultrices neque ornare aenean. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit
								</p>
								<div className="row">
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

				<div className="row">
					<div className="col col-lg-4">
						<div className="mentor_item">
							<div className="mentor_image">
								<Link href="mentor_details.html">
									<Image src="/assets/images/mentor/mentor_image_1.jpg" width={622} height={520} alt="Collab – Online Learning Platform"/>
								</Link>
							</div>
							<div className="mentor_content">
								<h3 className="mentor_name">
									<Link href="mentor_details.html">Carolyn Jackson</Link>
								</h3>
								<p className="mentor_designation">Fullstack developer</p>
								<ul className="meta_info_list unordered_list_center mb-0">
									<li>
										<i className="fas fa-clock"></i>
										<span>120 Hours</span>
									</li>
									<li>
										<i className="fas fa-star"></i>
										<span>4.9 (22 reviews)</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col col-lg-4">
						<div className="mentor_item">
							<div className="mentor_image">
								<Link href="mentor_details.html">
									<Image src="/assets/images/mentor/mentor_image_2.jpg" width={622} height={520} alt="Collab – Online Learning Platform"/>
								</Link>
							</div>
							<div className="mentor_content">
								<h3 className="mentor_name">
									<Link href="mentor_details.html">William Morgan</Link>
								</h3>
								<p className="mentor_designation">Python Mentor</p>
								<ul className="meta_info_list unordered_list_center mb-0">
									<li>
										<i className="fas fa-clock"></i>
										<span>100 Hours</span>
									</li>
									<li>
										<i className="fas fa-star"></i>
										<span>5 (10 reviews)</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col col-lg-4">
						<div className="mentor_item">
							<div className="mentor_image">
								<Link href="mentor_details.html">
									<Image src="/assets/images/mentor/mentor_image_3.jpg" width={622} height={520} alt="Collab – Online Learning Platform"/>
								</Link>
							</div>
							<div className="mentor_content">
								<h3 className="mentor_name">
									<Link href="mentor_details.html">Christine Nelson</Link>
								</h3>
								<p className="mentor_designation">AQ/Mentor</p>
								<ul className="meta_info_list unordered_list_center mb-0">
									<li>
										<i className="fas fa-clock"></i>
										<span>120 Hours</span>
									</li>
									<li>
										<i className="fas fa-star"></i>
										<span>4.9 (22 reviews)</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="course_deals_section section_space_lg bg_light decoration_wrap overflow-hidden">
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