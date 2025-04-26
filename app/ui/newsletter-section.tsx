"use client"

import { NewsletterSubscribe, NewsletterSubscribeState } from '@/app/lib/actions';
import { useActionState, useEffect } from 'react';
import {useTranslations} from 'next-intl';

export default function NewsletterSection() {
	const initialState: NewsletterSubscribeState = { 
		state:null, errors: { }, message: null 
	};
	const [state, formAction, isPending] = useActionState(NewsletterSubscribe, initialState);	

  const getAlertMessage = () => {
    switch (state.state) {
      case 0:
        return <div className="alert alert-danger mt-3" role="alert">{state.message}</div>;
      case 1:
        return <div className="alert alert-warning mt-3" role="alert">{state.message}</div>;
      case 2:
        return <div className="alert alert-success mt-3" role="alert">{state.message}</div>;
      default:
        return null; // Ha nincs releváns üzenet, ne jelenjen meg az alert.
    }
  };

	const t = useTranslations('pages.home.newsletterSection');

	return (
<section className="newslatter_section">
<div className="container">
	<div className="newslatter_box">
		<div className="row justify-content-center">
			<div className="col col-lg-6">
				<div className="section_heading text-center">
					<h2 className="heading_text">
						{t('title')}
					</h2>
					<p className="heading_description mb-0">
						{t('subtitle')}
					</p>
				</div>
				<form action={formAction}>
					<div className="form_item m-0">
						<input type="email" name="email" placeholder={t('inputPlaceholder')} disabled={state.state === 2}/>
						<button type="submit" className="btn btn_dark" disabled={state.state === 2}>
							<span>
								<small>{t('subscribeButton')}</small>
								<small>{t('subscribeButton')}</small>
							</span>
						</button>
					</div>
				</form>
			</div>
			{getAlertMessage() && (
				<div className="row  justify-content-center">				
					<div className="col col-lg-5">{getAlertMessage()}</div>
				</div>				
			)}			
		</div>
	</div>
</div>
</section>
)}