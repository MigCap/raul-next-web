import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, media, mixins } from "styles";

const MenuSideContainer = styled(motion.div)`
  min-width: 20rem;
  padding: 0 2rem;
  ${media.desktop` 
    padding: 0 1rem;
  `};
`;

const BackButtonWrapper = styled(motion.article)`
  padding: 1.5rem 3.5rem 0 3.5rem;
  ${media.desktop` 
    padding: 0 1rem 0 1rem;
  `};
`;

const CategoriesContainer = styled(motion.div)`
  min-width: 20rem;
  padding: 7.5rem 2rem 0 2rem;
  ${media.desktop` 
    padding: 0 1rem 2rem 1rem;
  `};
`;

const CategoryTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0 0;
  svg {
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 1rem;
    align-self: start;
  }
`;
const CategoryTitle = styled.h1<any>`
  color: ${({ isSelected }) =>
    isSelected ? theme.colors.orange : theme.colors.teal};
  font-weight: 800;
  transition: ${theme.transition};
  font-size: 1.5rem;
  ${mixins.animatedUnderline}
  &:hover {
    color: ${theme.colors.orange};
  }
`;
const SubCategoriesContainer = styled.div`
  margin-left: 4.5rem;
  display: flex;
  flex-direction: column;
`;
const SubCategoryAnchor = styled.a<any>`
  font-family: ${theme.fonts.JosefinSlab};
  font-size: 1rem;
  span {
    color: ${({ isSelected }) =>
      isSelected ? theme.colors.orange : theme.colors.teal};
    ${mixins.animatedUnderline}
    &:hover {
      color: ${theme.colors.orange} !important;
    }
  }
`;

export {
  MenuSideContainer,
  BackButtonWrapper,
  CategoriesContainer,
  CategoryTitleContainer,
  CategoryTitle,
  SubCategoriesContainer,
  SubCategoryAnchor,
};
