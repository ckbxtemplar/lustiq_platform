import '@/app/ui/global.css';
import '@/app/ui/assets/css/assets.css';
import { roboto } from '@/app/ui/fonts';
import { Metadata } from 'next';
import ScriptLoader from '@/app/ui/assets/js/ScriptLoader';
import BackToTop from '@/app/ui/backtotop';
import SiteHeader from '@/app/ui/siteheader';
import Footer from '@/app/ui/footer';
import { auth } from '@/auth';
import SideNav from '@/app/ui/dashboard/sidenav';

 
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
				<div>
						<BackToTop/>
						<SiteHeader session={session}/>
						<div className='d-flex'>
							<div className="flex-shrink-0">
								<SideNav/>
							</div>
							<div className="flex-fill">	
								{children}
							</div>
						</div>						
						<Footer/>
				</div>
				<ScriptLoader />
			</body>
    </html>
  );
}
