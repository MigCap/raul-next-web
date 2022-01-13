import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, mixins, media, Section } from "styles";

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  height: 100vh;
  ${media.desktop`min-height: 60vh; height: 60vh;`};

  // padding: 0 1rem;
  padding: 0;
  ${media.desktop`padding-top: 120px;`};

  // background: ${theme.colors.teal};
  background: url("/assets/rectangle_landing.png") repeat fixed center;
  // background-blend-mode: multiply;
`;
const HeroContent = styled.div`
  ${mixins.flexCenter};
  padding: 0 4rem;
  background: ${theme.colors.tealSemiTransparent};
  width: 70%;
  height: 100%;
  text-align: center;
  ${media.desktop`padding: 0 20px;`};
`;
const Title = styled(motion.h1)`
  font-family: ${theme.fonts.Oswald};
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  color: ${theme.colors.white};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 50px;`};
`;
const Subtitle = styled(motion.h2)`
  color: ${theme.colors.bronze};
  margin: 0 0 20px 3px;
  font-size: 4rem;
  font-family: ${theme.fonts.JosefinSlab};
  font-weight: 700;
  ${media.desktop`font-size: ${theme.fontSizes.xlarge};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;
const ButtonsContainer = styled.div`
  ${mixins.flexAround};
  // padding: 0 0.5rem 0 5rem;
  // background: ${theme.colors.tealSemiTransparent};
  // width: 70%;
  // height: 100%;
  // ${media.desktop`padding: 0 20px;`};
`;

export { HeroContainer, HeroContent, ButtonsContainer, Title, Subtitle };
