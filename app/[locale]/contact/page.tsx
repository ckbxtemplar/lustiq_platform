import { Metadata } from 'next';
import Process from '@/app/ui/main/process';
import NewsletterSection from '@/app/ui/newsletter-section';
import ContactForm from '@/app/ui/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {


  return (
		<main className="page_content">

        <section className="contact_section section_space_lg">
          <div className="container">
            <div className="row">
              
							<div className="col col-lg-12">
                <div className="pe-lg-5">
                  <div className="section_heading">
                    <h2 className="heading_text">
                      Contact Us
                    </h2>
                    <p className="heading_description mb-0">
                      Viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus purus in massa tempor nec feugiat nisl
                    </p>
                  </div>
                </div>
              </div>

							<div className="col col-lg-4">
								<div className="iconbox_item contact_info_iconbox">
									<div className="item_icon">
										<i className="fas fa-question"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">F.A.Q.</h3>
										<p className="mb-0">Collected the questions <a href="/faq" className="text-black">here</a></p>
									</div>
								</div>
							</div>									
							<div className="col col-lg-4">																										
								<div className="iconbox_item contact_info_iconbox">
									<div className="item_icon">
										<i className="fas fa-envelope"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">Email Address</h3>
										<p className="mb-0">hello@lustiq.eu</p>
									</div>
								</div>
							</div>									
							<div className="col col-lg-4">									
								<div className="iconbox_item contact_info_iconbox">
									<div className="item_icon">										
										<i className="fas fa-play-circle"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">More Content</h3>
										<p className="mb-0">Check out our youtube <a href="https://www.youtube.com/@Szexplicit" className="text-black">channel</a></p>
									</div>
								</div>
							</div>

            </div>
          </div>
        </section>

				<ContactForm />

				<Process/>
				
				<section className="contact_form_section section_space_md"></section>

				<NewsletterSection/>

		</main> 
  );
}