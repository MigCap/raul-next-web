import { useCallback, useEffect, useState, useRef } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { Logo } from "components/Icons";

import {
  headerHeight,
  isCurrentRoute,
  locales as localesConfig,
  routesConfig as navLinks,
  scaleAndTab,
  throttle,
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
} from "./styles";

import Menu from "./Menu";
import LocaleSelector from "./LocaleSelector";

const DELTA = 5;

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

  const { pathname, locale } = useRouter();
  const isHomePage = pathname === "/";

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

        <LocaleSelector />
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
