import { useState, useEffect, useRef } from "react";

// import Image from "next/

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { about } from "lib";

import { theme, mixins, media, Section } from "styles";

// import styles from "./Hero.module.css";

export default function Hero() {
  const [isMounted, setIsMounted] = useState<any>(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const nodeRef = useRef(null);

  const One = () => (
    <Hi style={{ transitionDelay: "300ms" }}>{about.positionDescription}</Hi>
  );
  // const Two = () => (
  //   <Name style={{ transitionDelay: "200ms" }}>{about.position}.</Name>
  // );
  const Three = () => (
    <Subtitle style={{ transitionDelay: "100ms" }}>{about.position}</Subtitle>
  );

  // const items = [Two, Three];

  return (
    <>
      <HeroContainer>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition nodeRef={nodeRef} classNames="fadeup" timeout={3000}>
              <div ref={nodeRef}>
                <Three />
                <One />
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
  // margin-top: ${theme.headerScrollHeight};
  min-height: 100vh;
  padding: 0 1rem;

  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
  background: #6bb0b2 url("/assets/Picture Background.jpg") no-repeat fixed
    center;
  background-blend-mode: multiply;
`;
const Hi = styled.h1`
  color: ${theme.colors.white};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${theme.fontSizes.xlarge};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${theme.colors.white};
  ${media.desktop`font-size: 100px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`;
const EmailLink = styled.a`
  ${mixins.bigButton};
  font-size: ${theme.fontSizes.smallish};
  margin-top: 50px;
`;
