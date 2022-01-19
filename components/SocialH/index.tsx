import { useEffect, useState, useRef } from "react";

import { useRouter } from "next/router";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { Interpolation } from "styled-components";

import { socialMedia, getRoutePathById, ROUTES_IDS } from "lib";

import { theme, media } from "styles";

type SocialHProps = {
  styles?: Interpolation<React.CSSProperties>;
};

export default function SocialH({ styles = {} }: SocialHProps) {
  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const { pathname } = useRouter();
  const isHomePage = pathname === getRoutePathById(ROUTES_IDS.HOME);

  const nodeRef = useRef(null);

  return (
    <SocialContainer isHomePage={isHomePage} styles={styles}>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition nodeRef={nodeRef} timeout={3000} classNames="fade">
            <SocialContent>
              <SocialItemList ref={nodeRef}>
                {socialMedia &&
                  socialMedia.map(
                    ({ url, name, Icon, icon }: any, i: number) => (
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
                    )
                  )}
              </SocialItemList>
              <Line />
            </SocialContent>
          </CSSTransition>
        )}
      </TransitionGroup>
    </SocialContainer>
  );
}

const SocialContainer = styled.div<{ isHomePage: boolean; styles: any }>`
  margin: 4rem 0;
  color: ${theme.colors.teal};
  ${media.desktop`display: none;`};
  ${({ styles }) => styles}
`;
const SocialContent = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const SocialItemList = styled.ul`
  display: flex;
  align-items: center;
  z-index: 1;
`;
const Line = styled.div`
  display: flex;
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  margin: auto 0;
  background-color: ${theme.colors.teal};
  position: absolute;
  left: 0;
  top: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  ${media.tablet`filter: none;`};
`;
const SocialItem = styled.li`
  margin: 0.5rem;
`;
interface SocialLinkProps {
  name: string;
}
const SocialLink = styled.a<SocialLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

  background-color: ${theme.colors.white};
  border: solid 2px ${theme.colors.bronze};
  border-radius: 50%;
  width: 50px;
  height: 50px;

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
    font-weight: bold !important;
    font-size: 1.25rem !important;
  }
  &:hover {
    color: ${theme.colors.bronze};
  }
`;
