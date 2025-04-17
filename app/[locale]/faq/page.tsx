import { Metadata } from 'next';
import Banner from '@/app/ui/dashboard/banner';
import FAQ from '@/app/ui/main/FAQ';


export const metadata: Metadata = {
  title: 'F.A.Q.',
};

export default function Faq() {

  return (
		<main className="page_content">
			
			<Banner title={'Frequently Asked Questions'} description={'Egestas sed tempus urna et pharetra. Leo integer malesuada nunc vel.'} search={true}/>
			<FAQ/>

		</main> 
  );
}