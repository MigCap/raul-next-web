import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, media } from "styles";

const CardContainer = styled(motion.div)`
  a {
    width: 100%;
  }
  // ${media.tablet`max-width: 20rem;`};
`;

const StyledImage = styled.img<any>`
  position: absolute;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: ${theme.transition};
  opacity: ${({ $isHomePage }) => ($isHomePage ? 0.1 : 1)};
`;

const PostCardTitleContainer = styled.div<any>`
  padding: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${({ $isHomePage }) => ($isHomePage ? 1 : 0)};
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
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
      width: 80%;
    }
  }
`;

const ImageContainer = styled<any>(motion.div)`
  position: relative;
  height: 9rem;
  width: 100%;
  border-radius: 5px;
  background-color: ${theme.colors.teal};
  transition: ${theme.transition};
  &:hover ${PostCardTitleContainer} {
    opacity: ${({ $isHomePage }) => ($isHomePage ? 0 : 1)};
  }

  .image {
    opacity: ${({ $isHomePage }) => ($isHomePage ? 0.1 : 1)};
    transition: ${theme.transition};
  }
  &:hover .image-container {
    .image {
      opacity: ${({ $isHomePage }) => ($isHomePage ? 1 : 0.1)};
    }
  }
`;

export { CardContainer, ImageContainer, PostCardTitleContainer, StyledImage };
