import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { socialMedia } from "lib";

import { IconLinkedin } from "components/icons";

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
            <SocialItemList ref={nodeRef}>
              {socialMedia &&
                socialMedia.map(({ url, name }: any, i: number) => (
                  <SocialItem key={i}>
                    <SocialLink
                      href={url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label={name}
                    >
                      {name === "Linkedin" ? <IconLinkedin /> : <></>}
                    </SocialLink>
                  </SocialItem>
                ))}
            </SocialItemList>
          </CSSTransition>
        )}
      </TransitionGroup>
    </SocialContainer>
  );
}

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${theme.colors.teal};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`;
const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${theme.colors.teal};
  }
`;
const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    color: ${theme.colors.grey};
  }
`;
