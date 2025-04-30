import Image from 'next/image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { tagsToHTML } from "@/app/utils/courseDataUtils";
import {useTranslations} from 'next-intl';

interface GridItemProps {  
  documentId: string;
	slug: string;
	dashboard: boolean;
	progress?: number;
	data?: object;
}

export default function GridItem({documentId, slug, dashboard, progress = 0, data }: GridItemProps) {
	
	const t = useTranslations('grid');
	
	return (
		<div className="col col-lg-4">
			<div className="course_card">
				<div className="item_image">
					<a href={(dashboard?'/dashboard/course/':'/course/')+slug} data-cursor-text="View">
						
						<Image
							src={(data as any).cover?.url ? `http://localhost:1337${(data as any).cover.url}` : "/assets/images/course/course_image_7.jpg"}
							width={622}
							height={520}
							alt="Collab – Online Learning Platform"
						/>
						
					</a>
				</div>
				<div className="item_content">
					<div className="d-flex align-items-center justify-content-between mb-3">

						<div dangerouslySetInnerHTML={{ __html: tagsToHTML((data as any).Details.tags) }} />

						{ dashboard ? 
						<div className="item_progress">
							<ProgressBar striped variant="danger" now={progress} />
						</div>
						:
						<div className="item_price text-end text-nowrap">
							<small>{t('subscribe')} <a href="/pricing" className="text-yellow"><i className="fas fa-question"></i></a></small>
						</div>
						}						
					</div>
					<ul className="meta_info_list unordered_list">
						<li className='d-none'>
							<i className="fas fa-chart-bar me-1"></i>
							<span>{(data as any).Details.level || "Beginner"}</span>
						</li>
						<li>
							<i className="fas fa-clock me-1"></i>
							<span>{(data as any).Details.duration || "4"} {t('hours')}</span>
						</li>
						<li className='d-none'>
							<i className="fas fa-star me-1"></i>
							<span>3.5 (3k reviews)</span>
						</li>
					</ul>
					<h3 className="item_title">
						<a href={(dashboard?'/dashboard/course/':'/course/')+slug}>
							{(data as any).title || "Untitled Course"}
						</a>
					</h3>
					{ (data as any).card_description ? <p className='item_description'>{(data as any).card_description}</p> : ""}
					<a className="btn_unfill" href={(dashboard?'/dashboard/course/':'/course/')+slug}>
						<span className="btn_text">{dashboard ? t('startCourse') : t('viewCourse')}</span>
						<span className="btn_icon">
							<i className="fas fa-long-arrow-right"></i>
							<i className="fas fa-long-arrow-right"></i>
						</span>
					</a>
				</div>
			</div>
		</div>
)}