import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function SiteHeaderMenuDashboard({ pathname }: { pathname: string }) {

	const t = useTranslations('pages.home.header');
	const locale = '/'+useLocale();

  return (
		<div className="main_menu_inner collapse navbar-collapse justify-content-start" id="main_menu_dropdown">
			<ul className="main_menu_list unordered_list_center">							
				<li className={pathname.slice(locale.length) === '/dashboard' ? 'active' : ''}>
					<Link className="nav-link ps-0 pe-3" href="/dashboard" id="home_submenu" role="button">
						<span className="icon-container text-center"><i className="far fa-home fa-1x text-red"></i></span>
						{t('dashboard')}
					</Link>
				</li>
				<li className={pathname.slice(locale.length) === '/dashboard/courses' ? 'active' : ''}>
					<Link className="nav-link ps-0 pe-3" href="/dashboard/courses" id="service_submenu" role="button">
						<span className="icon-container text-center"><i className="far fa-heart fa-1x text-red"></i></span>					
						{t('mycourses')}
					</Link>
				</li>
				<li className={pathname.slice(locale.length) === '/dashboard/profile' ? 'active' : ''}>
					<Link className="nav-link ps-0 pe-3" href="/dashboard/profile" id="service_submenu" role="button">
						<span className="icon-container text-center"><i className="far fa-user fa-1x text-red"></i></span>					
						{t('personalsettings')}
					</Link>
				</li>
				<li className={pathname.slice(locale.length) === '/dashboard/subscription' ? 'active' : ''}>
					<Link className="nav-link ps-2 pe-4 bg-red text-white fw-normal ms-3" href="/dashboard/subscription" id="service_submenu" role="button">
						<span className="icon-container text-center"><i className="fas fa-user-graduate fa-1x text-white"></i></span>					
						{t('subscription')}
					</Link>
				</li>				
			</ul>
		</div>
	)}