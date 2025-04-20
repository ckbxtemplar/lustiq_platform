'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function RegistActivate() {
	const searchParams = useSearchParams();
	const uid = searchParams.get('aup');
	const callbackurl = searchParams.get('callbackurl') || null;
	const [status, setStatus] = useState<boolean | null>(null);
	
	useEffect(() => {
		if (!uid) return;

		const updateStatus = async () => {
			try {
				const response = await fetch('/api/auth/activate', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ id: uid, status: 1 })
				});

				const result = await response.json();
				setStatus(result.success);
			} catch (error) {
				console.error('Error updating status:', error);
				setStatus(false);
			}
		};

		updateStatus();
	}, [uid]);

	return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-12 align-self-center">
							<h1 className="register_heading text-center">{status === null
									? "Processing activation..."
									: status
									? "Successful activation"
									: "Activation failed"}
							</h1>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col col-auto align-self-center">

									<div className="iconbox_item contact_info_iconbox">
											<div className="item_icon ms-3">
												<i className={`fas ${status ? "fa-check" : "fa-times"}`}></i>
											</div>
											<div className="item_content">											
											{status ? (
												<>
														The profile has been successfully activated.<br />You can log in to the site.
												</>
												) : (
												<>
														Activation failed.<br />Please try again or contact support.
												</>
												)}
											</div>
									</div>

						</div>
					</div>
					<div className="row justify-content-center mt-4">
						<div className="col col-auto align-self-center">
						{status ? (
									<Link className="btn border_dark" href={ '/login'+( callbackurl ? "?callbackUrl="+callbackurl : "")}>
										<span>
											<small>Login</small>
											<small>Login</small>
										</span>
									</Link>		
								) : (					
									<Link className="btn border_dark" href={'/regist'}>
										<span>
											<small>Regist</small>
											<small>Regist</small>
										</span>
									</Link>		
								)}
						</div>					
					</div>											
				</div>
			</section>
		</main>
	);
}