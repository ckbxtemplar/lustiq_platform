'use client';

import React from 'react';
import Script from 'next/script';

const ScriptLoader: React.FC = () => {

  return (
		<>
      <Script src="/assets/js/jquery.min.js"/>
      <Script src="/assets/js/popper.min.js"/>
      <Script src="/assets/js/bootstrap.min.js"/>
      <Script src="/assets/js/bootstrap-dropdown-ml-hack.js"/>
      <Script src="/assets/js/cursor.js"/>
      <Script src="/assets/js/wow.min.js"/>
      <Script src="/assets/js/tilt.min.js"/>
      <Script src="/assets/js/parallax.min.js"/>
      <Script src="/assets/js/parallax-scroll.js"/>
      <Script src="/assets/js/slick.min.js"/>
      <Script src="/assets/js/magnific-popup.min.js"/>
      <Script src="/assets/js/waypoint.js"/>
      <Script src="/assets/js/counterup.min.js"/>
      <Script src="/assets/js/countdown.js"/>
      <Script src="/assets/js/vanilla-calendar.min.js"/>  
      <Script src="/assets/js/init.js"/>
			</>			
  );
};

export default ScriptLoader;