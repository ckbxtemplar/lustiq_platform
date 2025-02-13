import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
		<section className="calltoaction_section section_space_lg bg_dark decoration_wrap">
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-7">
					<div className="section_heading mb-lg-0">
						<h2 className="heading_text text-white">
							To Help You Choose the Right Course, You Need to Book a Consultation
						</h2>
						<p className="heading_description mb-0 text-white">
							Varius morbi enim nunc faucibus. Eget nunc lobortis mattis aliquam faucibus purus in massa. Diam sit amet nisl suscipit adipiscing bibendum est.
						</p>
					</div>
				</div>
				<div className="col col-lg-5">
					<div className="calltoaction_form">
						<form action="#">
							<h3 className="form_title">Get a Consultation</h3>
							<div className="form_item">
								<label htmlFor="input_name" className="input_title text-uppercase">Name</label>
								<input id="input_name" type="text" name="name" placeholder="Input Name"/>
							</div>
							<div className="form_item">
								<label htmlFor="input_email" className="input_title text-uppercase">Email</label>
								<input id="input_email" type="email" name="email" placeholder="Input Email"/>
							</div>
							<div className="form_item">
								<label htmlFor="input_question" className="input_title text-uppercase">Message</label>
								<textarea id="input_question" name="Message" placeholder="Input Your Question"></textarea>
							</div>
							<button type="submit" className="btn btn_dark w-100">
								<span>
									<small>Get a Consultation</small>
									<small>Get a Consultation</small>
								</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div className="deco_item shape_img_1" data-parallax='{"x" : 130, "smoothness": 6}'>
			<Image src="/assets/images/shape/shape_img_5.png" width={355} height={349} alt="Collab – Online Learning Platform"/>
		</div>
		<div className="deco_item shape_img_2" data-parallax='{"x" : -130, "smoothness": 6}'>
			<Image src="/assets/images/shape/shape_img_4.png" width={327} height={321} alt="Collab – Online Learning Platform"/>
		</div>
	</section>		
	)
}