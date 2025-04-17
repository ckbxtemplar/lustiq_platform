import Link from 'next/link';
import Image from 'next/image';

export default function FAQ() {
  return (
	<section className="faq_section section_space_lg">
		<div className="container">
			<div className="section_heading text-center mb-3">
				<div className="row justify-content-center">
					<div className="col col-lg-7">
						<h2 className="heading_text">
							Popular Questions to Ask Before Choosing a Course
						</h2>
						<p className="heading_description mb-0">
							Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel. Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus turpis in eu mi bibendum neque egestas
						</p>
					</div>
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="col col-lg-6">
					<div className="accordion" id="faq_accordion_1">
						<div className="accordion-item">
							<div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true">
								How Do I Select a Course?
							</div>
							<div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false">
								 How Do I Access My Course?
							</div>
							<div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false">
								Do I Receive Anything After I Complete a Course?
							</div>
							<div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false">
								When should I register?
							</div>
							<div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col col-lg-6">
					<div className="accordion" id="faq_accordion_2">
						<div className="accordion-item">
							<div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_one" aria-expanded="true">
								How Does Online Learning Work?
							</div>
							<div id="a2_collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_two" aria-expanded="false">
								Can I Take More Than One Course at a Time?
							</div>
							<div id="a2_collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_three" aria-expanded="false">
								Where can I go for help?
							</div>
							<div id="a2_collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_four" aria-expanded="false">
								Convallis posuere morbi leo urna ?
							</div>
							<div id="a2_collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										Dictum non consectetur a erat. Odio morbi quis commodo odio aenean. Blandit libero volutpat sed cras ornare arcu. Tempus urna et pharetra pharetra. Enim ut sem viverra aliquet. Nisl vel pretium lectus quam id. Augue eget arcu dictum varius duis at consectetur. Egestas dui id ornare arcu. Nec ullamcorper sit amet risus nullam eget felis eget nunc.
									</p>
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