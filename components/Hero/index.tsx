import { useState, useEffect, useRef } from "react";

// import Image from "next/

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { about } from "lib";

import { theme, mixins, media, Section } from "styles";

export default function Hero() {
  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const nodeRef = useRef(null);

  const One = () => <Title>{about.position}</Title>;
  const Two = () => <Subtitle>{about.positionDescription}</Subtitle>;

  return (
    <>
      <HeroContainer>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition nodeRef={nodeRef} classNames="fadeup" timeout={3000}>
              <div ref={nodeRef}>
                <One />
                <Two />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </HeroContainer>
    </>
  );
}

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;

  min-height: 100vh;
  ${media.desktop`min-height: 50vh;`};

  padding: 0 1rem;
  ${media.desktop`padding-top: 120px;`};

  background: #6bb0b2 url("/assets/Picture Background.jpg") no-repeat fixed
    center;
  background-blend-mode: multiply;
  div {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  color: ${theme.colors.white};
  ${media.desktop`font-size: 80px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 50px;`};
`;
const Subtitle = styled.h3`
  color: ${theme.colors.white};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${theme.fontSizes.large};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;
