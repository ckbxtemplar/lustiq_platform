import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function HowWorks() {

	const t = useTranslations('components.howworks');

  return (
	<section className="intro_video_section section_space_lg overflow-hidden decoration_wrap">
		<div className="container">
			<div className="section_heading text-center pb-4">
				<h2 className="heading_text mb-0">{t('title')}</h2>
			</div>			
			<div className="row align-items-end justify-content-center">
				<div className="col col-lg-3">
						
						<Image src="/assets/images/steps/step_1.png" width={200} height={200} alt="Collab – Online Learning Platform"/>
						<div className="iconbox_item">
							<div className="serial_number">01</div>
							<hr/>
							<div className="title_wrap">
								<h3 className="item_title mb-0">{t('o1')}</h3>
							</div>
						</div>						
				</div>
				<div className="col col-lg-3 offset-lg-1">
					
						<Image src="/assets/images/steps/step_2.png" width={200} height={200} alt="Collab – Online Learning Platform"/>
						<div className="iconbox_item">
							<div className="serial_number">02</div>
							<hr/>
							<div className="title_wrap">
								<h3 className="item_title mb-0">{t('o2')}</h3>
							</div>
						</div>						

				</div>
				<div className="col col-lg-3 offset-lg-1">
					
						<Image src="/assets/images/steps/step_3.png" width={200} height={200} alt="Collab – Online Learning Platform"/>
						<div className="iconbox_item">
							<div className="serial_number">03</div>
							<hr/>
							<div className="title_wrap">
								<h3 className="item_title mb-0">{t('o3')}</h3>
							</div>
						</div>						

				</div>								
			</div>			
		</div>
	</section>
)}