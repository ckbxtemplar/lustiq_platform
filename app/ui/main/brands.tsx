import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Brands() {

	const t = useTranslations('pages.home.brands');

  return (
		<section className="brands_section section_space_lg pb-0">
		<div className="container">
			<div className="section_heading text-center">
				<h2 className="heading_text mb-0">
					{t('title')}
				</h2>
			</div>
			<ul className="brands_logo_list unordered_list">
				<li>
					<Link href="#!">
						<div>
							<Image src="/assets/images/brands/logo_microsoft.png" width={300} height={80} alt="Microsoft"/>
						</div>
						<div className='text-black mt-2'>Varga Gréta</div>
					</Link>
					
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_alphabet.png" width={300} height={80} alt="Alphabet"/>
						<div className='text-black mt-2'>Varga Gréta</div>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_intel.png" width={300} height={80} alt="Intel"/>
						<div className='text-black mt-2'>Varga Gréta</div>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_cisco.png" width={300} height={80} alt="Cisco"/>
						<div className='text-black mt-2'>Varga Gréta</div>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_verizon_communications.png" width={300} height={80} alt="Verizon Communications"/>
						<div className='text-black mt-2'>Varga Gréta</div>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_infopulse.png" width={300} height={80} alt="Infopulse.png"/>
						<div className='text-black mt-2'>Varga Gréta</div>
					</Link>
				</li>
			</ul>
		</div>
	</section>
	)
}