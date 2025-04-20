import { routing } from "@/app/i18n/routing";

export function withLocalePrefix(
  url: string,
  locale: string | null
): string {
  const supportedLocales = routing.locales;

  if (!locale) {
    return url.startsWith("/") ? url : "/" + url;
  }

  const targetLocale = locale.toLowerCase();

  if (!supportedLocales.includes(targetLocale as any)) {
    throw new Error(`Unsupported locale: ${targetLocale}`);
  }

  if (!url.startsWith("/")) {
    url = "/" + url;
  }

  const parts = url.split("/").filter(Boolean);

  const possibleLocale = parts[0];
  const hasLocale = supportedLocales.includes(possibleLocale as any);

  if (hasLocale) {
    parts[0] = targetLocale;
  } else {
    parts.unshift(targetLocale);
  }

  return "/" + parts.join("/");
}
