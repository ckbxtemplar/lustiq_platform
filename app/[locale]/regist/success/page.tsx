'use client';

import { useSearchParams } from 'next/navigation';

export default function RegistSuccess() {
	const searchParams = useSearchParams();
  const email = searchParams.get('email');

	return (
		<main className="page_content">
			<section className="register_section section_space_lg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col col-12 align-self-center">
							<h1 className="register_heading text-center">Successful registration</h1>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col col-auto align-self-center">

									<div className="iconbox_item contact_info_iconbox">
											<div className="item_icon ms-3">
												<i className="fas fa-envelope"></i>
											</div>
											<div className="item_content">											
													To activate this new account,<br/>we sent a mail to the specified e-mail address.
													<br/><strong>{email}</strong>
											</div>
									</div>

						</div>
					</div>
					<div className="row justify-content-center mt-5">
						<div className="col col-12 align-self-center">

							<p className="text-center">
								If the email does not arrive within 5 minutes and is not in the spam folder,<br/>please contact us (hello@lustiq.eu).
							</p>							

						</div>
					</div>
				</div>
			</section>
		</main>
	);
}