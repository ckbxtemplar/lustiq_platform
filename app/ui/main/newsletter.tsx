import Link from 'next/link';
import Image from 'next/image';

export default function Newsletter() {
  return (
		<section className="newslatter_section">
		<div className="container">
			<div className="newslatter_box" style={{ backgroundImage: "url('assets/images/shape/shape_img_6.svg')"}}>
				<div className="row justify-content-center">
					<div className="col col-lg-6">
						<div className="section_heading text-center">
							<h2 className="heading_text">
								Subscribe Now Forget 20% Discount Every Courses
							</h2>
							<p className="heading_description mb-0">
								Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus, fermentum eu
							</p>
						</div>
						<form action="#">
							<div className="form_item m-0">
								<input type="email" name="email" placeholder="Your Email"/>
								<button type="submit" className="btn btn_dark">
									<span>
										<small>Subsctibe</small>
										<small>Subsctibe</small>
									</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}