'use clien';

import { fetchCourses } from '@/app/lib/data';
import GridItem from '@/app/ui/courses/grid-item';

export default async function ArticlesList() {
  const courses = await fetchCourses();
  const countCourses = courses?.data?.length || 0;

  return (
    <>
			<div className="filter_topbar">
				<p className="filter_result"><span>{countCourses}</span> results</p>
				<ul className="filter_buttons_list unordered_list">
					<li className='d-none'>
						<button type="button" className="offCanvas_open_btn">
							<i className="fas fa-filter"></i>
							<span>Filter</span>
						</button>
					</li>
					<li>
						<div className="form_item m-0">
							<select name="sorting" defaultValue={"sorting"}>
								<option value="sorting">Sorting</option>
								<option value="newest">Newest</option>
								<option value="popularity">Popularity</option>
							</select>
						</div>
					</li>
				</ul>
			</div>
      <div className="row">
        {courses?.data && Array.isArray(courses.data) 
          ? courses.data.map((course: { documentId: string; slug: string }) => (
              <GridItem key={'item'+course.documentId} documentId={course.documentId} slug={course.slug} />
            ))
          : <div className='col-12'>Nincsenek elérhető tanfolyamok</div>
        }
      </div>
    </>
  );
}