import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
		<footer className="site_footer">
		<div className="footer_widget_area">
			<div className="container">
				<div className="row">
					<div className="col col-lg-3 col-md-6 col-sm-6">
						<div className="footer_widget">
							<div className="site_logo">
								<Link className="site_link" href="index.html">
									<Image src="/assets/images/logo/site_logo_2.svg" width="143" height="42" alt="Collab - Online Learning Platform"/>
								</Link>
							</div>
							<p>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
							</p>
							<ul className="social_links unordered_list">
								<li>
									<Link href="#!"><i className="fab fa-facebook-f"></i></Link>
								</li>
								<li>
									<Link href="#!"><i className="fab fa-youtube"></i></Link>
								</li>
								<li>
									<Link href="#!"><i className="fab fa-twitter"></i></Link>
								</li>
								<li>
									<Link href="#!"><i className="fab fa-linkedin-in"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col col-lg-6">
						<div className="row">
							<div className="col col-md-4 col-sm-4">
								<div className="footer_widget">
									<h3 className="footer_widget_title">Links</h3>
									<ul className="page_list unordered_list_block">
										<li>
											<Link href="about.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">About</span>
											</Link>
										</li>
										<li>
											<Link href="course.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Courses</span>
											</Link>
										</li>
										<li>
											<Link href="mentor.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Mentors</span>
											</Link>
										</li>
										<li>
											<Link href="pricing.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Prices</span>
											</Link>
										</li>
										<li>
											<Link href="event.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Events</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col col-md-4 col-sm-4">
								<div className="footer_widget">
									<h3 className="footer_widget_title">className</h3>
									<ul className="page_list unordered_list_block">
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Programming</span>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Art & Design</span>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Business</span>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Engineering</span>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Photography</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="col col-md-4 col-sm-4">
								<div className="footer_widget">
									<h3 className="footer_widget_title">Support</h3>
									<ul className="page_list unordered_list_block">
										<li>
											<Link href="contact.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Help Center</span>
											</Link>
										</li>
										<li>
											<Link href="faq.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">FAQ</span>
											</Link>
										</li>
										<li>
											<Link href="contact.html">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Contacts</span>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Security</span>
											</Link>
										</li>
										<li>
											<Link href="#!">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">Private Police</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col col-lg-3 col-md-6 col-sm-6">
						<div className="footer_widget">
							<h3 className="footer_widget_title">Latest Posts</h3>
							<ul className="blog_small_group unordered_list_block">
								<li>
									<Link className="blog_small" href="blog_details.html">
										<span className="item_image">
											<Image src="/assets/images/blog/blog_small_img_1.png" width={140} height={140} alt="Collab – Online Learning Platform"/>
										</span>
										<span className="item_content">
											<span className="item_author"><i className="fas fa-user-alt"></i> by Corabelle Durrad</span>
											<strong className="item_title">See How Michaele Built a New Life and Career</strong>
											<small className="item_post_date">October 12, 2023</small>
										</span>
									</Link>
								</li>
								<li>
									<Link className="blog_small" href="blog_details.html">
										<span className="item_image">
											<Image src="/assets/images/blog/blog_small_img_1.png" width={140} height={140} alt="Collab – Online Learning Platform"/>
										</span>
										<span className="item_content">
											<span className="item_author"><i className="fas fa-user-alt"></i> by Corabelle Durrad</span>
											<strong className="item_title">See How Michaele Built a New Life and Career</strong>
											<small className="item_post_date">October 12, 2023</small>
										</span>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="copyright_widget">
			<div className="container">
				<p className="copyright_text text-center mb-0">
					<Link href="https://themeforest.net/user/merkulove">Merkulove</Link> © <b>Collab</b> Template All rights reserved Copyrights 2023
				</p>
			</div>
		</div>
		</footer>
		)}