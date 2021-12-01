import Link from "next/link";

import styled from "styled-components";

import { theme, mixins, media, Nav } from "styles";

export default function Menu(props: any) {
  const { isHome, menuOpen, navLinks, location, toggleMenu } = props;

  return (
    <MenuContainer
      menuOpen={menuOpen}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          {isHome && (
            <NavList>
              {navLinks &&
                navLinks.map(({ path, name }: any, i: number) => {
                  const isCurrentRoute = location && location.pathname === path;
                  return (
                    <NavListItem key={name} onClick={toggleMenu}>
                      <NavLink href={path}>
                        <a>
                          {name}
                          {isCurrentRoute && (
                            <div
                              style={{
                                height: "2px",
                                backgroundColor: "white",
                              }}
                            />
                          )}
                        </a>
                      </NavLink>
                    </NavListItem>
                  );
                })}
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
  box-shadow: -2px 0px 4px ${theme.colors.teal};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;
const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;
const NavList = styled.ol`
  width: 100%;
  ${media.phablet`margin-bottom: 3rem;`};
`;
const NavListItem = styled.li`
  margin: 0 auto 20px;
  position: relative;
  font-size: ${theme.fontSizes.large};
  ${media.thone`
    margin: 3rem auto;
    font-size: ${theme.fontSizes.medium};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.xlarge};
  `};
`;
const NavLink = styled(Link)`
  //   ${mixins.link};
  padding: 3px 20px 20px;
  width: 100%;
`;
