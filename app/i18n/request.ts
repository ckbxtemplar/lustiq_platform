import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {

  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
 

	console.log('locale', requested);
	console.log('locale', locale);
	
  return {
    locale,
    messages: (await import(`@/app/dictionaries/${locale}.json`)).default
  };
});