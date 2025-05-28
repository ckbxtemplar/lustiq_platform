import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function IntroVideo() {

	const t = useTranslations('pages.home.introVideo');

  return (
<section className="intro_video_section section_space_lg overflow-hidden decoration_wrap">
	<div className="container position-relative">
		<div className="section_heading text-center">
			<h2 className="heading_text mb-0">				
				{t('title')}
			</h2>
		</div>
		<div className="intro_video">
			<div className="video_wrap tilt">
				<Image src="/assets/images/video/video_poster_1.jpg" width={2338} height={880} alt="Collab – Online Learning Platform"/>
				<Link className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=zYV8T8Vn9TM">
					<span className="icon"><i className="fas fa-play"></i></span>
				</Link>
			</div>
		</div>
		<div className="row">
			<div className="col col-lg-4 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-1"></i>
						</div>
						<h3 className="item_title mb-0">
							{t('g1title')}
						</h3>
					</div>
					<p className="mb-0">
						{t('g1sub')}
					</p>
				</div>
			</div>
			<div className="col col-lg-4 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-2"></i>
						</div>
						<h3 className="item_title mb-0">
							{t('g2title')}
						</h3>
					</div>
					<p className="mb-0">
					{t('g2sub')}
					</p>
				</div>
			</div>
			<div className="col col-lg-4 col-md-6 col-sm-6">
				<div className="iconbox_item">
					<div className="title_wrap">
						<div className="item_icon">
							<i className="fas fa-signal-3"></i>
						</div>
						<h3 className="item_title mb-0">
							{t('g3title')}
						</h3>
					</div>
					<p className="mb-0">
					{t('g3sub')}
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