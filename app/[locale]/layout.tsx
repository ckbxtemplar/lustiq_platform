import '@/app/ui/global.css';
import '@/app/ui/assets/css/assets.css';
import { roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';
import ScriptLoader from '@/app/ui/assets/js/ScriptLoader';
import BackToTop from '@/app/ui/backtotop';
import SiteHeader from '@/app/ui/siteheader';
import Footer from '@/app/ui/footer';
import { Providers } from '@/app/lib/providers';
import GlobalMessageHandler from '@/app/ui/global-message-handler';
import Script from 'next/script'

 
export const metadata: Metadata = {
  title: {
    template: '%s | Lustiq Lab',
    default: 'Lustiq Lab',
  },
  description: 'Lustiq Lab',
  metadataBase: new URL('https://lustiqlab.hu'),
};

export default async function RootLayout({
  children,
	params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
	const { locale } = await params;
	const dictionary = (await import(`@/app/dictionaries/${locale}.json`)).default;



  return (
    <html lang={locale}>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HB1VJFF3ED"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HB1VJFF3ED');
            `,
          }}
        />			
				<Script id="gtm-head" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-5CVV86J9');
					`}
				</Script>				
      </head>
    	<body className={`${roboto.className} antialiased`}>				
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5CVV86J9"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            `,
          }}
        />
				<div className='page-wrapper'>
						<BackToTop/>
						<Providers locale={locale} dictionary={dictionary}>						
							<GlobalMessageHandler />
							<SiteHeader />						
							{children}
							<ScriptLoader />
						</Providers>							
						<Footer/>					
				</div>
				
			</body>
    </html>
  );
}
