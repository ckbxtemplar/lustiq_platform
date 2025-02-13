import Link from 'next/link';
import Image from 'next/image';

export default function IntroVideo() {
  return (
<section className="intro_video_section section_space_lg bg_light_2 overflow-hidden decoration_wrap">
	<div className="container position-relative">
		<div className="section_heading text-center">
			<h2 className="heading_text mb-0">
				Our Сourses are Suitable for…
			</h2>
		</div>
		<div className="intro_video">
			<div className="video_wrap tilt">
				<Image src="/assets/images/video/video_poster_1.jpg" width={2338} height={880} alt="Collab – Online Learning Platform"/>
				<Link className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=7e90gBu4pas">
					<span className="icon"><i className="fas fa-play"></i></span>
				</Link>
			</div>
		</div>
		<div className="row">
			<div className="col col-lg-3 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-1"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">For Beginners</span>
							Students
						</h3>
					</div>
					<p className="mb-0">
						Adipiscing bibendum est ultricies integer. Magnis dis parturient montes nascetur ridiculus mus mauris
					</p>
				</div>
			</div>
			<div className="col col-lg-3 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-2"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Beginners</span>
							IT Specialists
						</h3>
					</div>
					<p className="mb-0">
						Facilisi nullam vehicula ipsum a arcu cursus vitae. Interdum velit laoreet id donec ultrices tincidunt arcu
					</p>
				</div>
			</div>
			<div className="col col-lg-3 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-3"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Current</span>
							IT Specialists
						</h3>
					</div>
					<p className="mb-0">
						Lectus magna fringilla urna porttitor rhoncus dolor purus non. Orci dapibus ultrices in iaculis
					</p>
				</div>
			</div>
			<div className="col col-lg-3 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-4"></i>
						</div>
						<h3 className="item_title mb-0">
							<span className="d-block">Corporate</span>
							Customers
						</h3>
					</div>
					<p className="mb-0">
						Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Imperdiet proin fermentum leo vel orc
					</p>
				</div>
			</div>
		</div>

		<div className="deco_item shape_img_1" data-parallax='{"y" : 130, "smoothness": 6}'>
			<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
		</div>
		<div className="deco_item shape_img_2" data-parallax='{"y" : -130, "smoothness": 6}'>
			<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
		</div>
	</div>
	<div className="deco_item shape_img_3" data-parallax='{"y" : -130, "smoothness": 6}'>
		<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
	</div>
</section>
)}