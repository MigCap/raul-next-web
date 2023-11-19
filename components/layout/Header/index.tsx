import Link from "next/link";

import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import LocaleSelector from "components/layout/Header/LocaleSelector";
import MenuMobile from "components/layout/Header/MenuMobile";

import { Logo } from "components/Icons";

import { useCustomRouter as useRouter } from "hooks";

import {
  getRoutePathById,
  locales as localesConfig,
  routesConfig as navLinks,
  ROUTES_IDS,
  scaleAndTab,
} from "lib";

import {
  // Section,
  Navbar,
  NavLogoContainer,
  NavLinks,
  NavList,
  NavListItem,
  // NavLink,
  NavLinkSelectedUnderline,
  HeaderContainer,
  LocaleSelectorDescktop,
} from "./styles";

import { useMenu } from "./useMenu";

export default function Header() {
  const {
    router: { locale },
    isHomePage,
    isCurrentRoute,
  } = useRouter();

  const { scrollDirection, isMounted, headerRef, logoRef, listItemRef } =
    useMenu();

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
                <Link legacyBehavior href={getRoutePathById(ROUTES_IDS.HOME)}>
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
        <NavLinks>
          <NavList>
            <TransitionGroup>
              {isMounted &&
                navLinks &&
                navLinks.map((route: any, i: number) => {
                  const { path, name, id } = route;
                  const isCurrRoute = isCurrentRoute(id);
                  if (route?.hide) return null;
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
                        <Link legacyBehavior href={path}>
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
                        </Link>
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
      <MenuMobile />
    </HeaderContainer>
  );
}
