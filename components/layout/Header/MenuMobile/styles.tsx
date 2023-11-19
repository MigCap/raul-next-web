// import Link from "next/link";
import styled from "styled-components";

import { media, mixins, Nav, theme } from "styles";

interface MenuContainerProps {
  isMobileMenuOpen: any;
}
const MenuContainer = styled.div<MenuContainerProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${(props) => (props.isMobileMenuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.isMobileMenuOpen ? "visible" : "hidden")};
  display: none;
  ${media.tablet`display: block;`};
`;

const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  background-color: ${theme.colors.teal};
  padding: 50px;
  width: 50vw;
  height: 100%;
  position: relative;
  right: 0;
  margin-left: auto;
  font-family: ${theme.fonts.JosefinSlab};
  box-shadow: -2px 0px 4px ${theme.colors.teal};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;

const NavLinks = styled(Nav)`
  ${mixins.flexAround};
  flex-direction: column;
  text-align: center;
  height: 60%;
`;
const NavList = styled.ol`
  width: 100%;
  ${media.phablet`margin-bottom: 3rem;`};
`;

const NavListItem = styled.li<any>`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${theme.fontSizes.large};
  color: ${({ isCurrRoute }) => isCurrRoute && theme.colors.orange};
  ${media.thone`
    margin: 1rem auto 1.5rem auto;
    font-size: ${theme.fontSizes.medium};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.xlarge};
  `};
`;

// const NavLink = styled(Link)`
//   padding: 3px 20px 20px;
//   width: 100%;
// `;
const NavLinkSelectedUnderline = styled.div<any>`
  height: 2px;
  background-color: ${({ isCurrRoute }) => isCurrRoute && theme.colors.orange};
`;

const SocialContainer = styled.div`
  color: ${theme.colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto;
  ${media.tablet`display: block;`};
`;

const SocialItemList = styled.ul`
  ${mixins.flexCenter};
`;

const SocialItem = styled.li``;
interface SocialLinkProps {
  name: string;
}

const SocialLink = styled.a<SocialLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  border: solid 2px ${theme.colors.white};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 10px;
  padding: 10px;
  transform: translateY(
    ${(props: any) =>
      props.scrollDirection === "down" ? `-${theme.headerScrollHeight}` : "0px"}
  );
  svg {
    width: ${(props: any) => (props.name === "Instagram" ? `23px` : "20px")};
    height: ${(props: any) => (props.name === "Instagram" ? `23px` : "20px")};
  }
  i {
    font-weight: bold;
    font-size: 1.25rem;
  }
  &:hover {
    color: ${theme.colors.orange} !important;
    border: solid 2px ${theme.colors.orange};
  }
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
  MenuContainer,
  Sidebar,
  NavLinks,
  NavList,
  NavListItem,
  // NavLink,
  NavLinkSelectedUnderline,
  SocialContainer,
  SocialItemList,
  SocialItem,
  SocialLink,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
};
