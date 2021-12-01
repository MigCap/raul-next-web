import { useCallback, useEffect, useState, useRef } from "react";

import Link from "next/link";
// import Router from "next/router";

import styled from "styled-components";
import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Logo } from "components/Icons";

import {
  // about,
  headerHeight,
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

  const headerRef = useRef(null);
  const nodeRef = useRef(null);

  return (
    <HeaderContainer ref={headerRef} scrollDirection={scrollDirection}>
      <Navbar>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition nodeRef={nodeRef} classNames="fade" timeout={3000}>
              <div ref={nodeRef}>
                <Link href="/">
                  <a>
                    <motion.div
                      variants={scaleAndTab}
                      style={{ width: "3.5rem" }}
                    >
                      <Logo />
                    </motion.div>
                  </a>
                </Link>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>

        <NavLinks>
          <NavList>
            <TransitionGroup>
              {isMounted &&
                navLinks &&
                navLinks.map(({ path, name }: any, i: number) => {
                  const isCurrentRoute = location && location.pathname === path;

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
                      >
                        <NavLink href={path}>
                          <a>
                            <p style={{ margin: 0 }}>{name}</p>
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
                    </CSSTransition>
                  );
                })}
            </TransitionGroup>
          </NavList>
        </NavLinks>

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
      </Navbar>

      <Menu
        isHome={true}
        navLinks={navLinks}
        menuOpen={menuOpen}
        handleMenuClick={(e: any) => {}}
      />
    </HeaderContainer>
  );
}

const DELTA = 5;

interface IHeaderContainer {
  ref: any;
  scrollDirection: any;
}

interface INavListItem {
  nodeRef: any;
  key: any;
  style: any;
}

const HeaderContainer = styled.header<IHeaderContainer>`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  padding: 0px 50px;
  background-color: ${theme.colors.teal};
  transition: ${theme.transition};
  z-index: 11;
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
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};

  a {
    &:hover,
    &:focus {
      color: ${theme.colors.lightestSlate};
      outline: 0;
    }
  }
`;
const Navbar = styled(Nav)`
  ${mixins.flexBetween};
  font-family: ${theme.fonts.SFMono};
  color: ${theme.colors.white};
  counter-reset: item 0;
  position: relative;
  z-index: 12;
`;
// const Logo = styled.div`
//   ${mixins.flexCenter};
//   p {
//     color: ${theme.colors.teal};
//     font-weight: 500;
//     margin: 0 0 0 10px;
//     &:hover {
//       color: ${theme.colors.lightSlate};
//     }
//   }
// `;
const LogoLink = styled(Link)`
  color: ${theme.colors.green};
  width: 42px;
  height: 42px;
  &:hover,
  &:focus {
    svg {
      fill: ${theme.colors.transGreen};
    }
  }
  svg {
    fill: none;
    transition: ${theme.transition};
    user-select: none;
  }
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
  height: 2px;
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
    height: 2px;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }
  &:before {
    width: ${(props: any) => (props.menuOpen ? `100%` : `120%`)};
    top: ${(props: any) => (props.menuOpen ? `0` : `-10px`)};
    opacity: ${(props: any) => (props.menuOpen ? 0 : 1)};
    transition: ${(props: any) =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }
  &:after {
    width: ${(props: any) => (props.menuOpen ? `100%` : `80%`)};
    bottom: ${(props: any) => (props.menuOpen ? `0` : `-10px`)};
    transform: rotate(${(props: any) => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${(props: any) =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
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
const NavListItem = styled.li<INavListItem>`
  margin: 0 1.2rem;
  position: relative;
  font-size: ${theme.fontSizes.smallish};
`;
const NavLink = styled(Link)`
  padding: 1rem 1.2rem;
`;
const ResumeButton = styled.div``;
const ResumeLink = styled.a`
  ${mixins.smallButton};
  margin-left: 10px;
  font-size: ${theme.fontSizes.smallish};
  svg {
    padding-left: 5px;
    width: 15px;
    height: 15px;
  }
`;
