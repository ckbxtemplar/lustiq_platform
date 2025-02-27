"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeaderUser from './siteheaderuser';

export default function SiteHeader({ session }: { session: any }) {
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
								<li className={pathname === '/' ? 'active' : ''}>
									<Link className="nav-link" href="/" id="home_submenu" role="button">Home</Link>
								</li>
								<li className={pathname === '/courses' ? 'active' : ''}>
									<Link className="nav-link" href="/courses" id="service_submenu" role="button">
										Courses
									</Link>
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
			
				<SiteHeaderUser session={session}/>

			</div>
		</div>
	</header>
)}