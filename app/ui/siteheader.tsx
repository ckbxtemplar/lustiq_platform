"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function SiteHeader() {
	const pathname = usePathname();
	const headerClass = pathname === "/" ? "site_header_2" : "site_header_1";

  return (
		<header className={`site_header ${headerClass}`}>
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-3 col-5">
					<div className="site_logo">
						<Link className="site_link" href="/">
							<Image src="/assets/images/logo/site_logo.svg" width="143" height="42" alt="Collab - Online Learning Platform"/>
						</Link>
					</div>
				</div>
				<div className="col col-lg-6 col-2">
					<nav className="main_menu navbar navbar-expand-lg">
						<div className="main_menu_inner collapse navbar-collapse justify-content-center" id="main_menu_dropdown">
							<ul className="main_menu_list unordered_list_center">
								<li className="dropdown active">
									<Link className="nav-link" href="#" id="home_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</Link>
									<ul className="dropdown-menu" aria-labelledby="home_submenu">
										<li><Link href="index.html">Home V.1</Link></li>
										<li className="active"><Link href="index_2.html">Home V.2</Link></li>
									</ul>
								</li>
								<li className="dropdown">
									<Link className="nav-link" href="#" id="service_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Courses
									</Link>
									<ul className="dropdown-menu" aria-labelledby="service_submenu">
										<li className="dropdown">
											<Link className="nav-link" href="#" id="courses_layout_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
												Courses Layout
											</Link>
											<ul className="dropdown-menu" aria-labelledby="courses_layout_submenu">
												<li><Link href="course.html">Courses Grid</Link></li>
												<li><Link href="course_list.html">Courses List</Link></li>
											</ul>
										</li>
										<li className="dropdown">
											<Link className="nav-link" href="#" id="courses_details_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
												Courses Details
											</Link>
											<ul className="dropdown-menu" aria-labelledby="courses_details_submenu">
												<li><Link href="course_details.html">Course Details V.1</Link></li>
												<li><Link href="course_details_2.html">Course Details V.2</Link></li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="dropdown">
									<Link className="nav-link" href="#" id="pages_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Pages
									</Link>
									<ul className="dropdown-menu" aria-labelledby="pages_submenu">
										<li><Link href="about.html">About</Link></li>
										<li className="dropdown">
											<Link className="nav-link" href="#" id="mentors_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
												Our Mentors
											</Link>
											<ul className="dropdown-menu" aria-labelledby="mentors_submenu">
												<li><Link href="mentor.html">Mentors</Link></li>
												<li><Link href="mentor_details.html">Mentors Details</Link></li>
											</ul>
										</li>
										<li><Link href="faq.html">F.A.Q.</Link></li>
										<li className="dropdown">
											<Link className="nav-link" href="#" id="events_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
												Our Events
											</Link>
											<ul className="dropdown-menu" aria-labelledby="events_submenu">
												<li><Link href="event.html">Events</Link></li>
												<li><Link href="event_details.html">Event Details</Link></li>
											</ul>
										</li>
										<li><Link href="pricing.html">Pricing</Link></li>
										<li><Link href="error.html">404 Error</Link></li>
									</ul>
								</li>
								<li className="dropdown">
									<Link className="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
										Blog
									</Link>
									<ul className="dropdown-menu" aria-labelledby="blog_submenu">
										<li><Link href="blog.html">Our Blogs</Link></li>
										<li><Link href="blog_details.html">Blog Details</Link></li>
									</ul>
								</li>
								<li><Link className="nav-link" href="contact.html">Contact</Link></li>
							</ul>
						</div>
					</nav>
				</div>
				<div className="col col-lg-3 col-5">
					<ul className="header_btns_group unordered_list_end">
						<li>
							<button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
								<i className="far fa-bars"></i>
							</button>
						</li>
						<li>
							<Link className="btn border_dark" href="/login">
								<span>
									<small>Login</small>
									<small>Login</small>
								</span>
							</Link>
						</li>
						<li>
							<Link className="btn btn_dark" href="/regist">
								<span>
									<small>Sign Up</small>
									<small>Sign Up</small>
								</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
)}