import '@/app/ui/global.css';
import '@/app/ui/assets/css/assets.css';
import { roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';
import ScriptLoader from '@/app/ui/assets/js/ScriptLoader';
import BackToTop from '@/app/ui/backtotop';
import SiteHeader from '@/app/ui/siteheader';
import Footer from '@/app/ui/footer';
import { Providers } from '@/app/lib/providers';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Lustiq Lab',
    default: 'Lustiq Lab',
  },
  description: 'Lustiq Lab',
  metadataBase: new URL('https://lab.lustiq.hu'),
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
      </head>
    	<body className={`${roboto.className} antialiased`}>
				<div className='page-wrapper'>
						<BackToTop/>
						<Providers locale={locale} dictionary={dictionary}>						
							<SiteHeader />						
							{children}
						</Providers>							
						<Footer/>					
				</div>
				<ScriptLoader />
			</body>
    </html>
  );
}
