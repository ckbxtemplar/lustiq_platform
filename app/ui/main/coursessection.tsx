import Link from 'next/link';
import Image from 'next/image';

export default function CoursesSection() {
  return (
<section className="courses_section section_space_lg">
<div className="container">
	<div className="section_heading">
		<div className="row align-items-center">
			<div className="col col-md-6">
				<h2 className="heading_text mb-0">
					Our Courses
				</h2>
			</div>
			<div className="col col-md-6 d-none d-lg-flex justify-content-end">
				<div className="btn_wrap p-0">
					<a className="btn border_dark" href="course.html">
						<span>
							<small>Explore Courses</small>
							<small>Explore Courses</small>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div className="row">
		<div className="col col-lg-4">
			<div className="course_card style_2">
				<div className="item_image">
					<a href="course_details.html" data-cursor-text="View">
						<Image src="/assets/images/course/course_image_4.jpg" width={738} height={394} alt="Collab – Online Learning Platform"/>
					</a>
				</div>
				<div className="item_content">
					<div className="d-flex align-items-center justify-content-between mb-3">
						<ul className="item_category_list unordered_list">
							<li><a href="#!">Programming</a></li>
						</ul>
						<div className="item_price">
							<span className="sale_price">$29.99</span>
							<del className="remove_price">$39.99</del>
						</div>
					</div>
					<ul className="meta_info_list unordered_list">
						<li>
							<i className="fas fa-chart-bar"></i>
							<span>Beginner</span>
						</li>
						<li>
							<i className="fas fa-clock"></i>
							<span>120 Hours</span>
						</li>
						<li>
							<i className="fas fa-star"></i>
							<span>3.5 (3k reviews)</span>
						</li>
					</ul>
					<h3 className="item_title">
						<a href="course_details.html">
							Introduction to Computer Science and Programming
						</a>
					</h3>
					<a className="btn_unfill" href="course_details.html">
						<span className="btn_text">View Course</span>
						<span className="btn_icon">
							<i className="fas fa-long-arrow-right"></i>
							<i className="fas fa-long-arrow-right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>

		<div className="col col-lg-4">
			<div className="course_card style_2">
				<div className="item_image">
					<a href="course_details.html" data-cursor-text="View">
						<Image src="/assets/images/course/course_image_5.jpg" width={720} height={400} alt="Collab – Online Learning Platform"/>
					</a>
				</div>
				<div className="item_content">
					<div className="d-flex align-items-center justify-content-between mb-3">
						<ul className="item_category_list unordered_list">
							<li><a href="#!">Marketing</a></li>
						</ul>
						<div className="item_price">
							<span className="sale_price">$9.99</span>
						</div>
					</div>
					<ul className="meta_info_list unordered_list">
						<li>
							<i className="fas fa-chart-bar"></i>
							<span>Beginner</span>
						</li>
						<li>
							<i className="fas fa-clock"></i>
							<span>120 Hours</span>
						</li>
						<li>
							<i className="fas fa-star"></i>
							<span>3.5 (3k reviews)</span>
						</li>
					</ul>
					<h3 className="item_title">
						<a href="course_details.html">
							Marketing Channel Strategy & B2B2C Routes to Market
						</a>
					</h3>
					<a className="btn_unfill" href="course_details.html">
						<span className="btn_text">View Course</span>
						<span className="btn_icon">
							<i className="fas fa-long-arrow-right"></i>
							<i className="fas fa-long-arrow-right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>

		<div className="col col-lg-4">
			<div className="course_card style_2">
				<div className="item_image">
					<a href="course_details.html" data-cursor-text="View">
						<Image src="/assets/images/course/course_image_6.jpg" width={738} height={394} alt="Collab – Online Learning Platform"/>
					</a>
				</div>
				<div className="item_content">
					<div className="d-flex align-items-center justify-content-between mb-3">
						<ul className="item_category_list unordered_list">
							<li><a href="#!">Computer Science</a></li>
						</ul>
						<div className="item_price">
							<span className="sale_price">FREE</span>
						</div>
					</div>
					<ul className="meta_info_list unordered_list">
						<li>
							<i className="fas fa-chart-bar"></i>
							<span>Beginner</span>
						</li>
						<li>
							<i className="fas fa-clock"></i>
							<span>120 Hours</span>
						</li>
						<li>
							<i className="fas fa-star"></i>
							<span>3.5 (3k reviews)</span>
						</li>
					</ul>
					<h3 className="item_title">
						<a href="course_details.html">
							Data Science Foundations: Data Structures and Algorithms
						</a>
					</h3>
					<a className="btn_unfill" href="course_details.html">
						<span className="btn_text">View Course</span>
						<span className="btn_icon">
							<i className="fas fa-long-arrow-right"></i>
							<i className="fas fa-long-arrow-right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div className="btn_wrap d-block d-lg-none pb-0 text-center">
		<a className="btn border_dark" href="course.html">
			<span>
				<small>Explore Courses</small>
				<small>Explore Courses</small>
			</span>
		</a>
	</div>
</div>
</section>
)}