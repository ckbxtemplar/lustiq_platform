"use client"; // Ezt a sor elejére kell tenni

import React from "react";

interface CourseVideoProps {
  videoSrc: string;
  videoName: string;
}

export default function CourseVideo({ videoSrc, videoName }: CourseVideoProps) {
	return (	
		<video width="100%" height="440" 
		preload="true" 
		controls 
		controlsList="nodownload" 
		disablePictureInPicture
		onContextMenu={(e) => e.preventDefault()}
		>
		<source src={`${process.env.NEXT_PUBLIC_CMS_PROTOCOL}://${process.env.NEXT_PUBLIC_CMS_URL}`+videoSrc} type="video/mp4" />
			{videoName} - Your browser does not support the video tag.
	</video>	
	)
}