import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "hooks";

import { getRoutePathById, LANGUAGES, ROUTES_IDS } from "lib";

import {
  LocalesContainer,
  LocaleAnchor,
  LocaleSelectedUnderline,
} from "./styles";

function LocaleSelector() {
  const { t, isEn, isEs, linkLocaleHref } = useTranslation({});

  const { pathname } = useRouter();
  const isHomePage = pathname === getRoutePathById(ROUTES_IDS.HOME);

  return (
    <LocalesContainer isHomePage={isHomePage}>
      <Link href={linkLocaleHref} locale={LANGUAGES.EN} passHref>
        <LocaleAnchor isSelected={isEn} isHomePage={isHomePage}>
          {t(LANGUAGES.EN)}
          {isEn && <LocaleSelectedUnderline isSelected={isEn} />}
        </LocaleAnchor>
      </Link>
      <span> / </span>
      <Link href={linkLocaleHref} locale={LANGUAGES.ES} passHref>
        <LocaleAnchor isSelected={isEs} isHomePage={isHomePage}>
          {t(LANGUAGES.ES)}
          {isEs && <LocaleSelectedUnderline isSelected={isEs} />}
        </LocaleAnchor>
      </Link>
    </LocalesContainer>
  );
}

export default LocaleSelector;
