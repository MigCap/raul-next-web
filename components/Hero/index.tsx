import { useState, useEffect, useRef } from "react";

// import Image from "next/

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import Blob from "./Blob";

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
              <HeroContent>
                <BlobContainer>
                  <Blob />
                </BlobContainer>
                <div ref={nodeRef}>
                  <One />
                  <Two />
                </div>
              </HeroContent>
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
  ${media.desktop`min-height: 60vh;`};

  padding: 0 1rem;
  ${media.desktop`padding-top: 120px;`};

  // background: #6bb0b2 url("/assets/Picture Background.jpg") no-repeat fixed
  //   center;
  // background: #6bb0b2 url("/assets/pattern_flower.png") no-repeat fixed center;
  // background-blend-mode: multiply;
`;
const HeroContent = styled.div`
  margin: 0 0.5rem 0 5rem;
`;

const BlobContainer = styled.div`
  svg {
    position: absolute;
    top: 5.5rem;
    left: 2.5rem;
    width: 75%;
    height: 80%;
    z-index: -1;
  }
  ${media.desktop`
    svg {
      position: absolute;
      top: 5.5rem;
      left: 2.5rem;
      // width: 30rem;
      // height: auto;
      width: 85%;
      height: 50%;
    }             
  `};
`;
const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 80px;
  line-height: 1.1;
  text-transform: uppercase;
  color: ${theme.colors.dark};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 50px;`};
`;
const Subtitle = styled.h2`
  color: ${theme.colors.dark};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${theme.fontSizes.xlarge};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;
