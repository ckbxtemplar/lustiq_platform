'use client';

import Reac, { useEffect }  from 'react';
import Script from 'next/script';
import * as CookieConsent from "vanilla-cookieconsent";
import {useLocale} from 'next-intl';

const ScriptLoader: React.FC = () => {

	const locale = useLocale();

	useEffect(() => {
			CookieConsent.run({
				categories: {
						necessary: {
								enabled: true,  // this category is enabled by default
								readOnly: true  // this category cannot be disabled
						},
						analytics: {}
				},
				guiOptions: {
						consentModal: {
								layout: "box wide",
								position: "bottom center",
								equalWeightButtons: true,
								flipButtons: false
						},
						preferencesModal: {
								layout: "box",
								position: "right",
								equalWeightButtons: true,
								flipButtons: false
						}
				},
				language: {
						default: locale,
						translations: {
								en: {
										consentModal: {
												title: 'We use cookies',
												description: 'Cookie modal description',
												acceptAllBtn: 'Accept all',
												acceptNecessaryBtn: 'Reject all',
												showPreferencesBtn: 'Manage Individual preferences'
										},
										preferencesModal: {
												title: 'Manage cookie preferences',
												acceptAllBtn: 'Accept all',
												acceptNecessaryBtn: 'Reject all',
												savePreferencesBtn: 'Accept current selection',
												closeIconLabel: 'Close modal',
												sections: [
														{
																title: 'Somebody said ... cookies?',
																description: 'I want one!'
														},
														{
																title: 'Strictly Necessary cookies',
																description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',
																linkedCategory: 'necessary'
														},
														{
																title: 'Performance and Analytics',
																description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
																linkedCategory: 'analytics'
														},
														{
																title: 'More information',
																description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
														}
												]
										}
								},
								hu: {
										consentModal: {
												title: 'Maradjon a Lustiq Lab olyan, amilyennek megismerted – beleegyezéssel, természetesen!',
												description: 'Sütiket és hasonló technológiákat használunk a felhasználói élmény javítása érdekében, de NÁLUNK A NEM AZ NEM – nemcsak a hálószobában, hanem a böngészőben is. A „Beleegyezek” gombra kattintva hozzájárulsz ahhoz, hogy ezeket analitikai, marketing és külső tartalom céljából használjuk. Ha inkább nem, válaszd a „Csak a legszükségesebbeket” opciót, és mi tiszteletben tartjuk a döntésed.',
												acceptAllBtn: 'Mindenbe beleegyezek',
												acceptNecessaryBtn: 'Csak a szükséges',
												showPreferencesBtn: 'Egyéni beállítások kezelése'
										},
										preferencesModal: {
												title: 'Sütibeállítások kezelése',
												acceptAllBtn: 'Mindent elfogadok',
												acceptNecessaryBtn: 'Csak a szükségeseket engedélyezem',
												savePreferencesBtn: 'Aktuális beállítások elfogadása',
												closeIconLabel: 'A beállítási ablak bezárása',
												sections: [
														{
																title: 'Valaki sütit említett?',
																description: 'Kérek egyet!'
														},
														{
																title: 'Szigorúan szükséges sütik',
																description: 'Ezek a sütik elengedhetetlenek a weboldal megfelelő működéséhez, és nem tilthatók le.',
																linkedCategory: 'necessary'
														},
														{
																title: 'Teljesítmény és analitika',
																description: 'Ezek a sütik információkat gyűjtenek arról, hogyan használod a weboldalt. Az adatok anonim módon kerülnek rögzítésre, és nem alkalmasak azonosításra.',
																linkedCategory: 'analytics'
														},
														{
																title: 'További információ',
																description: 'Ha kérdésed van a sütikkel kapcsolatos irányelveinkkel vagy választásaiddal kapcsolatban, kérlek <a href="#contact-page">lépj velünk kapcsolatba</a>.'
														}
												]
										}
								}
						}
				}				
			});
	}, []);	

  return (
		<>
      <Script src="/assets/js/jquery.min.js"/>
      <Script src="/assets/js/popper.min.js"/>
      <Script src="/assets/js/bootstrap.min.js"/>
      <Script src="/assets/js/bootstrap-dropdown-ml-hack.js"/>
      <Script src="/assets/js/cursor.js"/>
      <Script src="/assets/js/wow.min.js"/>
      <Script src="/assets/js/tilt.min.js"/>
      <Script src="/assets/js/parallax.min.js"/>
      <Script src="/assets/js/parallax-scroll.js"/>
      <Script src="/assets/js/slick.min.js"/>
      <Script src="/assets/js/magnific-popup.min.js"/>
      <Script src="/assets/js/waypoint.js"/>
      <Script src="/assets/js/counterup.min.js"/>
      <Script src="/assets/js/countdown.js"/>
      <Script src="/assets/js/vanilla-calendar.min.js"/>  
      <Script src="/assets/js/main.js" strategy='lazyOnload'/>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.css"></link>
			</>			
  );
};

export default ScriptLoader;