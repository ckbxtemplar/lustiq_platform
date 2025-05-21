import HeroBanner from '@/app/ui/main/herobanner';
import CoursesSection from '@/app/ui/main/coursessection';
import IntroVideo from '@/app/ui/main/introvideo'; 
import Process from '@/app/ui/main/process';
import Testimonials from '@/app/ui/main/testimonials';
import CallToAction from '@/app/ui/main/calltoaction';
import SoonEvents from '@/app/ui/main/soonEvents';
import CountBack from '@/app/ui/main/countBack';
import Brands from '@/app/ui/main/brands';
import Blog from '@/app/ui/main/blog';
import NewsletterSection from '@/app/ui/newsletter-section';
 
export default function Page() {
  return (
    <main className={'page_content'}>
			<HeroBanner/>
			<CountBack fromDate={"2025.06.19. 19:00"}/>
			<NewsletterSection page="soon" />
			<CoursesSection/>
			<IntroVideo />
			<SoonEvents/>
			<Process />
			<Testimonials />
			<CallToAction />
			<Brands />
			{/* <Blog /> */}
			<div className="section_space_lg"></div>						
    </main>
  );
}