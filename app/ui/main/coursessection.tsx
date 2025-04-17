import GridList from '@/app/ui/courses/grid-list';
import { Suspense } from 'react';
import { GridListSkeleton } from '@/app/ui/skeletons';

export default function CoursesSection() {
  return (
<section className="courses_section section_space_lg">
	<div className="container">

		<Suspense fallback={<GridListSkeleton />}>
			<GridList dashboard={false} topbar={false}/>
		</Suspense>

	</div>
</section>
)}