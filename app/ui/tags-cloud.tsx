'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function TagsCloud() {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTags = async () => {
      try {
        const response = await fetch(`/api/courses/tags`);
        if (!response.ok) {
          throw new Error('Failed to fetch tags');
        }
        const result = await response.json();
        setTags(result || []);
      } catch (error) {
        console.error('Error loading tags:', error);
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    loadTags();
  }, []);

  if (loading) {
    return <p>Loading tags...</p>;
  }

  return (
    <ul className="tags_list unordered_list">
      {tags.length > 0 ? (
        tags.map((tag, index) => (
          <li key={index}>
						<Link key={index} href={`/courses?s=${encodeURIComponent(tag)}`}>
            	{tag}
          	</Link>
					</li>
        ))
      ) : (
        <li>No tags found.</li>
      )}
    </ul>
  );
}
