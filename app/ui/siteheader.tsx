"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeaderUser from './siteheaderuser';
import SiteHeaderMenu from './siteheadermenu';


export default function SiteHeader({ session }: { session: any }) {
	const pathname = usePathname();
	const headerClass = pathname === "/" ? "site_header_2" : "site_header_1";
	const isDashboard = pathname.startsWith('/dashboard');

  return (		
		<header className={`site_header ${headerClass}`}>
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-3 col-5">
					<div className="site_logo">
						<Link className="site_link align-middle" href="/">
							<Image src="/assets/images/logo/site_logo.svg" width="143" height="42" alt="Collab - Online Learning Platform"/>
						</Link>
						{isDashboard ? <div className="d-inline-block text-black fw-normal ms-2 align-middle" style={{marginTop:'8px', paddingLeft:'8px', borderLeft:'2px solid #ffd32b'}}>Admin</div>: ''}
					</div>
				</div>
				<div className="col col-lg-6 col-2">
					<SiteHeaderMenu session={session} pathname={pathname} isDashboard={isDashboard}/>
				</div>
				<div className="col col-lg-3 col-5">
					<SiteHeaderUser session={session} />
				</div>
			</div>
		</div>
	</header>
)}