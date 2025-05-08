import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Footer() {

	const t = useTranslations('pages');

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
								{t('home.footer.description')}
							</p>
							<ul className="social_links unordered_list">
								<li>
									<Link href="https://www.facebook.com/szexplicit"><i className="fab fa-facebook-f"></i></Link>
								</li>
								<li>
									<Link href="https://www.youtube.com/@Szexplicit"><i className="fab fa-youtube"></i></Link>
								</li>
								<li>
									<Link href="https://www.instagram.com/szex_plicit/"><i className="fab fa-instagram"></i></Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/company/szexplicit/"><i className="fab fa-linkedin-in"></i></Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="col col-lg-9">
						<div className="row justify-content-end">
							<div className="col col-md-4 col-sm-4">
								<div className="footer_widget">
									<h3 className="footer_widget_title">Links</h3>
									<ul className="page_list unordered_list_block">
										<li>
											<Link href="/">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('home.header.home')}</span>
											</Link>
										</li>
										<li>
											<Link href="/courses">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('home.header.courses')}</span>
											</Link>
										</li>
										<li>
											<Link href="/pricing">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('home.header.pricing')}</span>
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
											<Link href="/contact">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('home.header.contact')}</span>
											</Link>
										</li>
										<li>
											<Link href="/contact">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('contact.faq')}</span>
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
					<div className="col col-lg-3 col-md-6 col-sm-6 d-none">
						<div className="footer_widget">
							<h3 className="footer_widget_title">Latest Posts</h3>
							<ul className="blog_small_group unordered_list_block">
								<li>
									<Link className="blog_small" href="#!">
										<span className="item_image">
											<Image src="/assets/images/blog/blog_small_img_1.png" width={140} height={140} alt="Collab – Online Learning Platform"/>
										</span>
										<span className="item_content">
											<span className="item_author"><i className="fas fa-user-alt"></i> Csonka Balázs szexuálpszichológus</span>
											<strong className="item_title">Pornófüggőség: Az első jelek és a kiút belőle</strong>
											<small className="item_post_date">October 12, 2024</small>
										</span>
									</Link>
								</li>
								<li>
									<Link className="blog_small" href="#!">
										<span className="item_image">
											<Image src="/assets/images/blog/blog_small_img_1.png" width={140} height={140} alt="Collab – Online Learning Platform"/>
										</span>
										<span className="item_content">
											<span className="item_author"><i className="fas fa-user-alt"></i> @hormonmentes Janka</span>
											<strong className="item_title">Termékenységtudat: jelzi a tested, amikor termékeny vagy </strong>
											<small className="item_post_date">October 13, 2024</small>
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
					<b>{t('home.footer.copyright')}</b>
				</p>
			</div>
		</div>
		</footer>
		)}