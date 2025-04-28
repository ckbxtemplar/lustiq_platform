"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { routing } from '@/app/i18n/routing';
import { withLocalePrefix } from '@/app/utils/common';
import { usePathname } from 'next/navigation';

export default function SiteHeaderLanguageSelect() {
  const locale = useLocale();
  const locales = routing.locales;
  const t = useTranslations('pages.home.footer');
	const pathname = usePathname();

  const flags: Record<string, string> = {
    'hu': '/assets/images/flags/hungary-flag-icon-64.png',
    'en': '/assets/images/flags/united-kingdom-flag-icon-64.png',
  };

  // Az aktuális nyelv zászlaja
  const currentFlag = flags[locale];

  // A többi nyelv, az aktuális kivételével
  const otherLocales = locales.filter((lang) => lang !== locale);

  return (
    <ul className="unordered_list_end">
			<li className="d-lg-none d-inline-block">
				<button className="mobile_menu_btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_menu_dropdown" aria-controls="main_menu_dropdown" aria-expanded="false" aria-label="Toggle navigation">
					<i className="far fa-bars"></i>
				</button>
			</li>					
      <li>
        <ul className="main_menu_list user_menu unordered_list_end">
          <li className="dropdown">
            <Link
              className="nav-link"
              href="#"
              id="pages_usermenu"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <Image
                src={currentFlag}
                alt={`Current language: ${locale}`}
								width={40}
								height={32}
								className="rounded-circle me-0 me-lg-2"
								style={{ height: '40px', width: '32px' }}
								layout="intrinsic"
              />
            </Link>
            <ul className="dropdown-menu" aria-labelledby="pages_usermenu">
              {otherLocales.map((lang) => (
                <li key={lang}>
                  <Link href={withLocalePrefix(pathname, lang)} className="dropdown-item">
                    <Image
                      src={flags[lang]}
                      alt={lang}
                      width={40}
                      height={32}
											className="rounded-circle me-3"
											style={{ height: '40px', width: '32px', display: 'inline-block' }}
											layout="intrinsic"
                    />
										{lang.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}
