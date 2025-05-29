'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';


export default function CoursesFooterList() {

	const [titles, setTitles] = useState<{ slug: string; title: string }[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadTitles = async () => {
			try {
				const response = await fetch(`/api/courses/titles`);
				if (!response.ok) {
					throw new Error('Failed to fetch titles');
				}
				const result = await response.json();
				setTitles(result || []);
			} catch (error) {
				console.error('Error loading titles:', error);
				setTitles([]);
			} finally {
				setLoading(false);
			}
		};

		loadTitles();
	}, []);	

  return (
		<ul className="page_list unordered_list_block">
      {titles.length > 0 ? (
        titles.map((data, index) => (
          <li key={index}>
						<Link key={index} href={`/course/${encodeURIComponent(data.slug)}`}>
							<span className="item_icon"><i className="fas fa-caret-right"></i></span>
            	<span className="item_text">{data.title}</span>
          	</Link>
					</li>
        ))
      ) : (
        <li>No courses found.</li>
      )}												
		</ul>
		)}