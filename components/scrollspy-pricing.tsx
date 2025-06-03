'use client';

import React, { useEffect, useRef, useState } from 'react';
import '@/app/ui/assets/css/scrollspy.css';
// import { ScrollSpy } from 'bootstrap';

export default function ScrollspyPricing() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
		
    }
  }, []);	
  
  return (
		<nav id="navbar-scrollspy" className="navbar navbar-light flex-column align-items-stretch p-3 py-0 fixed-top">
			<nav className="nav nav-pills flex-column">
				<a className="nav-link px-2 py-1 mb-1 active" href="#section_banner"><i className="fas fa-check-circle"></i> Kezdjük</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_whatsabout"><i className="fas fa-check-circle"></i> Miről szól</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_whyandhow"><i className="fas fa-check-circle"></i> Probléma + Megoldás</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_whatyouget"><i className="fas fa-check-circle"></i> Mit kapsz?</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_trusted"><i className="fas fa-check-circle"></i> Bízhatsz bennünk?</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_pricing"><i className="fas fa-check-circle"></i> Csomagok</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_szexplicit"><i className="fas fa-check-circle"></i> Megjelenéseink</a>
				<a className="nav-link px-2 py-1 mb-1" href="#section_faq"><i className="fas fa-check-circle"></i> Kérdés-válasz</a>
			</nav>
			
		</nav>
  );
};
