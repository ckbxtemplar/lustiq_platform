"use client"

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import Quiz from '@/app/ui/dashboard/components/Quiz';

export default function FirstSteps() {
	const t = useTranslations('pages.dashboard.firststeps');
	const modalRef = useRef<HTMLDivElement | null>(null);	

	const openModal = () => {
		if (modalRef.current) {
			const bootstrap = require('bootstrap');
			const modal = new bootstrap.Modal(modalRef.current);
			modal.show();
		}
	};

	const questions = [
		{
			"correct": "Őszinte, tiszteletteljes és magabiztos kommunikáció, amely figyelembe veszi a másik érzéseit és jogait.",
			"options": [
				"Erőszakosan és hangosan érvényt szerezni a saját érzéseinknek és szükségleteinknek.",
				"Figyelmen kívül hagyni a saját érzéseinket és szükségleteinket a másik kedvéért.",
				"Őszinte, tiszteletteljes és magabiztos kommunikáció, amely figyelembe veszi a másik érzéseit és jogait.",
				"Mindig kedvesnek és alkalmazkodónak lenni, hogy elkerüljük a konfliktusokat."
			],
			"question": "Mit jelent az asszertív kommunikáció?"
		},
		{
			"correct": "Képesek vagyunk világosan és magabiztosan kifejezni érzéseinket és szükségleteinket, miközben a másik érzéseire is figyelünk.",
			"options": [
				"Mindig nyugodtnak és érzelmileg semlegesnek kell maradnunk.",
				"Képesek vagyunk világosan és magabiztosan kifejezni érzéseinket és szükségleteinket, miközben a másik érzéseire is figyelünk.",
				"Csak akkor kommunikálunk, ha biztosak vagyunk benne, hogy igazunk van.",
				"Az asszertív kommunikáció lényege, hogy minden helyzetben megpróbáljuk teljesíteni a másik elvárásait."
			],
			"question": "Melyik állítás jellemzi az asszertív kommunikációt?"
		},
		{
			"correct": "„Tudom, hogy nem akartál megbántani, de mostanában bizonytalan vagyok a testemmel kapcsolatban, mert felszedtem pár kilót, ezért amikor megfogod a hájhurkámat, az rosszul esik. Kérlek, ne tedd többé.”",
			"options": [
				"„Veled az a baj, hogy érzéketlen vagy. Ha nem lennél az, nem fognád meg a hájhurkáimat!”",
				"„Tudom, hogy nem akartál megbántani, de mostanában bizonytalan vagyok a testemmel kapcsolatban, mert felszedtem pár kilót, ezért amikor megfogod a hájhurkámat, az rosszul esik. Kérlek, ne tedd többé.”",
				"„Nem számít, hogyan érzem magam közben; nyugodtan megfoghatod a hájhurkáimat, ha neked jó.”",
				"„Semmi baj, nem számít, csak túl érzékeny vagyok.”"
			],
			"question": "Melyik mondat szemlélteti az asszertív kommunikációt?"
		},
		{
			"correct": "Mert segít egyértelműen kifejezni a vágyakat és határokat anélkül, hogy a másikat megbántanánk.",
			"options": [
				"Mert segít egyértelműen kifejezni a vágyakat és határokat anélkül, hogy a másikat megbántanánk.",
				"Mert így mindig a mi akaratunk érvényesül, és soha nem kell lemondanunk semmiről.",
				"Mert így elkerülhetjük a nehéz beszélgetéseket.",
				"Mert így biztosan nem lesz konfliktus a kapcsolatban."
			],
			"question": "Miért fontos az asszertív kommunikáció a szexuális életben?"
		},
		{
			"correct": "Ha a partner olyasmit javasol, amit nem szeretnénk, határozottan és tisztelettel közöljük, hogy ez számunkra nem komfortos.",
			"options": [
				"Ha valami nem jó, hallgatunk, nehogy elrontsuk a hangulatot.",
				"Ha a partner olyasmit javasol, amit nem szeretnénk, határozottan és tisztelettel közöljük, hogy ez számunkra nem komfortos.",
				"Ha nem tetszik valami, dühösen és sértetten rászólunk, hogy soha többé ne próbálja meg.",
				"Mindig mindenbe belemegyünk, hogy a másik elégedett legyen."
			],
			"question": "Melyik helyzet mutatja be az asszertív kommunikációt egy szexuális szituációban?"
		}
	];

	return (
		<>
			<section className="process_section section_space_md">
				<div className="container">
					<div className="section_heading text-center">
						<div className="row justify-content-center">
							<div className="col col-lg-9">
								<h2 className="heading_text mb-3">
									{t('title')}
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col col-lg-6 col-md-6 col-sm-12">
							<div className="iconbox_item">
								<div className="serial_number">01</div>
								<hr/>
								<div className="title_wrap">
									<h3 className="item_title mb-0">
										{t('video.title')}
									</h3>
								</div>
								<h5 className="fw-normal mb-4">
									{t('video.description')}
								</h5>
								<div className="intro_video">
									<div className="video_wrap tilt">
										<Image src="/assets/images/video/video_poster_1.jpg" width={2338} height={880} alt="Collab – Online Learning Platform"/>
										<Link className="video_play_btn popup_video" href="https://www.youtube.com/watch?v=zYV8T8Vn9TM">
											<span className="icon"><i className="fas fa-play"></i></span>
										</Link>
									</div>
								</div>							
							</div>
						</div>
						<div className="col col-lg-6 col-md-6 col-sm-12">
							<div className="iconbox_item">
								<div className="serial_number">02</div>
								<hr/>
								<div className="title_wrap">
									<h3 className="item_title mb-0">
										{t('quiz.title')}
									</h3>
								</div>
								<div>
										<h5 className="fw-normal mb-4">
											{t('quiz.description')}
										</h5>									
										<a href="#"  onClick={(e) => { e.preventDefault();  openModal(); }} className="btn btn_dark"><span><small>{t('quiz.button')}</small><small>{t('quiz.button')}</small></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				ref={modalRef}
				className="modal fade"
				id="quizModal"
				data-bs-backdrop="static"
				data-bs-keyboard="false"
				aria-labelledby="globalMessageModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="globalMessageModalLabel">Pár gyors kérdés a jobb élményért</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={t('close')}></button>
						</div>
						<div className="modal-body">
							<Quiz quizData={questions}/>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn_dark btn_small" data-bs-dismiss="modal"><span><small>Bezár</small><small>Bezár</small></span></button>
							<button type="button" className="btn btn_dark btn_small" data-bs-dismiss="modal"><span><small>Mentés</small><small>Mentés</small></span></button>
						</div>
					</div>
				</div>
			</div>			

      <style jsx>{`
        .leftCol {
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          padding-right: 2rem;
        }
        .rightCol {
          padding-left: 2rem;
        }

        /* Reszponzív esethez, ha szeretnéd: */
        @media (max-width: 767.98px) {
          .leftCol {
            border-right: none;
            padding-right: 0;
            margin-bottom: 1.5rem;
          }
          .rightCol {
            padding-left: 0;
          }
        }
      `}</style>
		</>
  );
}