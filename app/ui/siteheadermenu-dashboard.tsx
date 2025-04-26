import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function SiteHeaderMenuDashboard({ pathname }: { pathname: string }) {

	const t = useTranslations('pages.home.header');

  return (
		<div className="main_menu_inner collapse navbar-collapse justify-content-start" id="main_menu_dropdown">
			<ul className="main_menu_list unordered_list_center">							
				<li className={pathname === '/dashboard' ? 'active' : ''}>
					<Link className="nav-link ps-0 pe-3" href="/dashboard" id="home_submenu" role="button">
						<span className="icon-container text-center"><i className="far fa-home fa-1x text-yellow"></i></span>
						{t('dashboard')}
					</Link>
				</li>
				<li className={pathname === '/dashboard/courses' ? 'active' : ''}>
					<Link className="nav-link ps-0 pe-3" href="/dashboard/courses" id="service_submenu" role="button">
						<span className="icon-container text-center"><i className="far fa-heart fa-1x text-yellow"></i></span>					
						{t('mycourses')}
					</Link>
				</li>
				<li className={pathname === '/dashboard/profile' ? 'active' : ''}>
					<Link className="nav-link ps-0 pe-3" href="/dashboard/profile" id="service_submenu" role="button">
						<span className="icon-container text-center"><i className="far fa-user fa-1x text-yellow"></i></span>					
						{t('personalsettings')}
					</Link>
				</li>
			</ul>
		</div>
	)}