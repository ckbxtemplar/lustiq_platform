import SiteHeaderMenuMain from './siteheadermenu-main';
import SiteHeaderMenuDashboard from './siteheadermenu-dashboard';

export default function SiteHeaderMenu({ pathname, isDashboard }: { pathname: string; isDashboard: boolean }) {

  return (
	<nav className="main_menu navbar navbar-expand-lg">
		{isDashboard 
			? 
			<SiteHeaderMenuDashboard pathname={pathname} />
			:
			<SiteHeaderMenuMain pathname={pathname} />
		}
	</nav>
)}