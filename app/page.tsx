import HeroBanner from '@/app/ui/main/herobanner';
import CoursesSection from '@/app/ui/main/coursessection';
import IntroVideo from '@/app/ui/main/introvideo'; 
import Process from '@/app/ui/main/process';
import Testimonials from '@/app/ui/main/testimonials';
import CallToAction from '@/app/ui/main/calltoaction';
import Brands from '@/app/ui/main/brands';
import Blog from '@/app/ui/main/blog';
import NewsletterSection from '@/app/ui/newsletter-section';
 
export default function Page() {
  return (
    <main className={'page_content'}>
			<HeroBanner/>
			<CoursesSection/>
			<IntroVideo />
			<Process />
			<Testimonials />
			<CallToAction />
			<Brands />
			<Blog />
			<NewsletterSection />			
    </main>
  );
}