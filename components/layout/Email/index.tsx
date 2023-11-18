import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { about } from "lib";

import { theme, media } from "styles";

export default function Email() {
  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const nodeRef = useRef(null);

  return (
    <EmailContainer>
      <TransitionGroup>
        {isMounted && (
          <CSSTransition nodeRef={nodeRef} timeout={3000} classNames="fade">
            <EmailLinkWrapper ref={nodeRef}>
              <EmailLink href={`mailto:${about?.contactMail}`}>
                {about?.contactMail}
              </EmailLink>
            </EmailLinkWrapper>
          </CSSTransition>
        )}
      </TransitionGroup>
    </EmailContainer>
  );
}

const EmailContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 40px;
  color: ${theme.colors.teal};
  ${media.desktop`right: 25px;`};
  ${media.tablet`display: none;`};
  div {
    width: 100%;
    margin: 0 auto;
  }
`;
const EmailLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${theme.colors.teal};
  }
`;
const EmailLink = styled.a`
  font-family: ${theme.fonts.Karla};
  font-size: ${theme.fontSizes.xsmall};
  letter-spacing: 0.5px;
  writing-mode: vertical-rl;
  margin: 20px auto;
  padding: 10px;
  &:hover {
    color: ${theme.colors.grey};
  }
`;
