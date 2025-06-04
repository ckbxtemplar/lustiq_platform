'use client';

import Reac, { useEffect, useState, useRef  }  from 'react';
import Script from 'next/script';
import * as CookieConsent from "vanilla-cookieconsent";
import {useLocale} from 'next-intl';
import { usePathname } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-HB1VJFF3ED';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const ScriptLoader: React.FC = () => {

	const locale = useLocale();
  const pathname = usePathname();
  const [scriptKey, setScriptKey] = useState(0);
  const [gtagLoaded, setGtagLoaded] = useState(false);
  const isFirstLoad = useRef(true);

  // 1. Google Consent Mode: alap denegálás
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag = (...args: any[]) => window.dataLayer.push(args);

    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      personalization_storage: 'denied',
      security_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }, []);

  // 2. CookieConsent futtatása a popup konfigurációddal
  useEffect(() => {
    const CAT_NECESSARY = 'necessary';
    const CAT_ANALYTICS = 'analytics';
    const CAT_ADS = 'ads';

    CookieConsent.run({
      categories: {
        [CAT_NECESSARY]: { enabled: true, readOnly: true },
        [CAT_ANALYTICS]: { readOnly: false },
        [CAT_ADS]: { readOnly: false }
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
			},
      onFirstConsent: updateConsent,
      onConsent: updateConsent,
      onChange: updateConsent,
    });

    function updateConsent() {
			console.log('Cookie consent updated');
      const analytics = CookieConsent.acceptedCategory(CAT_ANALYTICS);
      const ads = CookieConsent.acceptedCategory(CAT_ADS);			
      window.gtag!(
        'consent',
        'update',
        {
          ad_storage: ads ? 'granted' : 'denied',
          analytics_storage: analytics ? 'granted' : 'denied',
          functionality_storage: CookieConsent.acceptedCategory(CAT_NECESSARY) ? 'granted' : 'denied',
          personalization_storage: ads ? 'granted' : 'denied',
          security_storage: CookieConsent.acceptedCategory(CAT_NECESSARY) ? 'granted' : 'denied',
          ad_user_data: ads ? 'granted' : 'denied',
          ad_personalization: ads ? 'granted' : 'denied'
        }
      );
      
      if (CookieConsent.acceptedCategory(CAT_ANALYTICS) && !gtagLoaded) {
        loadGtag();
      }
    }

    function loadGtag() {
			console.log('Loading Google Analytics script...');
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      script.onload = () => {
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
        setGtagLoaded(true);
      };
      document.head.appendChild(script);
    }
  }, [locale, gtagLoaded]);



  useEffect(() => {
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