import Link from 'next/link';
import Image from 'next/image';
import { PowerIcon } from '@heroicons/react/24/outline';
import { userSignOut } from "@/app/lib/user-actions";

export default function SiteHeaderUser({ session }: { session: any }) {

  return (
		<div className="col col-lg-3 col-5">
		{session?.user ? (
			<ul className="header_btns_group unordered_list_end">
			<li>
				<button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
					<i className="far fa-bars"></i>
				</button>
			</li>
			<li>
				<form action={userSignOut}>
					<button className="h-full">
						<PowerIcon className="size-4" />            
					</button>
				</form>
			</li>		
		</ul>
      ) : (
			<ul className="header_btns_group unordered_list_end">
				<li>
					<button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
						<i className="far fa-bars"></i>
					</button>
				</li>
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
			</ul>
      )}		
	</div>
)}