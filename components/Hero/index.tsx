import { useState, useEffect, useRef } from "react";

// import Image from "next/

import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { about } from "lib";

import { theme, mixins, media, Section } from "styles";

import Blob from "./Blob";

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
                  {/* <BlobContainer>
                    <Blob />
                  </BlobContainer> */}

                  <div ref={nodeRef}>
                    <One />
                    <Two />
                  </div>
                </HeroContent>
              </>
            </CSSTransition>
          )}
        </TransitionGroup>
      </HeroContainer>

      <SectionSeparatorContainer>
        <SectionSeparator>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path d="M0,160L60,181.3C120,203,240,245,360,250.7C480,256,600,224,720,181.3C840,139,960,85,1080,106.7C1200,128,1320,224,1380,272L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </SectionSeparator>
      </SectionSeparatorContainer>
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

  // background: ${theme.colors.teal};
  background: url("/assets/pattern_flower.png") no-repeat fixed center;
  // background-blend-mode: multiply;
`;
const HeroContent = styled.div`
  padding: 0 0.5rem 0 5rem;
  ${media.desktop`padding: 0 20px;`};
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
const SectionSeparatorContainer = styled.div`
  ${mixins.flexCenter};
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 1000px;
  display: inline-block;
  ${media.tablet`padding: 0;`};
  position: absolute;
`;
const SectionSeparator = styled.div`
  width: 100%;
  height: 5vh;
  padding: 0;
  margin: 0;
  display: inline-block;
  position: relative;
  background-color: ${theme.colors.white};

  svg {
    display: block;
    background: 0 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    -webkit-transform: translateY(-100%) translateY(2px);
    // transform: translateY(-100%) translateY(2px);
    width: 100%;
    transform: translateY(-100%) translateY(2px) scale(1, 1);
    transform-origin: top;
    fill: ${theme.colors.white};
  }
`;
