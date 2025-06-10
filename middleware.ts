import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { routing } from '@/app/i18n/routing';


const authMiddleware = NextAuth(authConfig).auth;
const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;

  // 1. Ellenőrizzük, hogy van-e locale az URL-ben
  const hasLocale = routing.locales.some((locale) => pathname.startsWith(`/${locale}`));
  if (!hasLocale) {
    const referer = request.headers.get('referer') || '';
    const refUrl = new URL(referer, request.url);
    const refererLocale = routing.locales.find((locale) =>
      refUrl.pathname.startsWith(`/${locale}`)
    );

    const localeToUse = refererLocale || routing.defaultLocale;
    const url = request.nextUrl.clone();
    url.pathname = `/${localeToUse}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  // 2. Auth ellenőrzés
	// @ts-expect-error
	const authResponse = await authMiddleware(request) as NextResponse;
	if (authResponse && authResponse.headers.get("location")) {
		return authResponse;
	}	
  
	// 3. beállítjuk az internationalizációs middleware-t  
  const response = handleI18nRouting(request);
  return response;

}

export const config = {
  matcher: ['/((?!api|docs|_next/static|_next/image|assets|.*\\.png$|.*\\.jpg$|.*\\.ico$|sitemap.xml|robots.txt).*)'],
};
