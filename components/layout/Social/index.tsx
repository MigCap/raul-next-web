import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { socialMedia } from "lib";

import { IconLinkedin } from "components/Icons";

import { theme, media } from "styles";

export default function Social() {
  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const nodeRef = useRef(null);

  return (
    <SocialContainer>
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

const SocialContainer = styled.div`
  position: absolute;
  width: 40px;
  height: 496px;
  left: 40px;
  top: 568px;
  z-index: 2;

  color: ${theme.colors.teal};
  ${media.desktop`
    position: fixed;
    left: 25px;
    top: auto;
    bottom: 0;
    height: 400px;
  `};
  ${media.tablet`display: none;`};
`;
const SocialContent = styled.div`
  display: flex;
  justify-content: center;
`;
const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;
const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  content: "";
  display: block;
  width: 3px;
  height: 100%;
  margin: 0 auto;
  background-color: ${theme.colors.teal};
  position: absolute;
  bottom: 0;
  z-index: 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  ${media.tablet`filter: none;`};
`;
const SocialItem = styled.li`
  margin-bottom: 1.2rem;
  &:first-of-type {
    margin-top: 2rem;
  }
  &:last-of-type {
    margin-bottom: 5rem;
  }
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
    font-weight: bold;
    font-size: 1.25rem;
  }
  &:hover {
    color: ${theme.colors.grey};
  }
`;
