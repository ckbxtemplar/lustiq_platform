import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function FAQ() {

	const t = useTranslations('pages.faq');

  return (
	<section className="faq_section section_space_lg" id="section_faq">
		<div className="container">
			<div className="section_heading text-center mb-3">
				<div className="row justify-content-center">
					<div className="col col-lg-7">
						<h2 className="heading_text">
							{t('title')}
						</h2>
						<p className="heading_description mb-0">
							{t('sub')}
						</p>
					</div>
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="col col-lg-6">
					<div className="accordion" id="faq_accordion_1">
						<div className="accordion-item">
							<div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_one" aria-expanded="true">
								{t('q1')}
							</div>
							<div id="collapse_one" className="accordion-collapse collapse show" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a1')}
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_two" aria-expanded="false">
								{t('q2')}
							</div>
							<div id="collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a2')}
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_three" aria-expanded="false">
							{t('q3')}
							</div>
							<div id="collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a3')}
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#collapse_four" aria-expanded="false">
							{t('q4')}
							</div>
							<div id="collapse_four" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_1">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a4')}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col col-lg-6">
					<div className="accordion" id="faq_accordion_2">
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_one" aria-expanded="false">
								{t('q5')}
							</div>
							<div id="a2_collapse_one" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a5')}
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_two" aria-expanded="false">
								{t('q6')}
							</div>
							<div id="a2_collapse_two" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a6')}
									</p>
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#a2_collapse_three" aria-expanded="false">
								{t('q7')}
							</div>
							<div id="a2_collapse_three" className="accordion-collapse collapse" data-bs-parent="#faq_accordion_2">
								<div className="accordion-body">
									<p className="mb-0">
										{t('a7')}
									</p>
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