import '@/app/ui/global.css';
import '@/app/ui/assets/css/assets.css';
import { roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';
import ScriptLoader from '@/app/ui/assets/js/ScriptLoader';
import BackToTop from '@/app/ui/backtotop';
import SiteHeader from '@/app/ui/siteheader';
import Footer from '@/app/ui/footer';
import { auth } from '@/auth';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Lustiq Platform',
    default: 'Lustiq Platform',
  },
  description: 'Lustiq platform',
  metadataBase: new URL('https://platform.lustiq.hu'),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	const session = await auth();

  return (
    <html lang="en">
      <head>

      </head>
    	<body className={`${roboto.className} antialiased`}>
				<div className="page_wrapper">
						<BackToTop/>
						<SiteHeader session={session}/>
						{children}
						<Footer/>
				</div>
				<ScriptLoader />
			</body>
    </html>
  );
}
