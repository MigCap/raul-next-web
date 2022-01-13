import { useCallback } from "react";
import { useRouter } from "next/router";

import { en } from "locales/en";
import { sp } from "locales/sp";

export type TLocales = "en" | "sp";

export function useTranslation({ localeFile = null }: { localeFile?: any }) {
  const router = useRouter();
  const { locale, route, query } = router;

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

  const slug = query?.slug as string;
  const hasQuery = slug !== "";
  const isWorkPost = route.startsWith("/works/");

  const getSlugWithCurrentLocale = useCallback(() => {
    const splitedSlug = slug?.split("-");
    const langIndex = splitedSlug?.length - 1;
    // const lang = splitedSlug?.[langIndex];
    const slugMinusLang = splitedSlug?.slice(0, langIndex)?.join("-");
    // const slugWithCurrentLocale = `${slugMinusLang}-${locale}`;
    const slugWithCurrentLocale =
      locale === "sp" ? `${slugMinusLang}-en` : `${slugMinusLang}-sp`;

    return slugWithCurrentLocale;
  }, [locale]);

  const linkLocaleHref = hasQuery
    ? isWorkPost
      ? {
          pathname: `${route}`,
          query: { slug: getSlugWithCurrentLocale() },
        }
      : {
          pathname: `${route}`,
          query: { slug },
        }
    : `${route}`;

  return { t, isEn, isSp, locale: locale as TLocales, linkLocaleHref };
}
