'use clien';

import { fetchCourses } from '@/app/lib/data';
import GridItem from '@/app/ui/courses/grid-item';

interface GridListProps {
  dashboard?: boolean;
  topbar?: boolean;
}

export default async function GridList({ dashboard = false, topbar = true }: GridListProps) {
  const courses = await fetchCourses();
  const countCourses = courses?.data?.length || 0;

  return (
    <>
			{ topbar ? (
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
			) : (
				<div className="section_heading">
					<div className="row align-items-center">
						<div className="col col-md-6">
							<h2 className="heading_text mb-0">
								Our Courses
							</h2>
						</div>
						<div className="col col-md-6 d-none d-lg-flex justify-content-end">
							<div className="btn_wrap p-0">
								<a className="btn border_dark" href="/courses">
									<span>
										<small>Explore Courses</small>
										<small>Explore Courses</small>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			)
			}
      <div className="row">
        {courses?.data && Array.isArray(courses.data) 
          ? courses.data.map((course: { documentId: string; slug: string }) => (
              <GridItem key={'item'+course.documentId} documentId={course.documentId} slug={course.slug} dashboard={dashboard} progress={Math.floor(Math.random() * (80 - 20 + 1)) + 20} data={course} />
            ))
          : <div className='col-12'>Nincsenek elérhető tanfolyamok</div>
        }
      </div>
    </>
  );
}