import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, media } from "styles";

const CardContainer = styled(motion.div)`
  // ${media.tablet`max-width: 20rem;`};
  &:hover .cardImage {
    filter: opacity(0.9);
  }
  a {
    width: 100%;
  }
`;

const StyledImage = styled.img<any>`
  position: absolute;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: ${theme.transition};
  opacity: ${({ isHomePage }) => (isHomePage ? 0.1 : 1)};
`;

const PostCardTitleContainer = styled.div<any>`
  padding: 0.5rem;
  position: relative;
  opacity: ${({ isHomePage }) => (isHomePage ? 1 : 0)};
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  // align-items: start;
  // justify-content: end;
  transition: ${theme.transition};
  div {
    display: flex;
    align-items: center;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    h1 {
      padding: 0 0 0 0.5rem;
    }
  }
`;

const ImageContainer = styled<any>(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 9rem;
  width: 100%;
  border-radius: 5px;
  background-color: ${theme.colors.teal};
  transition: ${theme.transition};
  &:hover ${PostCardTitleContainer} {
    opacity: ${({ isHomePage }) => (isHomePage ? 0 : 1)};
  }
  &:hover ${StyledImage} {
    opacity: ${({ isHomePage }) => (isHomePage ? 1 : 0.1)};
    // border-radius: 5px 40px 5px 5px;
  }
  // &:hover {
  //   border-radius: 5px 40px 5px 5px;
  // }
`;

export { CardContainer, ImageContainer, PostCardTitleContainer, StyledImage };
