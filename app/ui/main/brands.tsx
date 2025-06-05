import Link from 'next/link';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

export default function Brands() {

	const t = useTranslations('pages.home.brands');

  return (
		<section className="brands_section section_space_lg pb-0">
		<div className="container">
			<div className="section_heading text-center">
				<h2 className="heading_text mb-2">
					{t('title')}
				</h2>
				<p>
					{t('sub')}
				</p>
			</div>
			<ul className="brands_logo_list unordered_list">
				<li>
					<Link href="#!" className='no-hover'>
						<Image src={'/assets/images/brands/'+t('head1_img')} width={200} height={200} alt="Microsoft"/>
						<div className='text-black mt-2'>{t('head1_name')}</div>
						<small className="fw-normal lh-sm"><i>{t('head1_sub')}</i></small>
					</Link>
					
				</li>
				<li>
					<Link href="#!" className='no-hover'>
						<Image src={'/assets/images/brands/'+t('head2_img')} width={200} height={200} alt="Alphabet"/>
						<div className='text-black mt-3 mb-1 fw-bold'>{t('head2_name')}</div>
						<small className="fw-normal lh-sm"><i>{t('head2_sub')}</i></small>
					</Link>
				</li>
				<li>
					<Link href="#!" className='no-hover'>
						<Image src={'/assets/images/brands/'+t('head3_img')} width={200} height={200} alt="Intel"/>
						<div className='text-black mt-2'>{t('head3_name')}</div>
						<small className="fw-normal lh-sm"><i>{t('head3_sub')}</i></small>
					</Link>
				</li>
				<li>
					<Link href="#!" className='no-hover'>
						<Image src={'/assets/images/brands/'+t('head4_img')} width={200} height={200} alt="Cisco"/>
						<div className='text-black mt-2'>{t('head4_name')}</div>
						<small className="fw-normal lh-sm"><i>{t('head4_sub')}</i></small>
					</Link>
				</li>
				<li className='d-none'>
					<Link href="#!" className='no-hover'>
						<Image src={'/assets/images/brands/'+t('head5_img')} width={200} height={200} alt="Verizon Communications"/>
						<div className='text-black mt-2'>{t('head5_name')}</div>
						<small className="fw-normal lh-sm"><i>{t('head5_sub')}</i></small>
					</Link>
				</li>
				<li>
					<Link href="#!" className='no-hover'>
						<Image src={'/assets/images/brands/'+t('head6_img')} width={200} height={200} alt="Infopulse.png"/>
						<div className='text-black mt-2'>{t('head6_name')}</div>
						<small className="fw-normal lh-sm"><i>{t('head6_sub')}</i></small>
					</Link>
				</li>
			</ul>
		</div>
	</section>
	)
}