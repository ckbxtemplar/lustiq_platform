import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Testimonials() {

	const t = useTranslations('pages.home.testimonialsSection');

  return (
		<section className="testimonial_section section_space_lg">
		<div className="container">
			<div className="testimonial_carousel">
				<div className="common_carousel_1col" data-cursor-text="Drag" data-slick='{"autoplay":true,"dots":true}'>
					<div className="carousel_item">
						<div className="testimonial_item_2">
							<div className="testimonial_image ms-0" style={{backgroundImage: "url('/assets/images/shape/shape_img_6.png')"}}>
								<Image src="/assets/images/testimonial/vasarhelyi-dorottya-profil.jpg" width={630} height={630} alt="Collab – Online Learning Platform"/>
							</div>
							<div className="testimonial_content">
								<div className="quote_icon">
									<Image src="/assets/images/icon/icon_quote.svg" width={64} height={38} alt="Collab – Online Learning Platform"/>
								</div>
								<h3 className="testimonial_title">
									{t('sectionTitle1')}
								</h3>
								<p>
									{t('sectionSub1')}
								</p>
								<div className="testimonial_admin">
									<div className="admin_content">
										<h5 className="testimonial_name">{t('sectionAuthor1')}</h5>
										<span className="testimonial_designation">{t('sectionAuthor1sub')}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel_item">
						<div className="testimonial_item_2">
							<div className="testimonial_image ms-0" style={{backgroundImage: "url('/assets/images/shape/shape_img_6.png')"}}>
								<Image src="/assets/images/testimonial/Varga_Greta_profil2.jpg" width={630} height={630} alt="Collab – Online Learning Platform"/>
							</div>
							<div className="testimonial_content">
								<div className="quote_icon">
									<Image src="/assets/images/icon/icon_quote.svg" width={64} height={38} alt="Collab – Online Learning Platform"/>
								</div>
								<h3 className="testimonial_title">
									{t('sectionTitle2')}
								</h3>
								<p>
									{t('sectionSub2')}
								</p>
								<div className="testimonial_admin">
									<div className="admin_content">
										<h5 className="testimonial_name">{t('sectionAuthor2')}</h5>
										<span className="testimonial_designation">{t('sectionAuthor2sub')}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="carousel_item">
						<div className="testimonial_item_2">
							<div className="testimonial_image ms-0" style={{backgroundImage: "url('/assets/images/shape/shape_img_6.png')"}}>
								<Image src="/assets/images/testimonial/Katona_Etelka_Profil.jpg" width={630} height={630} alt="Collab – Online Learning Platform"/>
							</div>
							<div className="testimonial_content">
								<div className="quote_icon">
									<Image src="/assets/images/icon/icon_quote.svg" width={64} height={38} alt="Collab – Online Learning Platform"/>
								</div>
								<h3 className="testimonial_title">
									{t('sectionTitle3')}
								</h3>
								<p>
									{t('sectionSub3')}
								</p>
								<div className="testimonial_admin">
									<div className="admin_content">
										<h5 className="testimonial_name">{t('sectionAuthor3')}</h5>
										<span className="testimonial_designation">{t('sectionAuthor3sub')}</span>
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