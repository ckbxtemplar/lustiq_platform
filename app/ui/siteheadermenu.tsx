import SiteHeaderMenuMain from './siteheadermenu-main';
import SiteHeaderMenuDashboard from './siteheadermenu-dashboard';

export default function SiteHeaderMenu({ session, pathname, isDashboard }: { session: any; pathname: string; isDashboard: boolean }) {

  return (
	<nav className="main_menu navbar navbar-expand-lg">
		{isDashboard 
			? 
			<SiteHeaderMenuDashboard session={session} pathname={pathname} />
			:
			<SiteHeaderMenuMain session={session} pathname={pathname} />
		}
	</nav>
)}