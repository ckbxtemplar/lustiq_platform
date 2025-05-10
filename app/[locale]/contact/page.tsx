import { Metadata } from 'next';
import Process from '@/app/ui/main/process';
import NewsletterSection from '@/app/ui/newsletter-section';
import ContactForm from '@/app/ui/contact-form';
import {useTranslations} from 'next-intl';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Contact() {
	
	const t = useTranslations('pages.contact');

  return (
		<main className="page_content">

        <section className="contact_section section_space_lg mt-0 pt-5">
          <div className="container">
            <div className="row">


							<div className="col col-lg-12">
								<div className="pe-lg-5">
									<div className="section_heading">
										<h2 className="heading_text">
											{t('about.1_t')}
										</h2>
										<p className="heading_description mb-0">
											{t('about.1_d')}
										</p>
									</div>
									<div className="section_heading row">
										<div className="col-12 col-lg-8">
											<h2 className="heading_text">
												{t('about.2_t')}
											</h2>
											<p className="heading_description mb-0">
												<strong>{t('about.2_sub_1_t')}</strong> {t('about.2_sub_1_d')}
											</p>
											<p className="heading_description mb-0">
												<strong>{t('about.2_sub_2_t')}</strong> {t('about.2_sub_2_d')}
											</p>
											<p className="heading_description mb-0">
												<strong>{t('about.2_sub_3_t')}</strong> {t('about.2_sub_3_d')}
											</p>																				

											<h2 className="heading_text mt-5">
												{t('about.3_t')}
											</h2>
											<p className="heading_description mb-1">
												{t('about.3_sub_1')}
											</p>
											<p className="heading_description mb-1">
												{t('about.3_sub_2')}
											</p>
											<p className="heading_description mb-1">
												{t('about.3_sub_3')}
											</p>	
										</div>	
										<div className='col-12 col-lg-4 mt-3 mt-lg-0'>
											<Image src="/assets/images/about/about_cover.jpg" width={400} height={400} alt="Collab – Online Learning Platform" className="imageStyle1"/>
										</div>																												
									</div>	

									<div className="section_heading">
										<h2 className="heading_text">
											{t('about.4_t')}
										</h2>
										<p className="heading_description mb-1">
											<strong>{t('about.4_sub_1_t')}</strong> {t('about.4_sub_1_d')}
										</p>
										<p className="heading_description mb-1">
											<strong>{t('about.4_sub_2_t')}</strong> {t('about.4_sub_2_d')}
										</p>
										<p className="heading_description mb-1">
											<strong>{t('about.4_sub_3_t')}</strong> {t('about.4_sub_3_d')}
										</p>
										<p className="heading_description mb-1">
											<strong>{t('about.4_sub_4_t')}</strong> {t('about.4_sub_4_d')}
										</p>																														
									</div>

									<div className="section_heading">
										<h2 className="heading_text">
											{t('about.5_t')}
										</h2>
										<p className="heading_description mb-1">
											<strong>{t('about.5_sub_1_t')}</strong> {t('about.5_sub_1_d')}
										</p>
										<p className="heading_description mb-1">
											<strong>{t('about.5_sub_2_t')}</strong> {t('about.5_sub_2_d')}
										</p>
										<p className="heading_description mb-1">
											<strong>{t('about.5_sub_3_t')}</strong> {t('about.5_sub_3_d')}
										</p>
										<p className="heading_description mb-1">
											<strong>{t('about.5_sub_4_t')}</strong> {t('about.5_sub_4_d')}
										</p>	
										<p className="heading_description mb-1">
											<strong>{t('about.5_sub_5_t')}</strong> {t('about.5_sub_5_d')}
										</p>	
										<p className="heading_description mb-1">
											<strong>{t('about.5_sub_6_t')}</strong> {t('about.5_sub_6_d')}
										</p>																																																		
									</div>										
									<div className="section_heading">
										<h2 className="heading_text">
											{t('about.6_t')}
										</h2>
										<p className="heading_description mb-0">
											{t('about.6_d')}
										</p>
									</div>
								</div>
							</div>

							<div className="col col-lg-12">
								<div className="pe-lg-5">
									<div className="section_heading">
										<h2 className="heading_text">
											{t('title')}
										</h2>
										<p className="heading_description mb-0">
											{t('sub')}
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
										<h3 className="item_title">{t('faq')}</h3>
										<p className="mb-0">{t('faq_sub1')} <a href="/faq" className="text-black">{t('faq_sub2')}</a></p>
									</div>
								</div>
							</div>									
							<div className="col col-lg-4">																										
								<div className="iconbox_item contact_info_iconbox">
									<div className="item_icon">
										<i className="fas fa-envelope"></i>
									</div>
									<div className="item_content">
										<h3 className="item_title">{t('email')}</h3>
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
										<h3 className="item_title">{t('more')}</h3>
										<p className="mb-0">{t('more_sub1')} <a href="https://www.youtube.com/@Szexplicit" className="text-black">{t('more_sub2')}</a></p>
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