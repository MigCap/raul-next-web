import { useRouter } from "next/router";

import LocaleSelector from "components/layout/Header/LocaleSelector";

import { isCurrentRoute, socialMedia, locales as localesConfig } from "lib";

import {
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
} from "./styles";

export default function MenuMobile(props: any) {
  const { menuOpen, navLinks, location, toggleMenu } = props;
  const { locale } = useRouter();

  return (
    <MenuContainer
      menuOpen={menuOpen}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <Sidebar>
        <NavLinks>
          <NavList>
            {navLinks &&
              navLinks.map(({ path, name, id }: any) => {
                const isCurrRoute = isCurrentRoute(location, id);

                return (
                  <NavListItem
                    key={`${name}-${id}`}
                    onClick={toggleMenu}
                    isCurrRoute={isCurrRoute}
                  >
                    <NavLink href={path}>
                      <a>
                        {name[locale || localesConfig[0]]}
                        {isCurrRoute && (
                          <NavLinkSelectedUnderline isCurrRoute={isCurrRoute} />
                        )}
                      </a>
                    </NavLink>
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
  );
}
