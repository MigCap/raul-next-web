import { useCallback, useEffect, useState, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import styled from "styled-components";
import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Logo } from "components/Icons";

import {
  headerHeight,
  isCurrentRoute,
  routesConfig as navLinks,
  scaleAndTab,
  throttle,
} from "lib";

import { theme, mixins, media, Nav } from "styles";

import Menu from "./Menu";

export default function Header({ location }: any) {
  const [lastScrollTop, setLastScrollTop] = useState<any>(0);
  const [scrollDirection, setScrollDirection] = useState<any>("none");
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => throttle(handleScroll()));
    window.addEventListener("resize", () => throttle(handleResize()));
    window.addEventListener("keydown", (e) => handleKeydown(e));

    const timeout = setTimeout(() => setIsMounted(true), 100);

    return () => {
      window.removeEventListener("scroll", () => handleScroll());
      window.removeEventListener("resize", () => handleResize());
      window.removeEventListener("keydown", (e) => handleKeydown(e));

      clearTimeout(timeout);
    };
  }, []);

  const handleScroll = useCallback(() => {
    const fromTop = window.scrollY;

    // Make sure they scroll more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      setScrollDirection("none");
    } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
      if (scrollDirection !== "down") {
        setScrollDirection("down");
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== "up") {
        setScrollDirection("up");
      }
    }

    setLastScrollTop(fromTop);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 768 && menuOpen) {
      toggleMenu();
    }
  }, []);

  const handleKeydown = useCallback((evt: any) => {
    if (!menuOpen) {
      return;
    }

    if (evt.key === "Escape" || evt.key === "Esc") {
      toggleMenu();
    }
  }, []);

  const toggleMenu = useCallback(
    () => setMenuOpen((prevMenuOpen: boolean) => !prevMenuOpen),
    []
  );

  const router = useRouter();
  const isHomePage = router?.pathname === "/";

  const headerRef = useRef(null);
  const nodeRef = useRef(null);

  return (
    <HeaderContainer
      ref={headerRef}
      scrollDirection={scrollDirection}
      isHomePage={isHomePage}
    >
      <Navbar isHomePage={isHomePage}>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition nodeRef={nodeRef} classNames="fade" timeout={3000}>
              <NavLogoContainer ref={nodeRef}>
                <Link href="/">
                  <a>
                    <motion.div variants={scaleAndTab}>
                      <Logo />
                    </motion.div>
                  </a>
                </Link>
              </NavLogoContainer>
            </CSSTransition>
          )}
        </TransitionGroup>

        <TransitionGroup>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <Hamburger onClick={toggleMenu}>
                <HamburgerBox>
                  <HamburgerInner menuOpen={menuOpen} />
                </HamburgerBox>
              </Hamburger>
            </CSSTransition>
          )}
        </TransitionGroup>

        <NavLinks>
          <NavList>
            <TransitionGroup>
              {isMounted &&
                navLinks &&
                navLinks.map(({ path, name, id }: any, i: number) => {
                  const isCurrRoute = isCurrentRoute(location, id);

                  return (
                    <CSSTransition
                      nodeRef={nodeRef}
                      key={i}
                      classNames="fadedown"
                      timeout={3000}
                    >
                      <NavListItem
                        nodeRef={nodeRef}
                        key={i}
                        style={{ transitionDelay: `${i * 100}ms` }}
                        isCurrRoute={isCurrRoute}
                      >
                        <NavLink href={path}>
                          <a>
                            <p className="p-m-0">{name}</p>
                            {isCurrRoute && (
                              <NavLinkSelectedUnderline
                                isCurrRoute={isCurrRoute}
                              />
                            )}
                          </a>
                        </NavLink>
                      </NavListItem>
                    </CSSTransition>
                  );
                })}
            </TransitionGroup>
          </NavList>
        </NavLinks>
      </Navbar>

      <Menu
        navLinks={navLinks}
        menuOpen={menuOpen}
        location={location}
        toggleMenu={toggleMenu}
      />
    </HeaderContainer>
  );
}

const DELTA = 5;

interface IHeaderContainer {
  ref: any;
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
  background-color: ${({ isHomePage }) =>
    isHomePage ? "transparent" : theme.colors.teal};
  transition: ${theme.transition};
  z-index: 10;
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  width: 100%;import { useEffect } from 'react';

  height: ${(props: any) =>
    props.scrollDirection === "none"
      ? theme.headerHeight
      : theme.headerScrollHeight};
  box-shadow: ${(props: any) =>
    props.scrollDirection === "up"
      ? `0 2px 4px ${theme.colors.transGreen}`
      : "none"};
  transform: translateY(
    ${(props: any) =>
      props.scrollDirection === "down" ? `-${theme.headerScrollHeight}` : "0px"}
  );
`;
const Navbar = styled(Nav)<any>`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.SFMono};
  color: ${({ isHomePage }) =>
    isHomePage ? theme.colors.dark : theme.colors.white};
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
  nodeRef: any;
  key: any;
  style: any;
  isCurrRoute: any;
}
const NavListItem = styled.li<INavListItem>`
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

const Hamburger = styled.div`
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
