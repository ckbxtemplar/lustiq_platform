import Link from 'next/link';
import Image from 'next/image';

export default function Process() {
  return (
		<section className="process_section section_space_lg pb-0">
		<div className="container">
			<div className="section_heading text-center">
				<div className="row justify-content-center">
					<div className="col col-lg-9">
						<h2 className="heading_text mb-0">
							The Collab Team with High Technical Skills Help You Learn a New Profession
						</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col col-lg-3 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">01</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
								Theoretical Knowledge
							</h3>
						</div>
						<p className="mb-0">
							Etiam sit amet nisl purus in mollis nunc sed. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat
						</p>
					</div>
				</div>
				<div className="col col-lg-3 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">02</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
								Practical Skills
							</h3>
						</div>
						<p className="mb-0">
							Sed blandit libero volutpat sed cras ornare. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque
						</p>
					</div>
				</div>
				<div className="col col-lg-3 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">03</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
								Work with a Mentor
							</h3>
						</div>
						<p className="mb-0">
							Tellus id interdum velit laoreet id donec. Id interdum velit laoreet id donec ultrices tincidunt arcu
						</p>
					</div>
				</div>
				<div className="col col-lg-3 col-md-6 col-sm-6">
					<div className="iconbox_item">
						<div className="serial_number">04</div>
						<hr/>
						<div className="title_wrap">
							<h3 className="item_title mb-0">
								Final Test or Project
							</h3>
						</div>
						<p className="mb-0">
							Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Magna fringilla urna porttitor
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	)
}