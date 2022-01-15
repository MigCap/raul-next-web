import Link from "next/link";
import styled from "styled-components";

import { media, mixins, Nav, theme } from "styles";

interface MenuContainerProps {
  menuOpen: any;
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
  transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")};
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

const NavLink = styled(Link)`
  padding: 3px 20px 20px;
  width: 100%;
`;
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

export {
  MenuContainer,
  Sidebar,
  NavLinks,
  NavList,
  NavListItem,
  NavLink,
  NavLinkSelectedUnderline,
  SocialContainer,
  SocialItemList,
  SocialItem,
  SocialLink,
};
