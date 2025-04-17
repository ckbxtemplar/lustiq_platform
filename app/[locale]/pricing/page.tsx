import { Metadata } from 'next';
import Image from 'next/image';
import FAQ from '@/app/ui/main/FAQ';
import NewsletterSection from '@/app/ui/newsletter-section';
import CheckoutForm from '@/app/ui/subscribebutton';

export const metadata: Metadata = {
  title: 'Pricing',
};

export default function Pricing() {

  return (
		<main className="page_content">

        <section className="pricing_section section_space_lg pb-0">
          <div className="container decoration_wrap">
            <div className="section_heading text-center">
              <h2 className="heading_text mb-0">
                Premium Price Packages
              </h2>
            </div>
						<CheckoutForm priceId="price_1RChWv4ExN9ArIY0aknZy2xp"/>
            <div className="pricing_cards_wrapper row align-items-center">
              <div className="col col-lg-6">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">Basic Plan</h3>
                  <div className="pricing_wrap">
                    <span className="price_value"><sup>$</sup>50</span>
                    <small className="d-block">per 3 mounth</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>All Video for 3 Months</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Testing for 10 Courses</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Checking 5 Homework</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Mentor Consultation </span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="#!">
                      <span>
                        <small>Grav Now</small>
                        <small>Grav Now</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="pricing_card text-center bg_dark tilt">
                  <div className="card_badge">recommended</div>
                  <h3 className="card_heading">Standart Plan</h3>
                  <div className="pricing_wrap">
                    <span className="price_value"><sup>$</sup>150</span>
                    <small className="d-block">per 6 mounth</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>All Video for 3 Months</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Testing for 10 Courses</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Checking 5 Homework</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Mentor Consultation </span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn btn_primary" href="#!">
                      <span>
                        <small>Grav Now</small>
                        <small>Grav Now</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 d-none 	">
                <div className="pricing_card text-center tilt">
                  <h3 className="card_heading">Premium Plan</h3>
                  <div className="pricing_wrap">
                    <span className="price_value"><sup>$</sup>250</span>
                    <small className="d-block">per 12 mounth</small>
                  </div>
                  <hr/>
                  <ul className="info_list unordered_list_block text-start">
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>All Video for 3 Months</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Testing for 10 Courses</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Checking 5 Homework</span>
                    </li>
                    <li>
                      <i className="fas fa-caret-right"></i>
                      <span>Mentor Consultation </span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn border_dark" href="#!">
                      <span>
                        <small>Grav Now</small>
                        <small>Grav Now</small>
                      </span>
                    </a>
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

				<FAQ/>

				<NewsletterSection/>

		</main> 
  );
}