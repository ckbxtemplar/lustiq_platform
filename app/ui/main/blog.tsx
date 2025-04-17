import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  return (
		<section className="blog_section section_space_lg">
		<div className="container">
			<div className="section_heading">
				<div className="row align-items-center">
					<div className="col col-lg-5">
						<h2 className="heading_text mb-0">
							Blog Post Articles on Topical Issues
						</h2>
					</div>
					<div className="col col-lg-7 d-none d-lg-flex justify-content-end">
						<div className="btn_wrap p-0">
							<Link className="btn border_dark" href="blog.html">
								<span>
									<small>All Articles</small>
									<small>All Articles</small>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col col-lg-4">
					<div className="blog_item">
						<ul className="item_category_list unordered_list">
							<li><Link href="#!">Photography</Link></li>
						</ul>
						<div className="item_image">
							<Link href="blog_details.html" data-cursor-text="View">
								<Image src="/assets/images/blog/blog_img_1.png" width={740} height={460} alt="Collab – Online Learning Platform"/>
							</Link>
						</div>
						<div className="item_content">
							<h3 className="item_title">
								<Link href="blog_details.html">
									The Top Technical Skills All Employees Need in 2023
								</Link>
							</h3>
							<Link className="btn_unfill" href="blog_details.html">
								<span className="btn_text">Read Articles</span>
								<span className="btn_icon">
									<i className="fas fa-long-arrow-right"></i>
									<i className="fas fa-long-arrow-right"></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col col-lg-4">
					<div className="blog_item">
						<ul className="item_category_list unordered_list">
							<li><Link href="#!">Photography</Link></li>
						</ul>
						<div className="item_image">
							<Link href="blog_details.html" data-cursor-text="View">
								<Image src="/assets/images/blog/blog_img_2.png" width={740} height={460} alt="Collab – Online Learning Platform"/>
							</Link>
						</div>
						<div className="item_content">
							<h3 className="item_title">
								<Link href="blog_details.html">
									The Best Graphic Design Careers  — for Beginners and Professionals
								</Link>
							</h3>
							<Link className="btn_unfill" href="blog_details.html">
								<span className="btn_text">Read Articles</span>
								<span className="btn_icon">
									<i className="fas fa-long-arrow-right"></i>
									<i className="fas fa-long-arrow-right"></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
				<div className="col col-lg-4">
					<div className="blog_item">
						<ul className="item_category_list unordered_list">
							<li><Link href="#!">Photography</Link></li>
						</ul>
						<div className="item_image">
							<Link href="blog_details.html" data-cursor-text="View">
								<Image src="/assets/images/blog/blog_img_3.png" width={740} height={460} alt="Collab – Online Learning Platform"/>
							</Link>
						</div>
						<div className="item_content">
							<h3 className="item_title">
								<Link href="blog_details.html">
									Ubuntu vs. Windows: Which OS Should You Use in 2023?
								</Link>
							</h3>
							<Link className="btn_unfill" href="blog_details.html">
								<span className="btn_text">Read Articles</span>
								<span className="btn_icon">
									<i className="fas fa-long-arrow-right"></i>
									<i className="fas fa-long-arrow-right"></i>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="btn_wrap d-block d-lg-none pb-0 text-center">
				<Link className="btn border_dark" href="blog.html">
					<span>
						<small>All Articles</small>
						<small>All Articles</small>
					</span>
				</Link>
			</div>
		</div>
	</section>	
	)
}