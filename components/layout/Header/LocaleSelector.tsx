import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";

import { useTranslation } from "hooks";

import {
  LocalesContainer,
  LocaleAnchor,
  LocaleSelectedUnderline,
} from "./styles";

function LocaleSelector() {
  const { isEn, isSp, linkLocaleHref } = useTranslation({});

  const router = useRouter();
  const { pathname } = router;
  const isHomePage = pathname === "/";

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
