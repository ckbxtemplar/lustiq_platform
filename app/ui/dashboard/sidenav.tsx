"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function SideNav() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
	const pathname = usePathname();
	const isDashboard = pathname.startsWith('/dashboard');

  if (!isDashboard) {
    return null;
  }

  return (
    <div className={`sidebar me-3 text-white d-flex flex-column sticky-top ${isCollapsed ? "collapsed" : ""}`}>

			<div className="custom-menu">
				<button className="custom-btn toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
					<i className="fas fa-bars"></i>
					<span className="sr-only">Toggle Menu</span>
				</button>
			</div>


			<ul className="nav flex-column mt-3">
				<li className="nav-item">
					<Link href="/dashboard" className="nav-link text-white">
						<i className="fas fa-chalkboard-teacher"></i>
						{!isCollapsed && <span className="ms-2">Dashboard</span>}
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/dashboard/profile" className="nav-link text-white">
						<i className="fas fa-chalkboard-teacher"></i>
						{!isCollapsed && <span className="ms-2">Profile</span>}
					</Link>
				</li>
				<li className="nav-item">
					<Link href="/dashboard/settings" className="nav-link text-white">
						<i className="fas fa-chalkboard-teacher"></i>
						{!isCollapsed && <span className="ms-2">Settings</span>}
					</Link>
				</li>
			</ul>
		</div>
  );
}