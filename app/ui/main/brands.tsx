import Link from 'next/link';
import Image from 'next/image';

export default function Brands() {
  return (
		<section className="brands_section section_space_lg pb-0">
		<div className="container">
			<div className="section_heading text-center">
				<h2 className="heading_text mb-0">
					Where Our Graduates Work
				</h2>
			</div>
			<ul className="brands_logo_list unordered_list">
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_microsoft.png" width={300} height={80} alt="Microsoft"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_alphabet.png" width={300} height={80} alt="Alphabet"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_intel.png" width={300} height={80} alt="Intel"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_cisco.png" width={300} height={80} alt="Cisco"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_verizon_communications.png" width={300} height={80} alt="Verizon Communications"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_infopulse.png" width={300} height={80} alt="Infopulse.png"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_amazon.png" width={300} height={80} alt="Amazon"/>
					</Link>
				</li>
				<li>
					<Link href="#!">
						<Image src="/assets/images/brands/logo_wix_com_website.png" width={300} height={80} alt="Wix"/>
					</Link>
				</li>
			</ul>
		</div>
	</section>
	)
}