import { useRouter } from "next/router";
import Link from "next/link";

import { useTranslation } from "hooks";

import { getRoutePathById, ROUTES_IDS } from "lib";

import {
  LocalesContainer,
  LocaleAnchor,
  LocaleSelectedUnderline,
} from "./styles";

function LocaleSelector() {
  const { isEn, isSp, linkLocaleHref } = useTranslation({});

  const { pathname } = useRouter();
  const isHomePage = pathname === getRoutePathById(ROUTES_IDS.HOME);

  return (
    <LocalesContainer isHomePage={isHomePage}>
      <Link href={linkLocaleHref} locale="en" passHref>
        <LocaleAnchor isSelected={isEn} isHomePage={isHomePage}>
          EN
          {isEn && <LocaleSelectedUnderline isSelected={isEn} />}
        </LocaleAnchor>
      </Link>
      <span> / </span>
      <Link href={linkLocaleHref} locale="sp" passHref>
        <LocaleAnchor isSelected={isSp} isHomePage={isHomePage}>
          ES
          {isSp && <LocaleSelectedUnderline isSelected={isSp} />}
        </LocaleAnchor>
      </Link>
    </LocalesContainer>
  );
}

export default LocaleSelector;
