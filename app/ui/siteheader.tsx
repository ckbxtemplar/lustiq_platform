"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SiteHeaderUser from './siteheaderuser';
import SiteHeaderMenu from './siteheadermenu';
import SiteHeaderLanguageSelect from './siteheaderlanguageselect';


export default function SiteHeader() {
	const pathname = usePathname();
	const countPathParts = pathname.split("/").filter(Boolean);
	const headerClass = countPathParts.length === 1 ? "site_header_2" : "site_header_1";
	const isDashboard = countPathParts.length > 0 && countPathParts[1] === 'dashboard';

  return (		
		<header className={`site_header ${headerClass}`}>
		<div className="container">
			<div className="row align-items-center">
				<div className="col col-lg-3 col-5">
					<div className="site_logo">
						<Link className="site_link align-middle" href="/">
							<Image src="/assets/images/logo/site_logo.svg" width="143" height="42" alt="Collab - Online Learning Platform"/>
						</Link>
						{isDashboard ? <div className="d-inline-block text-black fw-normal lh-1 ms-2 align-middle" style={{marginTop:'8px', paddingLeft:'8px', borderLeft:'2px solid #ffd32b'}}><small>Your Own<br/>Dashboard</small></div>: ''}
					</div>
				</div>
				<div className="col col-lg-auto">
					<SiteHeaderMenu pathname={pathname} isDashboard={isDashboard}/>
				</div>
				<div className="col col-lg-auto ms-auto">
					<SiteHeaderLanguageSelect />
				</div>
				<div className="col col-lg-auto ms-auto">					
					<SiteHeaderUser />
				</div>
			</div>
		</div>
	</header>
)}