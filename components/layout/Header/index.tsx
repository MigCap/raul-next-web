import { useCallback, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Logo } from "components/Icons";

import {
  headerHeight,
  DeviceSize,
  isCurrentRoute,
  locales as localesConfig,
  routesConfig as navLinks,
  scaleAndTab,
  throttle,
  debounce,
  getRoutePathById,
  ROUTES_IDS,
} from "lib";

import {
  Navbar,
  NavLogoContainer,
  NavLinks,
  NavList,
  NavListItem,
  NavLink,
  NavLinkSelectedUnderline,
  Hamburger,
  HamburgerBox,
  HamburgerInner,
  HeaderContainer,
  LocaleSelectorDescktop,
} from "./styles";

import LocaleSelector from "components/layout/Header/LocaleSelector";
import MenuMobile from "./MenuMobile";

const DELTA = 5;

export default function Header({ location }: any) {
  const { pathname, locale } = useRouter();
  const isHomePage = pathname === getRoutePathById(ROUTES_IDS.HOME);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const hamburgerRef = useRef(null);
  const listItemRef = useRef(null);

  const [lastScrollTop, setLastScrollTop] = useState<any>(0);
  const [scrollDirection, setScrollDirection] = useState<any>("none");
  const [menuOpen, setMenuOpen] = useState<any>(false);
  const [isMounted, setIsMounted] = useState<any>(false);

  const handleScroll = useCallback(
    debounce(() => {
      const fromTop = window.scrollY;

      // Make sure they scroll more than DELTA
      if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
        return;
      }

      // console.log(`🚀 ~ debounce ~ fromTop < DELTA`, fromTop < DELTA);
      // console.log(
      //   `🚀 ~ debounce ~ fromTop > lastScrollTop && fromTop > headerHeight`,
      //   fromTop > lastScrollTop && fromTop > headerHeight
      // );
      // console.log(
      //   `🚀 ~ debounce ~ fromTop + window.innerHeight < document.body.scrollHeight`,
      //   fromTop + window.innerHeight < document.body.scrollHeight
      // );

      // console.log(`🚀 ~ debounce ~ fromTop`, fromTop);
      // console.log(`🚀 ~ debounce ~ lastScrollTop`, lastScrollTop);
      // console.log(`🚀 ~ debounce ~ headerHeight`, headerHeight);
      // console.log(`🚀 ~ debounce ~ window.innerHeight`, window.innerHeight);
      // console.log(
      //   `🚀 ~ debounce ~ document.body.scrollHeight`,
      //   document.body.scrollHeight
      // );
      // console.log(
      //   `🚀 ~ debounce ~ document.body.getBoundingClientRect().top`,
      //   document.body.getBoundingClientRect().top
      // );

      // if (isMounted) {
      if (fromTop < DELTA) {
        setScrollDirection("none");
      } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
        setScrollDirection((pevScrollDirection: any) =>
          pevScrollDirection !== "down" ? "down" : pevScrollDirection
        );
      } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
        setScrollDirection((pevScrollDirection: any) =>
          pevScrollDirection !== "up" ? "up" : pevScrollDirection
        );
      }

      setLastScrollTop(fromTop);
      // }
    }, 100),
    [isMounted]
  );

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

  const handleResize = useCallback(() => {
    if (window.innerWidth > DeviceSize?.mobile && menuOpen) {
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

  const toggleMenu = useCallback(() => {
    if (!isMounted) return;
    setMenuOpen((prevMenuOpen: boolean) => !prevMenuOpen);
  }, [isMounted]);

  return (
    <HeaderContainer
      ref={headerRef}
      scrollDirection={scrollDirection}
      isHomePage={isHomePage}
    >
      <Navbar isHomePage={isHomePage}>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition nodeRef={logoRef} classNames="fade" timeout={3000}>
              <NavLogoContainer ref={logoRef}>
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
            <CSSTransition
              classNames="fade"
              timeout={3000}
              nodeRef={hamburgerRef}
            >
              <Hamburger onClick={toggleMenu} ref={hamburgerRef}>
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
                      key={i}
                      nodeRef={listItemRef}
                      classNames="fadedown"
                      timeout={3000}
                    >
                      <NavListItem
                        // ref={listItemRef}
                        style={{ transitionDelay: `${i * 100}ms` }}
                        isCurrRoute={isCurrRoute}
                      >
                        <NavLink href={path}>
                          <a>
                            <p className="p-m-0">
                              {name[locale || localesConfig[0]]}
                            </p>
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
        <LocaleSelectorDescktop>
          <LocaleSelector />
        </LocaleSelectorDescktop>
      </Navbar>
      <MenuMobile
        navLinks={navLinks}
        menuOpen={menuOpen}
        location={location}
        toggleMenu={toggleMenu}
      />
    </HeaderContainer>
  );
}
