import Link from "next/link";

import { useTranslation, useCustomRouter as useRouter } from "hooks";

import { LANGUAGES } from "lib";

import {
  LocalesContainer,
  LocaleAnchor,
  LocaleSelectedUnderline,
} from "./styles";

function LocaleSelector() {
  const { t, isEn, isEs, linkLocaleHref } = useTranslation({});

  const { isHomePage } = useRouter();

  return (
    <LocalesContainer isHomePage={isHomePage}>
      <Link legacyBehavior href={linkLocaleHref} locale={LANGUAGES.EN} passHref>
        <LocaleAnchor isSelected={isEn} isHomePage={isHomePage}>
          {t(LANGUAGES.EN)}
          {isEn && <LocaleSelectedUnderline isSelected={isEn} />}
        </LocaleAnchor>
      </Link>
      <span> / </span>
      <Link legacyBehavior href={linkLocaleHref} locale={LANGUAGES.ES} passHref>
        <LocaleAnchor isSelected={isEs} isHomePage={isHomePage}>
          {t(LANGUAGES.ES)}
          {isEs && <LocaleSelectedUnderline isSelected={isEs} />}
        </LocaleAnchor>
      </Link>
    </LocalesContainer>
  );
}

export default LocaleSelector;
