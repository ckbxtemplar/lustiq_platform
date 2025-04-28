"use client"

import React from "react";
import Quiz from '@/app/ui/dashboard/components/Quiz';
import AiChat from '@/app/ui/dashboard/components/AiChat';
import CourseVideo from '@/app/ui/dashboard/components/CourseVideo';

type LessonData = Record<string, any>;

type LessonProps = {
  lessons: LessonData[];
};

export default function Lessons({ lessons }: LessonProps){


	return (
		<div className="accordion_wrap mb-5">
		<div className="accordion style_2 px-3 px-lg-5" id="corse_details_accordion">

			{lessons.map((item:any,index:number) => {
				let sectionCounter = 0;
				return (
				<div className="accordion-item" key={index}>
					<div className="checkbox_item accordion_item_checked">
						<input type="checkbox"/>
					</div>											
					<div className={`accordion-button ${index === 0 ? 'collapsed' : ''}`} 
					role="button" 
					data-bs-toggle="collapse" 
					data-bs-target={'#lesson'+item.id} 
					aria-expanded={index==0?true:false}
					onClick={() => {
						setTimeout(() => {
							const element = document.getElementById('lesson' + item.id);
							if (element) {
								const yOffset = -160; // 160px-el lejjebb görgetés
								const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
								window.scrollTo({ top: y, behavior: 'smooth' });
							}
						}, 300);
					}}
					>
						{item.title}
					</div>
					<div id={'lesson'+item.id} className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} data-bs-parent="#corse_details_accordion">
						<div className="accordion-body">												
					
							{item.title === 'ai' ? (
								<>
									<div className="course_intro my-5">
										<div className='row align-items-center mb-3 ms-0'>
											<div className='col-auto'><span className='course_section_number fw-bold'>1</span></div>
											<div className='col-auto'><h5 className='m-0'>Bevezető</h5></div>
										</div>																												
										<p>Welcome! I'm your AI assistant. How may I help you today? 👏</p>
									</div>
									<div className="aichat_wrap my-5 py-3">
										<div className='row align-items-center mb-3 ms-0'>
											<div className='col-auto'><span className='course_section_number fw-bold'>2</span></div>
											<div className='col-auto'><h5 className='m-0'>AI vezérelt beszélgetés</h5></div>
										</div>
										<div className="aichat_wrap mt-3 border p-3 bg-grey order border-0 rounded-3">															
											<AiChat/>
										</div>
									</div>
								</>
							) : (			
								<>
								{item.description && (
								<div className="course_intro my-5 py-3">
									<div className='row align-items-center mb-3 ms-0'>
										<div className='col-auto'><span className='course_section_number fw-bold'>{++sectionCounter}</span></div>
										<div className='col-auto'><h5 className='m-0'>Bevezető</h5></div>
									</div>																												
									<p className="mt-3">
										{item.description}
									</p>
								</div>
								)}

								{item.video && item.video.name && (													
								<div className="intro_video my-5 py-3">
									<div className='row align-items-center mb-3 ms-0'>
										<div className='col-auto'><span className='course_section_number fw-bold'>{++sectionCounter}</span></div>
										<div className='col-auto'><h5 className='m-0'>Videó lejátszása</h5></div>
									</div>
									<div className="video_wrap mt-3">															
										{/* <Image src="/assets/images/video/video_poster_3.jpg" width={1458} height={440} alt="Collab – Online Learning Platform"/>
										<a className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=7e90gBu4pas">
											<span className="icon"><i className="fas fa-play"></i></span>
										</a> */}
										<CourseVideo videoSrc={item.video.url} videoName={item.video.name}/>
									</div>
								</div>
								)}
								
								{item.questions && item.questions.length > 0 && (
								<div className="quiz_wrapper my-5 py-3">
									<div className='row align-items-center mb-3 ms-0'>
										<div className='col-auto'><span className='course_section_number fw-bold'>{++sectionCounter}</span></div>
										<div className='col-auto'><h5 className='m-0'>Töltsd ki a kvízt</h5></div>
									</div>
									<Quiz quizData={item.questions}/>
								</div>
								)}
								</>
							)}

						</div>											
					</div>										
				</div>	
				)}									
			
			)}

		</div>
	</div>		
	)
}
