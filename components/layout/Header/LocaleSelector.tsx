import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";

import { useTranslation } from "hooks";

import { theme, mixins } from "styles";

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

const LocalesContainer = styled.div<any>`
  font-family: ${theme.fonts.Karla};
  font-size: 1rem;
  color: ${({ isHomePage }) =>
    isHomePage ? theme.colors.dark : theme.colors.bronzeLight};
`;
const LocaleAnchor = styled.a<any>`
  color: ${({ isSelected, isHomePage }) => {
    return isSelected
      ? `${theme.colors.orange} !important`
      : isHomePage
      ? `${theme.colors.dark} !important`
      : `${theme.colors.bronzeLight} !important`;
  }};
  ${mixins.animatedUnderline}
  &:hover {
    color: ${theme.colors.orange} !important;
  }
`;
const LocaleSelectedUnderline = styled.div<any>`
  height: 2px;
  background-color: ${({ isSelected }) => isSelected && theme.colors.orange};
`;

export default LocaleSelector;
