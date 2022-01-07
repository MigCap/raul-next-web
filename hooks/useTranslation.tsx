import { useCallback } from "react";
import { useRouter } from "next/router";

import { en } from "locales/en";
import { sp } from "locales/sp";

export type TLocales = "en" | "sp";

export function useTranslation({ localeFile = null }: { localeFile?: any }) {
  const { locale, route, query } = useRouter();

  const isEn = locale === "en";
  const isSp = locale === "sp";

  const t = useCallback(
    (key: string) => {
      if (localeFile) {
        return locale === "en" ? localeFile["en"][key] : localeFile["sp"][key];
      } else {
        return locale === "en" ? en[key] : sp[key];
      }
    },
    [locale]
  );

  const hasQuery = query?.slug !== "";
  const linkLocaleHref = hasQuery
    ? {
        pathname: `/${route}`,
        query: { slug: query.slug },
      }
    : `/${route}`;

  return { t, isEn, isSp, locale: locale as TLocales, linkLocaleHref };
}
