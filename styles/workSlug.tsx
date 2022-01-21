import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, media, mixins, Section } from "styles";

const WorkDetailContainer = styled(motion.article)`
  display: flex;
`;
const BackButtonWrapper = styled(motion.article)`
  padding: 0.5rem 1rem 1rem 1rem;
  ${media.desktop`padding: 1.5rem 1rem;`};
  ${media.tablet`
      padding: 25px;
      display: none;
    `};
  // ${media.thone`padding: 25px; display: none;`};
`;
// const FiligranaContainerMobile = styled.div`
//   margin: 0 0.5rem;
//   align-self: center;
//   svg {
//     width: 4rem;
//     height: 100%;
//   }
// `;
const WorkDetailContent = styled.div`
  margin-top: 1rem;
  // margin-top: 8rem;
  width: 100%;
  ${media.phablet`
      margin-top: 1rem;
      gap: 0;
    `};
  ${mixins.gridStart};
  gap: 0;
  // gap: 5rem;
  grid-template-columns: 100%;
  // grid-template-columns: 40% 60%;
  ${media.desktop`
      grid-template-columns: 100%;
      gap: 0;
      margin-top: 1rem;
    `};
`;
// const WorkTitleContainerMobile = styled.div`
//   display: flex;
// `;
const FiligranaContainerDesktop = styled.div`
  margin: 1rem 1rem 1rem 0;
  // margin: 8rem 1rem 8rem 0;
  svg {
    width: 4rem;
    height: 4rem;
  }

  ${media.desktop`margin: 1rem 1rem 1rem 0;`};
  ${media.tablet`display: none;`};
`;

const WorkTitle = styled(motion.h1)`
  margin: 0;
  color: ${theme.colors.teal};
  font-size: 2.5rem;
  font-weight: 800;
`;
const LineSeparatorContainer = styled(motion.div)`
  margin: 0.2rem 0 0.5rem 0;
  ${media.desktop`margin: 0.4rem 0 0.5rem 0;`};
  background-color: ${theme.colors.bronze};
`;
const LineSeparator = styled(motion.div)`
  width: 20%;
  height: 2px;
`;

const WorkDescription = styled(motion.div)`
  font-size: 0.9rem;
  color: ${theme.colors.grey};
  padding: 1rem 0 1rem 0;
  // padding: 3rem 0;
  ${media.desktop`padding: 1rem 0 1rem 0;`};
`;
const WorkImagesContainer = styled(motion.div)<any>`
  ${mixins.gridCenter};
  margin: 1rem 0 0 0;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  ${media.thone`
    grid-template-columns: 1fr;
  `};
`;

export {
  Section,
  WorkDetailContainer,
  BackButtonWrapper,
  FiligranaContainerDesktop,
  WorkDetailContent,
  WorkTitle,
  LineSeparatorContainer,
  LineSeparator,
  WorkDescription,
  WorkImagesContainer,
};
