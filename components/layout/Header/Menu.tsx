import Link from "next/link";

import styled from "styled-components";

import { theme, mixins, media, Nav } from "styles";

export default function Menu(props: any) {
  const { isHome, menuOpen, navLinks, handleMenuClick } = props;

  return (
    <MenuContainer
      menuOpen={menuOpen}
      onClick={handleMenuClick}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          {isHome && (
            <NavList>
              {navLinks &&
                navLinks.map(({ path, name }: any, i: number) => (
                  <NavListItem key={name}>
                    <NavLink href={path}>
                      <a>{name}</a>
                    </NavLink>
                  </NavListItem>
                ))}
            </NavList>
          )}
        </NavLinks>
      </Sidebar>
    </MenuContainer>
  );
}

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
  font-family: ${theme.fonts.SFMono};
  box-shadow: -2px 0px 4px ${theme.colors.transNavy};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 100vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${theme.fontSizes.large};
  //   counter-increment: item 1;
  ${media.thone`
    margin: 3rem auto;
    // margin: 0 auto 10px;
    font-size: ${theme.fontSizes.medium};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.xlarge};
  `};
  //   &:before {
  //     display: block;
  //     content: "0" counter(item) ".";
  //     color: ${theme.colors.green};
  //     font-size: ${theme.fontSizes.small};
  //     margin-bottom: 5px;
  //   }
`;
const NavLink = styled(Link)`
  //   ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;
