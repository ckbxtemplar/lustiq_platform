import Image from 'next/image';

export default function NotFound() {
  return (
		<main className="page_content">
			<section className="error_section text-center decoration_wrap">
				<div className="container decoration_wrap">
					<div className="error_image">
						<Image src="/assets/images/error_image.png" width={1678} height={1224} alt="Collab – Online Learning Platform"/>
					</div>
					<h1 className="error_title">Page Not Found</h1>
					<p className="error_description">
						Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel. Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus turpis in eu mi bibendum neque egestas
					</p>
					<div className="form_item justify-content-center m-0">
						<input type="search" name="search" placeholder="What do you want to learn ?"/>
						<button type="submit" className="btn btn_dark">
							<span>
								<small>Search</small>
								<small>Search</small>
							</span>
						</button>
					</div>

					<div className="deco_item shape_img_1 wow fadeInUp" data-wow-delay=".2s">
						<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
					</div>
					<div className="deco_item shape_img_2 wow fadeInUp" data-wow-delay=".4s">
						<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
					</div>
				</div>

				<div className="deco_item shape_img_3 wow fadeInLeft" data-wow-delay=".2s">
					<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
				</div>
				<div className="deco_item shape_img_4 wow fadeInRight" data-wow-delay=".4s">
					<Image src="/assets/images/shape/shape_img_7.png" width={998} height={900} alt="Collab – Online Learning Platform"/>
				</div>
			</section>
		</main>
  );
}