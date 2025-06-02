"use client";

import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Trusted() {
	
	const t = useTranslations('components.reviews');

  return (
        <section className="testimonial_section mt-5 py-5">
          <div className="container">
            <div className="section_heading">
              <div className="row align-items-center">
                <div className="col col-lg-7">
                  <h2 className="heading_text mb-0">
                    {t('title')}
                  </h2>
                </div>
                <div className="col col-lg-5 d-lg-flex d-none justify-content-end">
                  <div className="carousel_arrow">
                    <button type="button" className="cc2c_left_arrow">
                      <i className="far fa-arrow-left"></i>
                      <i className="far fa-arrow-left"></i>
                    </button>
                    <button type="button" className="cc2c_right_arrow">
                      <i className="far fa-arrow-right"></i>
                      <i className="far fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial_carousel">
              <div className="common_carousel_2col" data-cursor-text="Drag" data-slick='{"dots":true}'>
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img src="/assets/images/trusted/p1.jpg" alt="Collab – Online Learning Platform"/>
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                      </ul>
                      <p>
                        Három hét alatt megtanultam bátran kimondani, mire vágyom.
                      </p>
                      <h6 className="testimonial_designation"><strong>Kurzus:</strong> Asszertív kommunikáció a szexben</h6>
                      <h5 className="testimonial_name">Kata</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img src="/assets/images/testimonial/w_1.jpg" alt="Collab – Online Learning Platform"/>
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                      </ul>
                      <p>
                        Az AI-coach olyan, mintha privát terapeutám lenne – minden kérdésre rögtön reagál, szégyenérzet nélkül.
                      </p>
                      <h6 className="testimonial_designation"><strong>Kurzus:</strong> Stresszcsökkentés a szexben</h6>
                      <h5 className="testimonial_name">Ági</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="carousel_item">
                  <div className="testimonial_item">
                    <div className="testimonial_image">
                      <img src="/assets/images/testimonial/w_1.jpg" alt="Collab – Online Learning Platform"/>
                    </div>
                    <div className="testimonial_content">
                      <ul className="rating_star unordered_list">
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                        <li className="active"><i className="fas fa-star"></i></li>
                      </ul>
                      <p>
                        Nagyon tetszik, hogy a kurzusok lényegretőrőek és a hangalpú Ai elképsztően életszerű
                      </p>
                      <h6 className="testimonial_designation"><strong>Kurzus:</strong> Asszertív kommunikáció a szexben</h6>
                      <h5 className="testimonial_name">Zoli</h5>
                      <span className="quote_icon">
                        <i className="fas fa-quote-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel_arrow d-lg-none d-flex justify-content-center">
                <button type="button" className="cc2c_left_arrow">
                  <i className="far fa-arrow-left"></i>
                  <i className="far fa-arrow-left"></i>
                </button>
                <button type="button" className="cc2c_right_arrow">
                  <i className="far fa-arrow-right"></i>
                  <i className="far fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </section>
)}