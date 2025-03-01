import { fetchCourses } from '@/app/lib/data';
import { Metadata } from 'next';
import Banner from '@/app/ui/dashboard/banner';
import GridList from '@/app/ui/courses/grid-list';
import NewsletterSection from '@/app/ui/newsletter-section';
import { Suspense } from 'react';
import { GridListSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Courses',
};

export default function Courses() {

  return (
		<main className="page_content">

		<Banner title={'Courses'} description={'Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.'} search={true}/>

		<section className="courses_archive_section section_space_md">
			<div className="container">

				<Suspense fallback={<GridListSkeleton />}>
					<GridList/>
				</Suspense>
			
				<div className="pagination_wrap d-none">
					<ul className="pagination_nav unordered_list">
						<li><a href="#!"><i className="fas fa-long-arrow-left"></i></a></li>
						<li className="active"><a href="#!">1</a></li>
						<li><a href="#!">2</a></li>
						<li><a href="#!">3</a></li>
						<li><a href="#!">...</a></li>
						<li><a href="#!">12</a></li>
						<li><a href="#!"><i className="fas fa-long-arrow-right"></i></a></li>
					</ul>
				</div>
			</div>
		</section>
		<NewsletterSection/>
	</main> 
  );
}