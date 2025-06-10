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
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],	
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

				<Script id="gtag-init" strategy="beforeInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('consent', 'default', {
							'ad_storage': 'denied',
							'ad_user_data': 'denied',
							'ad_personalization': 'denied',
							'analytics_storage': 'denied'
						});
					`}
				</Script>

				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-HB1VJFF3ED"
					strategy="beforeInteractive"
				/>
				<Script id="gtag-config" strategy="beforeInteractive">
					{`
						gtag('js', new Date());
						gtag('config', 'G-HB1VJFF3ED');
					`}
				</Script>

				<link rel="icon" href="/favicon/apple-touch-icon.png" sizes="any" />
      </head>
    	<body className={`${roboto.className} antialiased`} >	

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
