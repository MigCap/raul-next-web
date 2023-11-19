import Link from "next/link";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import LocaleSelector from "components/layout/Header/LocaleSelector";

import { useCustomRouter as useRouter } from "hooks";

import {
  socialMedia,
  locales as localesConfig,
  routesConfig as navLinks,
} from "lib";

import { useMenu } from "../useMenu";

import {
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
} from "./styles";

export default function MenuMobile() {
  const {
    router: { locale },
    isCurrentRoute,
  } = useRouter();

  const { isMounted, isMobileMenuOpen, toggleMenu, hamburgerRef } = useMenu();

  return (
    <>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition
            classNames="fade"
            timeout={3000}
            nodeRef={hamburgerRef}
          >
            <Hamburger onClick={toggleMenu} ref={hamburgerRef}>
              <HamburgerBox>
                <HamburgerInner menuOpen={isMobileMenuOpen} />
              </HamburgerBox>
            </Hamburger>
          </CSSTransition>
        )}
      </TransitionGroup>

      <MenuContainer
        isMobileMenuOpen={isMobileMenuOpen}
        aria-hidden={!isMobileMenuOpen}
        tabIndex={isMobileMenuOpen ? 1 : -1}
      >
        <Sidebar>
          <NavLinks>
            <NavList>
              {navLinks &&
                navLinks.map(({ path, name, id }: any) => {
                  const isCurrRoute = isCurrentRoute(id);
                  return (
                    <NavListItem
                      key={`${name}-${id}`}
                      onClick={toggleMenu}
                      isCurrRoute={isCurrRoute}
                    >
                      <Link legacyBehavior href={path}>
                        <a>
                          {name[locale || localesConfig[0]]}
                          {isCurrRoute && (
                            <NavLinkSelectedUnderline
                              isCurrRoute={isCurrRoute}
                            />
                          )}
                        </a>
                      </Link>
                    </NavListItem>
                  );
                })}
            </NavList>

            <LocaleSelector />

            <SocialContainer>
              <SocialItemList>
                {socialMedia &&
                  socialMedia.map(({ name, url, icon, Icon }, i) => {
                    return (
                      <SocialItem key={i}>
                        <SocialLink
                          href={url}
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          aria-label={name}
                          name={name}
                        >
                          {Icon ? (
                            <Icon />
                          ) : icon ? (
                            <i className={icon} />
                          ) : (
                            <></>
                          )}
                        </SocialLink>
                      </SocialItem>
                    );
                  })}
              </SocialItemList>
            </SocialContainer>
          </NavLinks>
        </Sidebar>
      </MenuContainer>
    </>
  );
}
