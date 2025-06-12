import Link from 'next/link';
import Image from 'next/image';
import { userSignOut } from "@/app/lib/user-actions";
import { useSession } from "next-auth/react";
import {useTranslations} from 'next-intl';
import { useModal } from '@/app/lib/DiaryModalProvider';
import { useEffect, useRef } from 'react';

export default function SiteHeaderUser() {
	const { data: session, status } = useSession();
	const dropdownRef = useRef(null);

	useEffect(() => {
		if (session?.user && dropdownRef.current) {
			import('bootstrap').then(({ Dropdown }) => {
				new Dropdown(dropdownRef.current);
			});
		}
	}, [session?.user]); 
  
	const handleSignOut = async () => {
    const success = await userSignOut();
    if (success) window.location.href = '/';
  };

	const { openModal } = useModal();

	const t = useTranslations('pages.home.header');	

  return (
		<ul className="unordered_list_center">		
			{session?.user? (
				<li>
					<ul className="main_menu_list user_menu unordered_list_end p-1 p-lg-2">
						<li className="dropdown">
							<Link 
								ref={dropdownRef}
								className="nav-link" 
								href="#" 
								id="usermenu" 
								role="button" 
								data-bs-toggle="dropdown" 
								aria-expanded="false">
								<button>
								{session?.user?.image ? (
									<Image
										src={`/customers/avatars/${session.user.image}`}
										alt="User Avatar"
										width={40}
										height={40}
										className="rounded-circle me-0 me-lg-2"
									/>
								) : (
									<i className="fas fa-user-circle fa-2x me-2 text-red"></i>
								)}
								</button>
							</Link>
							<ul className="dropdown-menu" aria-labelledby="usermenu">
								<li>
									<Link href="/dashboard">
										<span className="icon-container me-2 text-center"><i className="fas fa-chalkboard-teacher me-2"></i></span>
										{t('dashboard')}
									</Link>
								</li>
								<li>
									<Link href="#" onClick={openModal}>
										<span className="icon-container me-2 text-center"><i className="fas fa-pencil-alt me-2"></i></span>
										{t('diary')}
									</Link>
								</li>								
								<li>
									<button onClick={handleSignOut} className="dropdown-item">
										<span className="icon-container me-2 text-center"><i className="fas fa-sign-out-alt me-2"></i></span>
										{t('signout')}
									</button>
								</li>
							</ul>
						</li>
					</ul>
				</li>		
      ) : (
				<>
				<li>
					<Link className="btn border_red btn_small" href="/login">
						<span>
							<small>{t('login')}</small>
							<small>{t('login')}</small>
						</span>
					</Link>
				</li>
				<li>
					<Link className="btn btn_red btn_small ms-1" href="/regist">
						<span>
							<small>{t('signup')}</small>
							<small>{t('signup')}</small>
						</span>
					</Link>
				</li>
				</>
      )}		
		</ul>
)}