"use client"

import Image from 'next/image';
import { NewsletterSubscribe, NewsletterSubscribeState } from '@/app/lib/actions';
import { useActionState, useEffect } from 'react';
import {useTranslations} from 'next-intl';

export default function NewsletterSection({page="home", card=true}: {page?: string, card?: boolean}) {
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

	const t = useTranslations('pages.'+page+'.newsletterSection');	

	return (
<section id="newsletter" className={'newsletter_section ' + (page == 'soon' && ' newsletter_soon') + (card===false ? ' newsletter_naked' : '')}>
	<div className="container">
		<div className={'newslatter_box '+(card===true ? 'bg-pattern2' : '') }>
			<div className="row justify-content-center">
				<div className="col col-lg-10">
					<div className="section_heading text-center mb-3">

						{ page==='home' && (
							<>
								<h2 className="heading_text">
									{t('title')}
								</h2>							
								<p className="heading_description mb-0">
									{t('subtitle')}
								</p>						
							</>

						)}
						{ page==='soon' && (
						<>
						<div className="row">
							<div className="col-12 col-lg-8">
								<h2 className="heading_text">
									{t('title')}
								</h2>
							</div>
							<div className="col-auto">
								<Image src="/assets/images/banner/earlybird.png" width={180} height={180} alt="Collab – Online Learning Platform"/>
							</div>
						</div>						
						<div className="row justify-content-center my-4">
							
							<div className="heading_description mb-2 text-start col-12 col-lg-auto bulletpoint_container">							
								<h4 className="mt-4 mb-3 text-start">{t('subtitle')}</h4>
								<div className="ms-4">
									<div className="info_list mb-1 text-start bulletpoint_item my-2"><i className="fas fa-square"></i> {t('subtitle1')}</div>
									<div className="info_list mb-1 text-start bulletpoint_item my-2"><i className="fas fa-square"></i> {t('subtitle2')}</div>
									<div className="info_list mb-1 text-start bulletpoint_item my-2"><i className="fas fa-square"></i> {t('subtitle3')}</div>
									<div className="info_list mb-1 text-start bulletpoint_item my-2"><i className="fas fa-square"></i> {t('subtitle4')}</div>								
								</div>								
							</div>						

						</div>
						<div className="row justify-content-center my-4">
							<div className="col-12 col-lg-10 py-4">
								<h4 className="me-4"><span className="me-4">{t('pricingTitle')}</span>
								<a href="/pricing" className="btn btn_dark">
									<span>
										<small>{t('pricingButton')}</small>
										<small>{t('pricingButton')}</small>
									</span>
								</a>
								</h4>
							</div>
						</div>
						<hr/>
						<div className="row justify-content-center">
							<div className="col-12 col-lg-10 mb-3">
									<h4 className="mt-4 text-center">{t('subtitle5')}</h4>
							</div>
						</div>
						</>
						)}						
					</div>
					<form action={formAction}>
						<div className="form_item my-2">
							<input type="email" name="email" placeholder={t('inputPlaceholder')} disabled={state.state === 2}/>
							<button type="submit" className="btn border_dark " disabled={state.state === 2}>
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