import Link from 'next/link';

export default function SiteHeaderMenuMain({ pathname }: { pathname: string }) {

  return (
		<div className="main_menu_inner collapse navbar-collapse justify-content-start" id="main_menu_dropdown">
			<ul className="main_menu_list unordered_list_center">							
				<li className={pathname === '/' ? 'active' : ''}>
					<Link className="nav-link" href="/" id="home_submenu" role="button">Home</Link>
				</li>
				<li className={pathname === '/courses' ? 'active' : ''}>
					<Link className="nav-link" href="/courses" id="courses_submenu" role="button">
						Courses
					</Link>
				</li>
				<li className={pathname === '/pricing' ? 'active' : ''}>
					<Link className="nav-link" href="/pricing" id="pricing_submenu" role="button">
						Pricing
					</Link>
				</li>
				<li className={pathname === '/contact' ? 'active' : ''}>
					<Link className="nav-link" href="/contact" id="contact_submenu" role="button">
						Contact
					</Link>
				</li>						
				<li className="dropdown d-none">
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
				<li className="dropdown d-none">
					<Link className="nav-link" href="#" id="blog_submenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Blog
					</Link>
					<ul className="dropdown-menu" aria-labelledby="blog_submenu">
						<li><Link href="blog.html">Our Blogs</Link></li>
						<li><Link href="blog_details.html">Blog Details</Link></li>
					</ul>
				</li>
			</ul>
		</div>
	)
}