"use client";

import { useState, useEffect, useRef } from 'react';
import GridItem from '@/app/ui/courses/grid-item';
import { useSearchParams } from 'next/navigation';

interface GridListProps {
  dashboard?: boolean;
  topbar?: boolean;
	searchQuery?: string;
}

export default function GridList({ dashboard = false, topbar = true, searchQuery = '' }: GridListProps) {
  const [courses, setCourses] = useState<any[]>([]);
	const [countCourses, setCountCourses] = useState(0);
  const [loading, setLoading] = useState(true);
  const prevSearchQuery = useRef<string | null>(null); // Tároljuk az előző keresési feltételt

	const searchParams = useSearchParams();
  const urlSearchQuery = searchParams.get('s') || '';

  useEffect(() => {
		const currentSearchQuery = searchQuery || urlSearchQuery;

    if (prevSearchQuery.current === currentSearchQuery) {
      return;
    }

    prevSearchQuery.current = currentSearchQuery;

    const loadCourses = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/courses?search=${encodeURIComponent(currentSearchQuery)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const result = await response.json();
        setCourses(result?.data || []);
        setCountCourses(result?.data.length || 0);
      } catch (error) {
        console.error('Error loading courses:', error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, [searchQuery, urlSearchQuery]);

  return (
    <>			
			{ topbar ? (
			<div className="filter_topbar">
				<p className="filter_result">
					<span>{countCourses}</span> result(s)
					{prevSearchQuery.current?.trim() && (
              <> a <strong>'{prevSearchQuery.current}'</strong> keresésre</>
          )}
				</p>
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
			{loading ? (
          <div className="col-12">Loading...</div>
        ) : courses.length > 0 ? (
          courses.map((course: { documentId: string; slug: string }) => (
            <GridItem
              key={'item' + course.documentId}
              documentId={course.documentId}
              slug={course.slug}
              dashboard={dashboard}
              progress={Math.floor(Math.random() * (80 - 20 + 1)) + 20}
              data={course}
            />
          ))
        ) : (
          <div className="col-12">Nincsenek elérhető tanfolyamok</div>
        )}
      </div>
    </>
  );
}