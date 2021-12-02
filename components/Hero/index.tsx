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
            <CSSTransition nodeRef={nodeRef} className="fadeup" timeout={3000}>
              <>
                <HeroContent>
                  <BlobContainer>
                    <Blob />
                  </BlobContainer>
                  <div ref={nodeRef}>
                    <One />
                    <Two />
                  </div>
                </HeroContent>
                <CustomDividerTop>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </CustomDividerTop>
                <CustomDivider>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                  </svg>
                </CustomDivider>
              </>
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

  // padding: 0 1rem;
  padding: 0;
  ${media.desktop`padding-top: 120px;`};

  // background: #6bb0b2 url("/assets/pattern_flower.png") no-repeat fixed center;
  // background-blend-mode: multiply;
`;
const CustomDividerTop = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 130px;
    transform: rotateY(180deg);
    fill: ${theme.colors.teal};
    // opacity: 0.5;
  }
`;
const CustomDivider = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 130px;
    transform: rotateY(180deg);
    fill: ${theme.colors.teal};
    // opacity: 0.5;
  }
  ${media.tablet`svg {
    width: calc(100% + 1.3px);
    height: 44px;
}`};
`;
const HeroContent = styled.div`
  padding: 0 0.5rem 0 5rem;
  ${media.desktop`padding: 0 0;`};
`;

const BlobContainer = styled.div`
  overflow-x: hidden;
  position: absolute;
  svg {
    position: relative;
    // top: 5.5rem;
    left: 2.5rem;
    width: 100%;
    // height: 100%;
    z-index: -1;
    fill: ${theme.colors.teal};
    // opacity: 0.5;
    // transform: translate(50px 50px);
  }
  // ${media.desktop`
  //   svg {
  //     // position: absolute;
  //     // top: 5.5rem;
  //     left: 2.5rem;
  //     // // width: 30rem;
  //     // // height: auto;
  //     // width: 85%;
  //     // height: 50%;
  // }             
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
