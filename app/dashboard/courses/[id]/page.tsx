import { fetchCourse } from '@/app/lib/data';
import { Metadata } from 'next';
import NewsletterSection from '@/app/ui/newsletter-section';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { GridListSkeleton } from '@/app/ui/skeletons';
import Quiz from '@/app/ui/dashboard/components/Quiz';
import AiChat from '@/app/ui/dashboard/components/AiChat';
import { notFound } from "next/navigation";
import Breadcrumb from '@/app/ui/breadcrumb';
import { richTextToHTML } from "@/app/utils/richTextToHTML";

export const metadata: Metadata = {
  title: 'Course',
};

export default async function DashboardCouresView(props: { params: Promise<{ id: string }> }) {
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
							<Breadcrumb/>
							<h1 className="page_title">
								{data.title || "Untitled Course"}
							</h1>
							<ul className="info_list unordered_list_block pb-0">
								<li>
									<i className="fas fa-check"></i>
									<div dangerouslySetInnerHTML={{ __html: richTextToHTML(data.indtroduction) }} />
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
									<Image src={`http://localhost:1337${data.cover.url}`} width={480} height={360} alt="Collab – Online Learning Platform"/>									
								</div>
								<ul className="meta_info_list unordered_list">
									<li>
										<i className="fas fa-star"></i>
										<span>5 (3k reviews)</span>
									</li>
								</ul>

								<ul className="course_info_list unordered_list_block">
									<li>
										<span><i className="fas fa-user"></i> Created</span>
										<strong>{data.author.name}</strong>
									</li>
									<li>
										<span><i className="fas fa-chart-bar"></i> Level</span>
										<strong>Beginner</strong>
									</li>
									<li>
										<span><i className="fas fa-clock"></i> Duration</span>
										<strong>4 Hours</strong>
									</li>
									<li>
										<span><i className="fas fa-video"></i> Lessons</span>
										<strong>4 Video</strong>
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
						<div className="section_heading">
									<h2 className="heading_text">
										Kommunikációs alapok – Hogyan értsük meg egymást?
									</h2>
						</div>
					</div>
					<div className="col col-md-12">

						<div className="pb-lg-0">
							<div className="pe-lg-5">



								<div className="accordion_wrap mb-5">
									<div className="accordion style_2" id="corse_details_accordion">
										<div className="accordion-item">
											<div className="checkbox_item accordion_item_checked">
												<input type="checkbox"/>
											</div>
											<div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true">
												Asszertív kommunikáció alapjai
											</div>
											<div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#corse_details_accordion">
												<div className="accordion-body">
													
													<div className="course_intro my-5 py-3">
														<div className='row align-items-center mb-3 ms-0'>
															<div className='col-auto'><span className='course_section_number fw-bold'>1</span></div>
															<div className='col-auto'><h5 className='m-0'>Bevezető</h5></div>
														</div>																												
														<p className="mt-3">
															Az asszertív kommunikáció egy olyan eszköz, amely segít abban, hogy <b>őszintén, mégis tiszteletteljesen</b> fejezd ki az érzéseidet és szükségleteidet, miközben tiszteletben tartod a partnered határait is.
														</p>
													</div>
													
													<div className="intro_video my-5 py-3">
														<div className='row align-items-center mb-3 ms-0'>
															<div className='col-auto'><span className='course_section_number fw-bold'>2</span></div>
															<div className='col-auto'><h5 className='m-0'>Videó lejátszása</h5></div>
														</div>
														<div className="video_wrap mt-3">															
															<Image src="/assets/images/video/video_poster_3.jpg" width={1458} height={440} alt="Collab – Online Learning Platform"/>
															<a className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=7e90gBu4pas">
																<span className="icon"><i className="fas fa-play"></i></span>
															</a>
														</div>
													</div>
													
													<div className="quiz_wrapper my-5 py-3">
														<div className='row align-items-center mb-3 ms-0'>
															<div className='col-auto'><span className='course_section_number fw-bold'>3</span></div>
															<div className='col-auto'><h5 className='m-0'>Töltsd ki a kvízt</h5></div>
														</div>
														<Quiz/>
													</div>

												</div>
											</div>
										</div>
										<div className="accordion-item">
											<div className="checkbox_item accordion_item_checked">
												<input type="checkbox"/>
											</div>
											<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false">
												Konfliktuskezelési technikák
											</div>
											<div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#corse_details_accordion">
												<div className="accordion-body">

												</div>
											</div>
										</div>
										<div className="accordion-item">
											<div className="checkbox_item accordion_item_checked">
												<input type="checkbox"/>
											</div>
											<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false">
												Aktív hallgatás fejlesztése
											</div>
											<div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#corse_details_accordion">
												<div className="accordion-body">

												</div>
											</div>
										</div>
										<div className="accordion-item">
											<div className="checkbox_item accordion_item_checked">
												<input type="checkbox"/>
											</div>
											<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false">
												Tanult technikák gyakorlása
											</div>
											<div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#corse_details_accordion">
												<div className="accordion-body">
													
													<div className="course_intro my-5">
														<div className='row align-items-center mb-3 ms-0'>
															<div className='col-auto'><span className='course_section_number fw-bold'>1</span></div>
															<div className='col-auto'><h5 className='m-0'>Bevezető</h5></div>
														</div>																												
														<p>Welcome! I'm your AI assistant. How may I help you today? 👏</p>
													</div>
													<div className="aichat_wrap my-5 py-3">
														<div className='row align-items-center mb-3 ms-0'>
															<div className='col-auto'><span className='course_section_number fw-bold'>2</span></div>
															<div className='col-auto'><h5 className='m-0'>AI vezérelt beszélgetés</h5></div>
														</div>
														<div className="aichat_wrap mt-3 border p-3 bg-grey order border-0 rounded-3">															
															<AiChat/>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>


				</div>
			</div>
		</section>

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

		<NewsletterSection/>

	</main>)
}