import Image from 'next/image';

interface GridItemProps {  
  documentId: string;
	slug: string;
}

export default function GridItem({documentId, slug }: GridItemProps) {

	return (
		<div className="col col-lg-4">
			<div className="course_card">
				<div className="item_image">
					<a href={'/course/'+slug} data-cursor-text="View">
						<Image src="/assets/images/course/course_image_7.jpg" layout="responsive" width={9} height={5} alt="Collab – Online Learning Platform"/>
					</a>
				</div>
				<div className="item_content">
					<div className="d-flex align-items-center justify-content-between mb-3">
						<ul className="item_category_list unordered_list">
							<li><a href="#!">marketing</a></li>
						</ul>
						<div className="item_price">
							<span className="sale_price">$19.99</span>
							<del className="remove_price">$29.99</del>
						</div>
					</div>
					<ul className="meta_info_list unordered_list">
						<li>
							<i className="fas fa-chart-bar me-1"></i>
							<span>Beginner</span>
						</li>
						<li>
							<i className="fas fa-clock me-1"></i>
							<span>120 Hours</span>
						</li>
						<li>
							<i className="fas fa-star me-1"></i>
							<span>3.5 (3k reviews)</span>
						</li>
					</ul>
					<h3 className="item_title">
						<a href={'/course/'+slug}>
							Marketing Channel Strategy & B2B2C Routes to Market
						</a>
					</h3>
					<a className="btn_unfill" href={'/course/'+slug}>
						<span className="btn_text">View Course</span>
						<span className="btn_icon">
							<i className="fas fa-long-arrow-right"></i>
							<i className="fas fa-long-arrow-right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
)}