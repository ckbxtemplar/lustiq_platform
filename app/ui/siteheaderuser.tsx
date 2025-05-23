import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { userSignOut } from "@/app/lib/user-actions";
import { useSession } from "next-auth/react";

export default function SiteHeaderUser() {
	const { data: session, status } = useSession();
  const router = useRouter();	
  
	const handleSignOut = async () => {
    const success = await userSignOut();
    if (success) window.location.href = '/';
  };

  return (
		<ul className="header_btns_group unordered_list_end">
			<li>
				<button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
					<i className="far fa-bars"></i>
				</button>
			</li>				
			{session?.user? (
				<li>
					<ul className="main_menu_list user_menu unordered_list_end">
						<li className="dropdown">
							<Link className="nav-link" href="#" id="pages_usermenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								<button>
								{session?.user?.image ? (
									<Image
										src={`/customers/avatars/${session.user.image}`}
										alt="User Avatar"
										width={40}
										height={40}
										className="rounded-circle  me-2"
									/>
								) : (
									<i className="fas fa-user-circle fa-2x me-2"></i>
								)}
								</button>
							</Link>
							<ul className="dropdown-menu" aria-labelledby="pages_usermenu">
								<li>
									<Link href="/dashboard">
										<span className="icon-container me-2 text-center"><i className="fas fa-chalkboard-teacher me-2"></i></span>Dashboard
									</Link>
								</li>
								<li>
									<button onClick={handleSignOut} className="dropdown-item">
										<span className="icon-container me-2 text-center"><i className="fas fa-sign-out-alt me-2"></i></span>Sign Out
                	</button>
								</li>
							</ul>
						</li>
					</ul>
				</li>		
      ) : (
				<>
				<li>
					<Link className="btn border_dark" href="/login">
						<span>
							<small>Login</small>
							<small>Login</small>
						</span>
					</Link>
				</li>
				<li>
					<Link className="btn btn_dark" href="/regist">
						<span>
							<small>Sign Up</small>
							<small>Sign Up</small>
						</span>
					</Link>
				</li>
				</>
      )}		
		</ul>
)}