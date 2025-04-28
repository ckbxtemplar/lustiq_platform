import RegistForm from '@/app/ui/regist-form';
import { Suspense } from 'react';
import { Metadata } from 'next';
import {useTranslations} from 'next-intl';
 
export const metadata: Metadata = {
  title: 'Regist',
};
 
export default function RegistPage() {

	const t = useTranslations('pages.regist');	

  return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-lg-5">
							<h1 className="register_heading text-center">{t('title')}</h1>
							<p className="register_heading_description text-center">
								{t('sub')}
							</p>
							<Suspense>
								<RegistForm />
							</Suspense>
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}