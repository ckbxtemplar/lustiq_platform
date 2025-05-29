import { Metadata } from 'next';
import Image from 'next/image';
import FAQ from '@/app/ui/main/FAQ';
import NewsletterSection from '@/app/ui/newsletter-section';
import CheckoutForm from '@/app/ui/subscribebutton';
import {useTranslations} from 'next-intl';
import CountBack from '@/app/ui/main/countBack';
import Trusted from '@/app/ui/main/trusted';

export const metadata: Metadata = {
  title: 'Pricing'
};

export default function Pricing() {
	
	const t = useTranslations('pages.pricing');
	
  return (
		<main className="page_content">
				<Trusted/>

        <section className="pricing_section section_space_lg pt-5">
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

            <div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
              <Image src="/assets/images/shape/shape_img_4.png" width={327} height={321} alt="Collab – Online Learning Platform"/>
            </div>
            <div className="deco_item shape_img_2" data-parallax='{"y" : -130, "smoothness": 6}'>
              <Image src="/assets/images/shape/shape_img_5.png" width={355} height={349} alt="Collab – Online Learning Platform"/>
            </div>
          </div>
        </section>

				<CountBack fromDate={"2025.06.19. 19:00"}/>

					<NewsletterSection page="soon" />	

				<FAQ/>

				<NewsletterSection/>

		</main> 
  );
}