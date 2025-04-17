import { routing } from "@/app/i18n/routing";

export function withLocalePrefix(
  url: string,
  locale: string | null
): string {
  const supportedLocales = routing.locales;
  const defaultLocale = routing.defaultLocale;

  // Ha nincs megadva locale, használjuk az alapértelmezettet
  const targetLocale = (locale ?? defaultLocale).toLowerCase();

  if (!supportedLocales.includes(targetLocale as any)) {
    throw new Error(`Unsupported locale: ${targetLocale}`);
  }

  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  const parts = url.split("/").filter(Boolean); // pl. ["hu", "dashboard"]

  const possibleLocale = parts[0];
  const hasLocale = supportedLocales.includes(possibleLocale as any);

  if (hasLocale) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }

  return "/" + parts.join("/");
}
