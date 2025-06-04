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
		<div className="container-fluid p-0 d-none d-lg-block">
			<div className="row m-0 align-items-center">
				<div className="col-12 p-0">
				
					<nav id="navbar-scrollspy" className="navbar navbar-light">
						<nav className="nav nav-pills">
							<a className="nav-link active" href="#section_banner"><i className="fas fa-check-circle"></i> Kezdjük</a>
							<a className="nav-link" href="#section_whatsabout"><i className="fas fa-check-circle"></i> Miről szól</a>
							<a className="nav-link" href="#section_whyandhow"><i className="fas fa-check-circle"></i> Probléma + Megoldás</a>
							<a className="nav-link" href="#section_whatyouget"><i className="fas fa-check-circle"></i> Mit kapsz?</a>
							<a className="nav-link" href="#section_trusted"><i className="fas fa-check-circle"></i> Bízhatsz bennünk?</a>
							<a className="nav-link" href="#section_pricing"><i className="fas fa-check-circle"></i> Csomagok</a>
							<a className="nav-link" href="#section_szexplicit"><i className="fas fa-check-circle"></i> Megjelenéseink</a>
							<a className="nav-link" href="#section_faq"><i className="fas fa-check-circle"></i> Kérdés-válasz</a>
						</nav>			
					</nav>

				</div>
			</div>
		</div>
  );
};
