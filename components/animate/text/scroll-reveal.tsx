'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@/app/ui/assets/css/scrollReveal.css';

interface ScrollRevealWordsProps {
  children: React.ReactNode;
}

interface Position {
  start: number;
  end: number;
}

export const ScrollRevealWords: React.FC<ScrollRevealWordsProps> = ({ children }) => {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const spanRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
	const [scrollPos, setScrollPos] = useState(0);

	const headerHeight = 80;
	const offPatient = 1;

  useEffect(() => {
    const spans = spanRefs.current;
    if (!spans[0] || !spans[spans.length - 1]) return;

    const viewportHeight = window.innerHeight;

    const firstTop = (spans[0].getBoundingClientRect().top-headerHeight) + window.scrollY;
    const lastBottom = (spans[spans.length - 1].getBoundingClientRect().top + spans[spans.length - 1].getBoundingClientRect().height - headerHeight) + window.scrollY;
		
		console.log('top: '+spans[spans.length - 1].getBoundingClientRect().top);
		console.log('height: '+spans[spans.length - 1].getBoundingClientRect().height);

    const firstRelative = (firstTop / viewportHeight);
    const lastRelative = (lastBottom / viewportHeight) ;

    let range = 0;
		let startRelative = 0;

		if (firstRelative < offPatient){ /* oldal elején van  */			
			range = lastRelative;
			startRelative = 0
		} 
		// else if (lastRelative > viewportHeight - offPatient){ /* oldal végén van  */
		// 	range = viewportHeight - firstTop;
		// }
		else { /* oldal belsejében kényelmesen */
			range = offPatient;
			startRelative = firstRelative;
		}


		console.log('range: '+range);

    const step = words.length > 1 ? range / (words.length - 1) : 0;
    let rawPositions = words.map((_, i) => startRelative + step * i);

    // if (firstRelative < offPatient) {
    //   const offset = firstRelative;
    //   rawPositions = rawPositions.map(p => p - offset);
    // }


    const positionObjects: Position[] = rawPositions.map((start, i) => ({
      start,
      end: start + 2*step // vagy bármekkora időablak, amit szeretnél
    }));

    setPositions(positionObjects);
  }, [text]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPosition = scrollY / window.innerHeight;

      setScrollPos(scrollPosition);
    };

    handleScroll(); // kezdeti állapot
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => {
						spanRefs.current[i] = el;
					}}
					className={
						'scroll-word ' +
						(positions[i] &&
							(
								((scrollPos > offPatient ? scrollPos + offPatient : scrollPos) >= positions[i].start) &&
								((scrollPos > offPatient ? scrollPos + offPatient : scrollPos) <= positions[i].end)
							)
								? 'visible'
								: ''
						)
					}
        >
          {word+' '}
        </span>
      ))}
    </>
  );
};
