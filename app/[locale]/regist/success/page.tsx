'use client';

import { useSearchParams } from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function RegistSuccess() {
	const searchParams = useSearchParams();
  const email = searchParams.get('email');
	
	const t = useTranslations('pages.regist.success');

	return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-12 align-self-center">
							<h1 className="register_heading text-center">{t('m1')}</h1>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col col-auto align-self-center">

									<div className="iconbox_item contact_info_iconbox">
											<div className="item_icon ms-3">
												<i className="fas fa-envelope"></i>
											</div>
											<div className="item_content">											
													{t('m2')}<br/>{t('m3')}
													<br/><strong>{email}</strong>
											</div>
									</div>

						</div>
					</div>
					<div className="row justify-content-center mt-5">
						<div className="col col-12 align-self-center">
							<p className="text-center">
								{t('m4')}<br/>{t('m5')}
							</p>							
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}