
import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import CoursesFooterList from '@/app/ui/courses-footer-list';

export default function Footer() {

	const t = useTranslations('pages');


  return (
		<footer className="site_footer bg-pattern3">		
		<div className="footer_widget_area">
			<div className="container">
				<div className="row">

					<div className="col col-lg-4 col-md-6 col-sm-6">
						<div className="footer_widget">
							<div className="site_logo mb-2">
								<Link className="site_link" href="index.html">
									<Image src="/assets/images/logo/site_logo_2.svg" width="143" height="42" alt="Collab - Online Learning Platform"/>
								</Link>
							</div>
							<div className="mb-4">
								{t('home.footer.description1')}
							</div>
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

					<div className="col col-lg-auto ms-auto offset-md-1 offset-lg-1">
						<div className="row justify-content-center">
							<div className="col">
								<div className="footer_widget">
									<h3 className="footer_widget_title">{t('home.footer.coursestitle')}</h3>
									<CoursesFooterList/>
								</div>
							</div>
						</div>
					</div>				

					<div className="col col-lg-auto offset-md-1 offset-lg-1">
						<div className="row justify-content-center">
							<div className="col">
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
										<li className='mt-4'>
											<Link href="/docs/ASZF.pdf" target="_blank" rel="noopener noreferrer">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('contact.aszf')}</span>
											</Link>
										</li>		
										<li>
											<Link href="/docs/GDPR.pdf" target="_blank" rel="noopener noreferrer">
												<span className="item_icon"><i className="fas fa-caret-right"></i></span>
												<span className="item_text">{t('contact.gdpr')}</span>
											</Link>
										</li>																														
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className='row mt-5 pt-5'>
					<div className="col col-lg-12">
						<div className="footer_widget">
							
							<div className='row align-items-center'>
								<div className="col-12 col-lg">

									<div className="mb-4">
										<h3 className='footer_widget_title text-white mb-4'>{t('home.footer.description2')}</h3>
										<div>{t('home.footer.description3')}</div>
									</div>	

								</div>
								<div className="col-12 col-lg-auto">
									<a href="/soon" className="btn btn_red btn_small"><span><small>{t('home.footer.feliratkozom')}</small><small>{t('home.footer.feliratkozom')}</small></span></a>
								</div>
							</div>			
						
						</div>
					</div>							
				</div>
			</div>
		</div>
		<div className="copyright_widget">
			<div className="container">
				<p className="copyright_text text-center mb-0">
					<Link className="text-white me-5" target="_lustiq" href="https://getlustiq.hu">Lustiq Termékek</Link>					
					<Link className="text-white me-5" target="_lustiq" href="https://play.lustiq.eu">Lustiq Play</Link>					
					<b>{t('home.footer.copyright')}</b>
				</p>			
			</div>
		</div>
		</footer>
		)}