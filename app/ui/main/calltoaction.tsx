import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function CallToAction() {

	const t = useTranslations('pages.home.calltoAction');

  return (
		<section className="calltoaction_section section_space_lg bg_dark bg-pattern3 decoration_wrap">
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-7">
					<div className="section_heading mb-lg-0">
						<h2 className="heading_text text-white">							
							{t('title')}
						</h2>
						<p className="heading_description mb-0 text-white">
						{t('sub')}
						</p>
					</div>
				</div>
				<div className="col col-lg-5">
					<div className="calltoaction_form">
						<form action="#">
							<div className="form_item">
								<label htmlFor="input_name" className="input_title text-uppercase">{t('form_name')}</label>
								<input id="input_name" type="text" name="name" placeholder={t('form_name2')}/>
							</div>
							<div className="form_item">
								<label htmlFor="input_email" className="input_title text-uppercase">{t('form_mail')}</label>
								<input id="input_email" type="email" name="email" placeholder={t('form_mail2')}/>
							</div>
							<div className="form_item">
								<label htmlFor="input_question" className="input_title text-uppercase">{t('form_message')}</label>
								<textarea id="input_question" name="Message" placeholder={t('form_message2')}></textarea>
							</div>
							<button type="submit" className="btn btn_dark w-100">
								<span>
									<small>{t('form_button')}</small>
									<small>{t('form_button')}</small>
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