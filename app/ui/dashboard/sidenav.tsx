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
    <div className={`sidebar me-5 d-flex flex-column sticky-top ${isCollapsed ? "collapsed" : ""}`}>

			<div className="followTop">
				<div className="custom-menu">
					<button className="custom-btn toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
						<i className="fas fa-bars text-black"></i>
						<span className="sr-only">Toggle Menu</span>
					</button>
				</div>

				<ul className="nav flex-column mt-5">
					<li className="nav-item">
						<Link href="/dashboard" className="nav-link text-black fw-normal">
							<span className="icon-container me-2 text-center">
								<i className="fas fa-home fa-2x"></i>
							</span>
							{!isCollapsed && <span className="ms-2">Home</span>}
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/dashboard/courses" className="nav-link text-black fw-normal">
							<span className="icon-container me-2 text-center">
								<i className="far fa-heart fa-2x"></i>
							</span>
							{!isCollapsed && <span className="ms-2">Courses</span>}
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/dashboard/profile" className="nav-link text-black fw-normal">
							<span className="icon-container me-2 text-center">
								<i className="fas fa-user fa-2x"></i>
							</span>
							{!isCollapsed && <span className="ms-2">Profile</span>}
						</Link>
					</li>
				</ul>
			</div>				
		</div>
  );
}