import Image from 'next/image';
import HeroBanner from '@/app/ui/main/herobanner';
import CoursesSection from '@/app/ui/main/coursessection';
import IntroVideo from '@/app/ui/main/introvideo'; 
import Process from '@/app/ui/main/process';
import Testimonials from '@/app/ui/main/testimonials';
import CallToAction from '@/app/ui/main/calltoaction';
import Brands from '@/app/ui/main/brands';
import NewsletterSection from '@/app/ui/newsletter-section';
import FAQ from '@/app/ui/main/FAQ';
import SoonEvents from '@/app/ui/main/soonEvents';
import SoonRichtext from '@/app/ui/main/soonRichtext';
 
export default function Page() {
  return (
    <main className={'page_content'}>
			<HeroBanner page="soon"/>		

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