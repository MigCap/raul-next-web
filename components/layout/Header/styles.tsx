import Link from "next/link";
import styled from "styled-components";

import { media, mixins, Nav, theme } from "styles";

interface IHeaderContainer {
  // ref: any;
  scrollDirection: any;
  isHomePage: boolean;
}

const HeaderContainer = styled.header<IHeaderContainer>`
    ${mixins.flexBetween};
    position: fixed;
    top: 0;
    padding: 0px 20%;
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
  ${media.tablet`display: none;`};
  font-weight: 600;
`;
const NavList = styled.ol`
  div {
    ${mixins.flexBetween};
  }
`;
interface INavListItem {
  ref: any;
  style: any;
  isCurrRoute: any;
}
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
  color: ${({ isSelected, isHomePage }) => {
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

const Hamburger = styled.div<any>`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;
const HamburgerBox = styled.div`
  position: relative;
  display: inline-block;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;
interface HamburgerInner {
  menuOpen: boolean;
}
const HamburgerInner = styled.div<HamburgerInner>`
  background-color: ${theme.colors.white};
  position: absolute;
  width: ${theme.hamburgerWidth}px;
  height: 4px;
  border-radius: ${theme.borderRadius};
  top: 50%;
  left: 0;
  right: 0;
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${(props: any) => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${(props: any) => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${(props: any) =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );
  &:before,
  &:after {
    content: "";
    display: block;
    background-color: ${theme.colors.white};
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 4px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 20px;
  }
  &:before {
    width: ${(props: any) => (props.menuOpen ? `100%` : `100%`)};
    top: ${(props: any) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props: any) => (props.menuOpen ? 0 : 1)};
    transition: ${(props: any) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props: any) => (props.menuOpen ? `100%` : `100%`)};
    bottom: ${(props: any) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props: any) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props: any) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;

export {
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
  Hamburger,
  HamburgerBox,
  HamburgerInner,
  HeaderContainer,
};
