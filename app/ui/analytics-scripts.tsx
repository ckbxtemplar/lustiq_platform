'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function AnalyticsScripts() {
  const [isGtagLoaded, setGtagLoaded] = useState(false);

  useEffect(() => {
    if (!isGtagLoaded) return;
    console.log('Gtag script loaded');

    // Define gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Consent Mode default
    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });

    // NOW the config
    gtag('js', new Date());
    gtag('config', 'G-HB1VJFF3ED', {
      // Optional but recommended:
      anonymize_ip: true,
      allow_google_signals: false,
    });
  }, [isGtagLoaded]);

  return (
    <Script
      id="gtag-lib"
      src="https://www.googletagmanager.com/gtag/js?id=G-HB1VJFF3ED"
      strategy="afterInteractive"
      onLoad={() => setGtagLoaded(true)}
    />
  );
}
