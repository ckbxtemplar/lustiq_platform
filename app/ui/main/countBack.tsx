"use client";

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { string } from 'zod';

type TimeLeft = {
	days?: number;
	hours?: number;
	minutes?: number;
	seconds?: number;
	number?: number;
	message?: string;
};

export default function CountBack({ fromDate }) {
	const t = useTranslations('components.countBack');
	const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

	useEffect(() => {
		let interval: NodeJS.Timeout;

		// Ha szám (pl. "42")
		if (!isNaN(Number(fromDate))) {
			setTimeLeft({ number: Number(fromDate) });
			return;
		}

		// Ha dátum string (pl. "2025-12-31 23:59:00")
		const targetDate = new Date(fromDate);
		if (isNaN(targetDate.getTime())) {
			setTimeLeft({ message: 'Invalid date' });
			return;
		}

		const updateCountdown = () => {
			const now = new Date();
			const diff = targetDate.getTime() - now.getTime();

			if (diff <= 0) {
				setTimeLeft({ message: t('event_started') || 'Elindult!' });
				clearInterval(interval);
				return;
			}

			const seconds = Math.floor((diff / 1000) % 60);
			const minutes = Math.floor((diff / 1000 / 60) % 60);
			const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
			const days = Math.floor(diff / (1000 * 60 * 60 * 24));

			setTimeLeft({ days, hours, minutes, seconds });
		};

		updateCountdown(); // első futtatás
		interval = setInterval(updateCountdown, 1000);

		return () => clearInterval(interval); // takarítás
	}, [fromDate]);

	return (
		<section className="popular_event_section section_space_lg bg_dark bg-pattern3 decoration_wrap mt-5 mb-0">
			<div className="container">
				<div className="row align-items-center justify-content-center mb-3 mb-md-0">
					
					<div className="col-12 col-lg-auto">
						<div className='counter_item text-white borderless me-5 p-0'>
							<h3 className="counter_value text-white">Indulás: </h3>
							<p className="d-none d-lg-block">&nbsp;</p>
						</div>
					</div>
					
					<div className="col-auto">
						<div className='counter_item text-white borderless me-3 me-md-4 p-0'>
							<h3 className="counter_value text-white border-red">
								<span className="">{timeLeft.days}</span>
							</h3>
							<p className="m-0">{t('days')}</p>
						</div>
					</div>
					
					<div className="col-auto">
						<div className='counter_item text-white borderless me-3 me-md-4 p-0'>
							<h3 className="counter_value text-white border-red">
								<span className="">{timeLeft.hours}</span>
							</h3>
							<p className="m-0">{t('hours')}</p>
						</div>
					</div>
					
					<div className="col-auto">						
						<div className='counter_item text-white borderless me-3 me-md-4 p-0'>
							<h3 className="counter_value text-white border-red">
								<span className="">{timeLeft.minutes}</span>
							</h3>
							<p className="m-0">{t('minutes')}</p>
						</div>
					</div>
					<div className="col-auto">						
						<div className='counter_item text-white borderless p-0'>
							<h3 className="counter_value text-white border-red">
								<span className="">{timeLeft.seconds}</span>
							</h3>
							<p className="m-0">{t('seconds')}</p>
						</div>																		
					</div>
				</div>
			</div>
		</section>
	);
}
