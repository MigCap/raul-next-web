import Link from "next/link";

import styled from "styled-components";

import { media, mixins, theme, Nav, Section } from "styles";

interface IHeaderContainer {
  // ref: any;
  scrollDirection: any;
  isHomePage: boolean;
}

const HeaderContainer = styled.header<IHeaderContainer>`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0px 16%;
    ${media.desktop`padding: 0 40px;`};
    ${media.tablet`padding: 0 25px;`};
    background-color: ${({ isHomePage }) => theme.colors.teal};
    transition: ${theme.transition};
    z-index: 10;
    filter: none !important;
    pointer-events: auto !important;
    user-select: auto !important;
    width: 100%;import { useEffect } from 'react';
  
    height: ${({ scrollDirection }: any) =>
      scrollDirection === "none"
        ? theme.headerHeight
        : theme.headerScrollHeight};
    box-shadow: ${({ scrollDirection }: any) =>
      scrollDirection === "up"
        ? `0 2px 4px ${theme.colors.transGreen}`
        : "none"};
    top: ${({ scrollDirection }: any) =>
      scrollDirection === "down" ? `-${theme.headerScrollHeight}` : "0"};
  `;
const Navbar = styled(Nav)<any>`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.Karla};
  color: ${({ isHomePage }) => theme.colors.white};
  counter-reset: item 0;
  position: relative;
  z-index: 12;
`;
const NavLogoContainer = styled.div`
  div {
    width: 3.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0.5rem 0 auto;
  font-weight: 600;
  ${media.tablet`display: none;`};
`;
const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;
// interface INavListItem {
//   ref: any;
//   style: any;
//   isCurrRoute: any;
// }
const NavListItem = styled.li<any>`
  margin: 0 1.2rem;
  position: relative;
  font-size: ${theme.fontSizes.smallish};
  color: ${({ isCurrRoute }) => isCurrRoute && theme.colors.orange};
  a {
    &:hover,
    &:focus {
      color: ${theme.colors.orange};
      outline: 0;
    }
  }
  ${mixins.animatedUnderline}
`;
const NavLink = styled(Link)`
  padding: 1rem 1.2rem;
`;
const NavLinkSelectedUnderline = styled.div<any>`
  height: 2px;
  background-color: ${({ isCurrRoute }) => isCurrRoute && theme.colors.orange};
`;

const LocaleSelectorDescktop = styled.div<any>`
  ${media.tablet`display: none;`};
`;
const LocalesContainer = styled.div<any>`
  font-family: ${theme.fonts.Karla};
  font-size: ${theme.fontSizes.smallish};
  color: ${({ isHomePage }) => theme.colors.bronzeLight};
`;
const LocaleAnchor = styled.a<any>`
  text-transform: uppercase;
  color: ${({ isSelected }) => {
    return isSelected
      ? `${theme.colors.orange} !important`
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

export {
  Section,
  HeaderContainer,
  Navbar,
  NavLogoContainer,
  NavLinks,
  NavList,
  NavListItem,
  NavLink,
  NavLinkSelectedUnderline,
  LocaleSelectorDescktop,
  LocalesContainer,
  LocaleAnchor,
  LocaleSelectedUnderline,
};
