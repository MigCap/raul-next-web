import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, mixins, media, Section } from "styles";

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
const Title = styled(motion.h1)`
  font-family: ${theme.fonts.Karla};
  font-weight: 900;
  font-size: 80px;
  line-height: 1.1;
  text-transform: uppercase;
  color: ${theme.colors.dark};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 50px;`};
`;
const Subtitle = styled(motion.h2)`
  color: ${theme.colors.dark};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.Karla};
  font-weight: normal;
  ${media.desktop`font-size: ${theme.fontSizes.xlarge};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;

const SectionSeparatorContainerUp = styled.div`
  ${mixins.flexCenter};
  margin: 0 auto;
  padding: 0;
  width: 100%;
  display: inline-block;
  ${media.tablet`padding: 0;`};
  position: absolute;
  z-index: -1;
`;
const SectionSeparatorUp = styled.div<any>`
  width: 100%;
  height: ${(props) => (props.height ? "30rem" : "70rem")};
  ${media.tablet`height: ${(props: any) =>
    props.height ? "20rem" : "50rem"}`};
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
    z-index: 1;
    // -webkit-transform: translateY(-100%) translateY(2px);
    // transform: translateY(-100%) translateY(2px);
    width: 100%;
    // transform: translateY(-100%) translateY(2px) scale(1, 1);
    // transform-origin: top;
    fill: ${theme.colors.white};
  }
`;
const SectionSeparatorContainerDown = styled.div`
  ${mixins.flexCenter};
  margin: 0 auto;
  padding: 0;
  width: 100%;
  display: inline-block;
  ${media.tablet`padding: 0;`};
  position: absolute;
  z-index: -1;
`;
const SectionSeparatorDown = styled.div`
  width: 100%;
  height: 45rem;
  ${media.tablet`height: 35rem;`};
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
    z-index: 1;
    -webkit-transform: translateY(-100%) translateY(2px);
    // transform: translateY(-100%) translateY(2px);
    width: 100%;
    transform: translateY(-100%) translateY(2px) scale(1, 1);
    transform-origin: top;
    fill: ${theme.colors.white};
  }
`;

export {
  HeroContainer,
  HeroContent,
  BlobContainer,
  Title,
  Subtitle,
  SectionSeparatorContainerUp,
  SectionSeparatorUp,
  SectionSeparatorContainerDown,
  SectionSeparatorDown,
};
