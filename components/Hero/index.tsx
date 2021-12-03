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
      <SectionSeparatorContainerDown>
        <SectionSeparatorDown>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              d="M0 154L21.5 151.2C43 148.3 86 142.7 128.8 137.8C171.7 133 214.3 129 257.2 128C300 127 343 129 385.8 133.7C428.7 138.3 471.3 145.7 514.2 146.3C557 147 600 141 642.8 142C685.7 143 728.3 151 771.2 153.2C814 155.3 857 151.7 878.5 149.8L900 148L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#6bb0b2"
            ></path>
            <path
              d="M0 125L21.5 122.2C43 119.3 86 113.7 128.8 112.3C171.7 111 214.3 114 257.2 115C300 116 343 115 385.8 111.8C428.7 108.7 471.3 103.3 514.2 101.5C557 99.7 600 101.3 642.8 101.5C685.7 101.7 728.3 100.3 771.2 98.2C814 96 857 93 878.5 91.5L900 90L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#8fbfbb"
            ></path>
            <path
              d="M0 60L21.5 60.7C43 61.3 86 62.7 128.8 61C171.7 59.3 214.3 54.7 257.2 51.5C300 48.3 343 46.7 385.8 48.3C428.7 50 471.3 55 514.2 59.8C557 64.7 600 69.3 642.8 70.7C685.7 72 728.3 70 771.2 68.3C814 66.7 857 65.3 878.5 64.7L900 64L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              fill="#b0cec7"
            ></path>
          </svg>
        </SectionSeparatorDown>
      </SectionSeparatorContainerDown>

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

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path d="M0,160L60,181.3C120,203,240,245,360,250.7C480,256,600,224,720,181.3C840,139,960,85,1080,106.7C1200,128,1320,224,1380,272L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg> */}

      <SectionSeparatorContainer>
        <SectionSeparator>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="none"
          >
            <path
              d="M0 444L21.5 446.8C43 449.7 86 455.3 128.8 460.2C171.7 465 214.3 469 257.2 470C300 471 343 469 385.8 464.3C428.7 459.7 471.3 452.3 514.2 451.7C557 451 600 457 642.8 456C685.7 455 728.3 447 771.2 444.8C814 442.7 857 446.3 878.5 448.2L900 450L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#6bb0b2"
            ></path>
            <path
              d="M0 473L21.5 475.8C43 478.7 86 484.3 128.8 485.7C171.7 487 214.3 484 257.2 483C300 482 343 483 385.8 486.2C428.7 489.3 471.3 494.7 514.2 496.5C557 498.3 600 496.7 642.8 496.5C685.7 496.3 728.3 497.7 771.2 499.8C814 502 857 505 878.5 506.5L900 508L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#8fbfbb"
            ></path>
            <path
              d="M0 538L21.5 537.3C43 536.7 86 535.3 128.8 537C171.7 538.7 214.3 543.3 257.2 546.5C300 549.7 343 551.3 385.8 549.7C428.7 548 471.3 543 514.2 538.2C557 533.3 600 528.7 642.8 527.3C685.7 526 728.3 528 771.2 529.7C814 531.3 857 532.7 878.5 533.3L900 534L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              fill="#b0cec7"
            ></path>
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
  // background: url("/assets/pattern_flower.png") no-repeat fixed center;
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
  z-index: 1;
`;
const SectionSeparator = styled.div`
  width: 100%;
  height: 25rem;
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
    z-index: 2;
    -webkit-transform: translateY(-100%) translateY(2px);
    // transform: translateY(-100%) translateY(2px);
    width: 100%;
    transform: translateY(-100%) translateY(2px) scale(1, 1);
    transform-origin: top;
    fill: ${theme.colors.white};
  }
`;

const SectionSeparatorContainerDown = styled.div`
  ${mixins.flexCenter};
  margin: 0 auto;
  padding: 0;
  width: 100%;
  max-width: 1000px;
  display: inline-block;
  ${media.tablet`padding: 0;`};
  position: absolute;
  z-index: -1;
`;
const SectionSeparatorDown = styled.div`
  width: 100%;
  height: 70rem;
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
    z-index: 2;
    // -webkit-transform: translateY(-100%) translateY(2px);
    // transform: translateY(-100%) translateY(2px);
    width: 100%;
    // transform: translateY(-100%) translateY(2px) scale(1, 1);
    // transform-origin: top;
    fill: ${theme.colors.white};
  }
`;
