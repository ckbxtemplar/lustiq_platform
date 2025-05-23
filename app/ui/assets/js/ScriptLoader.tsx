'use client';

import Reac, { useEffect }  from 'react';
import Script from 'next/script';
import * as CookieConsent from "vanilla-cookieconsent";

const ScriptLoader: React.FC = () => {

	useEffect(() => {
			CookieConsent.run({
    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },

    language: {
        default: 'en',
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

                            //this field will generate a toggle linked to the 'necessary' category
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