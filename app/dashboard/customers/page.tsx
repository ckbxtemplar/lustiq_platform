import { barlow } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};
export default function Page() {
	return <h1 className={`${barlow.className} mb-4 text-xl md:text-2xl`}>Customers page</h1>;
}