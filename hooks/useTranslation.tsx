import { useCallback } from "react";
import { useRouter } from "next/router";

import { LANGUAGES, TLocales } from "lib";

import { en } from "locales/en";
import { es } from "locales/es";

export function useTranslation({ localeFile = null }: { localeFile?: any }) {
  const router = useRouter();
  const { locale, route, query } = router;

  const isEn = locale === LANGUAGES.EN;
  const isEs = locale === LANGUAGES.ES;

  const t = useCallback(
    (key: string) => {
      if (localeFile) {
        return locale === LANGUAGES.EN
          ? localeFile[LANGUAGES.EN][key]
          : localeFile[LANGUAGES.ES][key];
      } else {
        return locale === LANGUAGES.EN ? en[key] : es[key];
      }
    },
    [locale]
  );

  const slug = query?.slug as string;
  const hasQuery = (slug && slug !== "") ?? false;
  const isWorkPost = route.startsWith("/works/");

  const getSlugWithCurrentLocale = useCallback(() => {
    const splitedSlug = slug?.split("-");
    const langIndex = splitedSlug?.length - 1;
    // const lang = splitedSlug?.[langIndex];
    const slugMinusLang = splitedSlug?.slice(0, langIndex)?.join("-");
    // const slugWithCurrentLocale = `${slugMinusLang}-${locale}`;
    const slugWithCurrentLocale =
      locale === LANGUAGES.ES
        ? `${slugMinusLang}-${LANGUAGES.EN}`
        : `${slugMinusLang}-${LANGUAGES.ES}`;

    return slugWithCurrentLocale;
  }, [locale]);

  const getLinkLocaleHref = useCallback(() => {
    if (!hasQuery) return `${route}`;
    if (isWorkPost) {
      return {
        pathname: `${route}`,
        query: { slug: getSlugWithCurrentLocale() },
      };
    }
    if (!isWorkPost) {
      return {
        pathname: `${route}`,
        query: { slug },
      };
    }
    return `${route}`;
  }, []);

  const linkLocaleHref = getLinkLocaleHref();
  // const linkLocaleHref = hasQuery
  //   ? isWorkPost
  //     ? {
  //         pathname: `${route}`,
  //         query: { slug: getSlugWithCurrentLocale() },
  //       }
  //     : {
  //         pathname: `${route}`,
  //         query: { slug },
  //       }
  //   : `${route}`;

  return { t, isEn, isEs, locale: locale as TLocales, linkLocaleHref };
}
