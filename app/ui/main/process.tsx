import {useTranslations} from 'next-intl';

export default function Process() {
	const t = useTranslations('pages.home.featuresSection');
	
  return (
		<section className="process_section section_space_lg pb-0">
		<div className="container">
			<div className="section_heading text-center">
				<div className="row justify-content-center">
					<div className="col col-lg-9">
						<h2 className="heading_text mb-0">
							{t('sectionTitle')}
						</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col col-lg-4 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">01</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
								{t('feature1Title')}
							</h3>
						</div>
						<p className="mb-0">							
							{t('feature1Desc')}
						</p>
					</div>
				</div>
				<div className="col col-lg-4 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">02</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
								{t('feature2Title')}
							</h3>
						</div>
						<p className="mb-0">
							{t('feature2Desc')}
						</p>
					</div>
				</div>
				<div className="col col-lg-4 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">03</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
							{t('feature3Title')}
							</h3>
						</div>
						<p className="mb-0">
						{t('feature3Desc')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}