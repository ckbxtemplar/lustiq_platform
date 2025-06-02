import { Metadata } from 'next';
import Image from 'next/image';
import FAQ from '@/app/ui/main/FAQ';
import NewsletterSection from '@/app/ui/newsletter-section';
import CheckoutForm from '@/app/ui/subscribebutton';
import {useTranslations} from 'next-intl';
import Reviews from '@/app/ui/main/reviews';
import Trusted from '@/app/ui/main/trusted';
import WhatsAbout from '@/app/ui/main/whatsabout';
import WhyAndHow from '@/app/ui/main/whyandhow';
import WhatYouGet from '@/app/ui/main/whatyouget';
import Banner from '@/app/ui/dashboard/banner';
import SzexplicitRecommendation from '@/app/ui/main/szexplicitRecommendation';

export const metadata: Metadata = {
  title: 'Pricing'
};

export default function Pricing() {
	
	const t = useTranslations('pages.pricing');
	const bannerList = [
		t('banner.list.1'),
		t('banner.list.2'),
		t('banner.list.3'),
		t('banner.list.4'),
		t('banner.list.5'),
	];	


  return (
		<>
			<nav id="navbar-scrollspy" className="navbar navbar-light flex-column align-items-stretch p-3 fixed-top d-none">
				<nav className="nav nav-pills flex-column">
					<a className="nav-link" href="#section_banner">Kezdjük</a>
					<a className="nav-link" href="#section_whatsabout">Miről szól</a>
					<a className="nav-link" href="#section_whyandhow">Probléma + Megoldás</a>
					<a className="nav-link" href="#section_whatyouget">Mit kapsz?</a>
					<a className="nav-link" href="#section_trusted">Bízhatsz bennünk?</a>
					<a className="nav-link" href="#section_pricing">Csomagok</a>
					<a className="nav-link" href="#item-3">Első vélemények</a>
					<a className="nav-link" href="#item-3">Megjelenéseink</a>
					<a className="nav-link" href="#item-3">Kérdés-válasz</a>
				</nav>
			</nav>

		<main className="page_content section_space_lg">

			<div data-bs-spy="scroll" data-bs-target="#navbar-scrollspy" data-bs-offset="0">

				<Banner 
					title={t('banner.title')} 
					description={t('banner.sub')} 
					image={false}
					list={bannerList}
					search={false}					
				/>

				<WhatsAbout/>

				<WhyAndHow/>
				
				<WhatYouGet/>

				<Trusted/>				
        
				<section className="pricing_section section_space_lg pt-5" id="section_pricing">
          <div className="container decoration_wrap">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-3">{t('title')}</h2>
							<p>{t('sub')}</p>
            </div>
						
            <div className="pricing_cards_wrapper row align-items-center py-3">
              <div className="col col-lg-6">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">{t('p_m_title')}</h3>
                  <div className="pricing_wrap">
                    <span className="price_value price_value_old d-block">{t('original')}: <del>9.900</del></span>
										<span className="price_value">4.950<sup>HUF</sup></span>
                    <small className="d-block"><strong>{t('p_m_sub')}</strong>, {t('p_m_sub2')}</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_m_opt1')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_m_opt2')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_m_opt3')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_m_opt4')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_m_opt5')}</span>
                    </li>										
                  </ul>
                  <div className="btn_wrap pb-0">
										<CheckoutForm priceId="price_1RRDG3KoWBLyki7ElaP1loZT" title={t('buttons.sub_monthly')}/>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="pricing_card text-center bg_dark tilt">
                  <div className="card_badge">{t('popular')}</div>
                  <h3 className="card_heading">{t('p_a_title')}</h3>
                  <div className="pricing_wrap">
										<span className="price_value price_value_old d-block">{t('original')}: <del>89.900</del></span>
                    <span className="price_value">26.970<sup>HUF</sup></span>
										<small className="d-block"><strong>{t('p_a_sub')}</strong>, {t('p_a_sub2')}</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_a_opt1')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_a_opt2')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_a_opt3')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_a_opt4')}</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>{t('p_a_opt5')}</span>
                    </li>										
                  </ul>
                  <div className="btn_wrap pb-0">
										<CheckoutForm priceId="price_1RRDEbKoWBLyki7EfOf6jMhb" title={t('buttons.sub_annual')} btnClass="btn_warning"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="deco_item shape_img_1" data-parallax='{"y" : 230, "smoothness": 6}'>
              <Image src="/assets/images/shape/shape_img_4.png" width={327} height={321} alt="Collab – Online Learning Platform"/>
            </div>
            <div className="deco_item shape_img_2" data-parallax='{"y" : -130, "smoothness": 6}'>
              <Image src="/assets/images/shape/shape_img_5.png" width={355} height={349} alt="Collab – Online Learning Platform"/>
            </div>
          </div>
        </section>

				<Reviews />		

				{/* <CountBack fromDate={"2025.06.19. 19:00"}/> */}

				<SzexplicitRecommendation />	

				<FAQ/>

				<NewsletterSection/>
			
			</div>

		</main> 
</>		
  );
}