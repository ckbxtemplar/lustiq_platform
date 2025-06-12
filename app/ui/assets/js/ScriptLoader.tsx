'use client';

import Reac, { useEffect, useState, useRef  }  from 'react';
import Script from 'next/script';
import * as CookieConsent from "vanilla-cookieconsent";
import {useLocale} from 'next-intl';
import { usePathname } from 'next/navigation';

const CAT_NECESSARY = "necessary";
const CAT_ANALYTICS = "analytics";
const CAT_ADVERTISEMENT = "advertisement";
// const CAT_FUNCTIONALITY = "functionality";
// const CAT_SECURITY = "security";

const SERVICE_AD_STORAGE = 'ad_storage'
const SERVICE_AD_USER_DATA = 'ad_user_data'
const SERVICE_AD_PERSONALIZATION = 'ad_personalization'
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage'
// const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage'
// const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage'
// const SERVICE_SECURITY_STORAGE = 'security_storage'

const ScriptLoader: React.FC = () => {

	const locale = useLocale();
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

	function updateGtagConsent() {
		console.log("Updating Google Consent Mode with CookieConsent...");

		const cc = CookieConsent.getUserPreferences();
		if (!cc) {
			console.warn("No CookieConsent preferences found.");
			return;
		}

		const grantedCategories = cc.acceptedCategories;

		const isGranted = (category: string) => grantedCategories.includes(category);

		const consentObject: Record<string, string> = {
			[SERVICE_AD_STORAGE]: isGranted(CAT_ADVERTISEMENT) ? "granted" : "denied",
			[SERVICE_AD_USER_DATA]: isGranted(CAT_ADVERTISEMENT) ? "granted" : "denied",
			[SERVICE_AD_PERSONALIZATION]: isGranted(CAT_ADVERTISEMENT) ? "granted" : "denied",
			[SERVICE_ANALYTICS_STORAGE]: isGranted(CAT_ANALYTICS) ? "granted" : "denied"
			// [SERVICE_FUNCTIONALITY_STORAGE]: isGranted(CAT_FUNCTIONALITY) ? "granted" : "denied",
			// [SERVICE_PERSONALIZATION_STORAGE]: isGranted(CAT_FUNCTIONALITY) ? "granted" : "denied",
			// [SERVICE_SECURITY_STORAGE]: isGranted(CAT_SECURITY) ? "granted" : "denied"
		};

		console.log("Sending to gtag consent object:", consentObject);

		if (window.gtag) {
			window.gtag('consent', 'update', consentObject);
		} else {
			console.warn("gtag is not defined yet.");
		}
	}


  // 2. CookieConsent futtatása a popup konfigurációddal
  useEffect(() => {

    CookieConsent.run({
			onFirstConsent: () => {
					updateGtagConsent();
			},
			onConsent: () => {
					updateGtagConsent();
			},
			onChange: () => {
					updateGtagConsent();
			},      
			categories: {
					[CAT_NECESSARY]: {
							enabled: true,  // this category is enabled by default
							readOnly: true,  // this category cannot be disabled
					},
					[CAT_ANALYTICS]: {
							services: {
									[SERVICE_ANALYTICS_STORAGE]: {
											label: 'Enables storage (such as cookies) related to analytics e.g. visit duration.',
									}
							}
					},
					[CAT_ADVERTISEMENT]: {
							services: {
									[SERVICE_AD_STORAGE]: {
											label: 'Enables storage (such as cookies) related to advertising.',
									},
									[SERVICE_AD_USER_DATA]: {
											label: 'Sets consent for sending user data related to advertising to Google.',
									},
									[SERVICE_AD_PERSONALIZATION]: {
											label: 'Sets consent for personalized advertising.',
									},
							}
					},
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
															title: "Cookie usage",
															description: "We use cookies to ensure the basic functionalities of the website and to enhance your online experience."
													},
													{
															title: "Strictly necessary cookies",
															description: "These cookies are essential for the proper functioning of the website, for example for user authentication.",
															linkedCategory: CAT_NECESSARY,
													},
													{
															title: "Analytics",
															description: 'Cookies used for analytics help collect data that allows services to understand how users interact with a particular service. These insights allow services both to improve content and to build better features that improve the user’s experience.',
															linkedCategory: CAT_ANALYTICS,
															cookieTable: {
																	headers: {
																			name: "Name",
																			domain: "Service",
																			description: "Description",
																			expiration: "Expiration"
																	},
																	body: [
																			{
																					name: "_ga",
																					domain: "Google Analytics",
																					description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
																					expiration: "Expires after 12 days"
																			},
																			{
																					name: "_gid",
																					domain: "Google Analytics",
																					description: "Cookie set by <a href=\"https://business.safety.google/adscookies/\">Google Analytics</a>",
																					expiration: "Session"
																			}
																	]
															}
													},
													{
															title: 'Advertising',
															description: 'Google uses cookies for advertising, including serving and rendering ads, personalizing ads (depending on your ad settings at <a href=\"https://g.co/adsettings\">g.co/adsettings</a>), limiting the number of times an ad is shown to a user, muting ads you have chosen to stop seeing, and measuring the effectiveness of ads.',
															linkedCategory: CAT_ADVERTISEMENT
													},
													{
															title: 'More information',
															description: 'For any queries in relation to the policy on cookies and your choices, please <a href="https://www.example.com/contacts">contact us</a>.'
													}
											]
									}
							}
					}
			}
    });

  }, [locale]);


	// 3. main.js reinitialization on route change
  useEffect(() => {
		console.log("Route changed, reloading main.js script");

    if (isFirstLoad.current) {
      // Ez az első betöltés, nem csinálunk semmit, mert Next.js már betöltötte a scriptet
      isFirstLoad.current = false;
      return;
    }

    // Második és további route váltáskor újratöltjük a scriptet
    const scriptId = 'main-js';
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '/assets/js/main.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname]);


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