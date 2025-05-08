import Image from 'next/image';
import HeroBanner from '@/app/ui/main/herobanner';
import CoursesSection from '@/app/ui/main/coursessection';
import IntroVideo from '@/app/ui/main/introvideo'; 
import Process from '@/app/ui/main/process';
import Testimonials from '@/app/ui/main/testimonials';
import CallToAction from '@/app/ui/main/calltoaction';
import Brands from '@/app/ui/main/brands';
import NewsletterSection from '@/app/ui/newsletter-section';
import FAQ from '@/app/ui/main/FAQ';
 
export default function Page() {
  return (
    <main className={'page_content'}>
			<HeroBanner page="soon"/>			
			<IntroVideo />

			<section className="getstart_section section_space_lg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col col-lg-6">
							<div className="content_wrap ps-lg-5">
								<div className="section_heading">
									<h2 className="heading_text">
										Come Teach with Us and Become an Instructor Today
									</h2>
									<p className="heading_description mb-0">
										Augue ut lectus arcu bibendum at varius vel. Ullamcorper eget nulla facilisi etiam dignissim. Habitasse platea dictumst quisque sagittis. Quis lectus nulla at volutpat diam ut venenatis
									</p>
								</div>
								<div className="btn_wrap p-0">
									<a className="btn btn_dark" href="contact.html">
										<span>
											<small>Get Started</small>
											<small>Get Started</small>
										</span>
									</a>
								</div>
							</div>
						</div>						
						<div className="col col-lg-6">
							<div className="image_widget">
								<Image src="/assets/images/about/about_image_4.jpg" width={570} height={595} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Process />
			<Testimonials />
			<section className="popular_event_section section_space_lg bg_dark decoration_wrap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col col-lg-7">
							<div className="section_heading mb-lg-0">
								<h2 className="heading_text text-white">
									Online Events are Amazing Opportunities to Have Fun and Learn
								</h2>
								<p className="heading_description mb-0 text-white">
									Rhoncus dolor purus non enim praesent elementum facilisis. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Iaculis eu non diam phasellus vestibulum lorem sed risus.
								</p>
								<div className="btn_wrap pb-0 d-none">
									<a className="btn btn_primary" href="event.html">
										<span>
											<small>All Events</small>
											<small>All Events</small>
										</span>
									</a>
								</div>
							</div>
						</div>
						<div className="col col-lg-5">
							<div className="popular_event_list">
								<h3 className="wrap_title">Most Popular Events</h3>
								<ul className="unordered_list_block">
									<li>
										<div className="column">
											<b className="day">12</b>
											<span className="month">february</span>
											<strong className="time">03:50 PM</strong>
										</div>
										<div className="column">
											<h4 className="event_title">Digital Transformation Conference</h4>
											<span className="event_name">
												<strong>Prepare for:</strong> <small>Lora Hill</small>
											</span>
										</div>
									</li>
									<li>
										<div className="column">
											<b className="day">12</b>
											<span className="month">february</span>
											<strong className="time">03:50 PM</strong>
										</div>
										<div className="column">
											<h4 className="event_title">Digital Transformation Conference</h4>
											<span className="event_name">
												<strong>Prepare for:</strong> <small>Lora Hill</small>
											</span>
										</div>
									</li>
									<li>
										<div className="column">
											<b className="day">12</b>
											<span className="month">february</span>
											<strong className="time">03:50 PM</strong>
										</div>
										<div className="column">
											<h4 className="event_title">Digital Transformation Conference</h4>
											<span className="event_name">
												<strong>Prepare for:</strong> <small>Lora Hill</small>
											</span>
										</div>
									</li>
									<li>
										<div className="column">
											<b className="day">12</b>
											<span className="month">february</span>
											<strong className="time">03:50 PM</strong>
										</div>
										<div className="column">
											<h4 className="event_title">Digital Transformation Conference</h4>
											<span className="event_name">
												<strong>Prepare for:</strong> <small>Lora Hill</small>
											</span>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
					<Image src="/assets/images/shape/shape_img_3.png" width={270} height={270} alt="Collab – Online Learning Platform"/>
				</div>
				<div className="deco_item shape_img_2" data-parallax='{"x" : -130, "smoothness": 6}'>
					<Image src="/assets/images/shape/shape_img_3.png" width={270} height={270} alt="Collab – Online Learning Platform"/>
				</div>
				<div className="deco_item shape_img_3" data-parallax='{"y" : -130, "smoothness": 6}'>
					<Image src="/assets/images/shape/shape_img_3.png" width={386} height={386} alt="Collab – Online Learning Platform"/>
				</div>
			</section>	
			
			<Brands />

			<section className="getstart_section section_space_lg">
				<div className="container">
					<div className="row align-items-center">
						<div className="col col-lg-6">
							<div className="image_widget">
								<Image src="/assets/images/about/about_image_4.jpg" width={570} height={595} alt="Collab – Online Learning Platform"/>
							</div>
						</div>
						<div className="col col-lg-6">
							<div className="content_wrap ps-lg-5">
								<div className="section_heading">
									<h2 className="heading_text">
										Come Teach with Us and Become an Instructor Today
									</h2>
									<p className="heading_description mb-0">
										Augue ut lectus arcu bibendum at varius vel. Ullamcorper eget nulla facilisi etiam dignissim. Habitasse platea dictumst quisque sagittis. Quis lectus nulla at volutpat diam ut venenatis
									</p>
								</div>
								<div className="btn_wrap p-0">
									<a className="btn btn_dark" href="contact.html">
										<span>
											<small>Get Started</small>
											<small>Get Started</small>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

	

			<CallToAction />

			<FAQ/>

			<NewsletterSection />			
    </main>
  );
}