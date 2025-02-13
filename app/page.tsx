import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { barlow } from '@/app/ui/fonts';
import Image from 'next/image';
import HeroBanner from '@/app/ui/main/herobanner';
import CoursesSection from '@/app/ui/main/coursessection';
import IntroVideo from '@/app/ui/main/introvideo'; 
import Process from '@/app/ui/main/process';
import Testimonials from '@/app/ui/main/testimonials';
import CallToAction from '@/app/ui/main/calltoaction';
import Brands from '@/app/ui/main/brands';
import Blog from '@/app/ui/main/blog';
import Newsletter from '@/app/ui/main/newsletter';
 
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
			<Newsletter />			
    </main>
  );
}