import { Metadata } from 'next';
import HeroBanner from '@/app/ui/main/herobanner';
import IntroVideo from '@/app/ui/main/introvideo'; 
import Process from '@/app/ui/main/process';
import Testimonials from '@/app/ui/main/testimonials';
import CallToAction from '@/app/ui/main/calltoaction';
import Brands from '@/app/ui/main/brands';
import NewsletterSection from '@/app/ui/newsletter-section';
import FAQ from '@/app/ui/main/FAQ';
import SoonEvents from '@/app/ui/main/soonEvents';
import SoonRichtext from '@/app/ui/main/soonRichtext';
import CountBack from '@/app/ui/main/countBack';

export const metadata: Metadata = {
  title: 'Intimitás, tudással',
};

export default function Page() {
  return (
    <main className={'page_content'}>
			<HeroBanner page="soon"/>		
			
			<CountBack fromDate={"2025.06.25. 19:00"}/>
			
			<NewsletterSection page="soon" />	

			<IntroVideo />

			<SoonRichtext  version={'soon1'}/>

			<Process />

			<Testimonials />

			<SoonEvents />
			
			<Brands />

			<SoonRichtext version={'soon2'}/>

			<CallToAction />

			<FAQ/>

	  </main>
  );
}