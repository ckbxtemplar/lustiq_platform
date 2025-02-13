import Link from 'next/link';
import Image from 'next/image';

export default function Testimonials() {
  return (
		<section className="testimonial_section section_space_lg">
		<div className="container">
			<div className="testimonial_carousel">
				<div className="common_carousel_1col" data-cursor-text="Drag" data-slick='{"dots":false}'>
					<div className="carousel_item">
						<div className="testimonial_item_2">
							<div className="testimonial_image ms-0" style={{backgroundImage: "url('assets/images/shape/shape_img_6.svg')"}}>
								<Image src="/assets/images/testimonial/testimonial_img_3.png" width={1024} height={1035} alt="Collab – Online Learning Platform"/>
							</div>
							<div className="testimonial_content">
								<div className="quote_icon">
									<Image src="/assets/images/icon/icon_quote.svg" width={64} height={38} alt="Collab – Online Learning Platform"/>
								</div>
								<h3 className="testimonial_title">
									Et netus et malesuada fames ac turpis egestas sed. Nec feugiat nisl pretium fusce id velit ut. Lobortis mattis aliquam faucibus purus in. Ultricies integer quis auctor elit sed. Lobortis scelerisque fermentum dui faucibus in ornare quam. In mollis nunc sed semper
								</h3>
								<p>
									Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Et netus et malesuada fames ac turpis egestas
								</p>
								<div className="testimonial_admin">
									<div className="admin_image">
										<Image src="/assets/images/meta/testimonial_thumbnail_1.jpg" width={120} height={120} alt="Collab – Online Learning Platform"/>
									</div>
									<div className="admin_content">
										<h5 className="testimonial_name">Ray Cooper</h5>
										<span className="testimonial_designation">Founder of colab courses, lecturer</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel_item">
						<div className="testimonial_item_2">
							<div className="testimonial_image ms-0" style={{backgroundImage: "url('assets/images/shape/shape_img_6.svg')"}}>
								<Image src="/assets/images/testimonial/testimonial_img_3.png" width={1024} height={1035} alt="Collab – Online Learning Platform"/>
							</div>
							<div className="testimonial_content">
								<div className="quote_icon">
									<Image src="/assets/images/icon/icon_quote.svg" width={64} height={38} alt="Collab – Online Learning Platform"/>
								</div>
								<h3 className="testimonial_title">
									Et netus et malesuada fames ac turpis egestas sed. Nec feugiat nisl pretium fusce id velit ut. Lobortis mattis aliquam faucibus purus in. Ultricies integer quis auctor elit sed. Lobortis scelerisque fermentum dui faucibus in ornare quam. In mollis nunc sed semper
								</h3>
								<p>
									Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Et netus et malesuada fames ac turpis egestas
								</p>
								<div className="testimonial_admin">
									<div className="admin_image">
										<Image src="/assets/images/meta/testimonial_thumbnail_1.jpg" width={120} height={120} alt="Collab – Online Learning Platform"/>
									</div>
									<div className="admin_content">
										<h5 className="testimonial_name">Ray Cooper</h5>
										<span className="testimonial_designation">Founder of colab courses, lecturer</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel_item">
						<div className="testimonial_item_2">
							<div className="testimonial_image ms-0" style={{backgroundImage: "url('assets/images/shape/shape_img_6.svg')"}}>
								<Image src="/assets/images/testimonial/testimonial_img_3.png" width={1024} height={1035} alt="Collab – Online Learning Platform"/>
							</div>
							<div className="testimonial_content">
								<div className="quote_icon">
									<Image src="/assets/images/icon/icon_quote.svg" width={64} height={38} alt="Collab – Online Learning Platform"/>
								</div>
								<h3 className="testimonial_title">
									Et netus et malesuada fames ac turpis egestas sed. Nec feugiat nisl pretium fusce id velit ut. Lobortis mattis aliquam faucibus purus in. Ultricies integer quis auctor elit sed. Lobortis scelerisque fermentum dui faucibus in ornare quam. In mollis nunc sed semper
								</h3>
								<p>
									Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Et netus et malesuada fames ac turpis egestas
								</p>
								<div className="testimonial_admin">
									<div className="admin_image">
										<Image src="/assets/images/meta/testimonial_thumbnail_1.jpg" width={120} height={120} alt="Collab – Online Learning Platform"/>
									</div>
									<div className="admin_content">
										<h5 className="testimonial_name">Ray Cooper</h5>
										<span className="testimonial_designation">Founder of colab courses, lecturer</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>	
	)
}