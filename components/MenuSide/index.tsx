import { Fragment, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

import BackButton from "components/BackButton";
import SocialH from "components/SocialH";

import { useTranslation } from "hooks/useTranslation";

import {
  categoriesConfig,
  categoriesIds,
  stagger,
  getCategoryNameFromConfig,
} from "lib";

import { media, mixins, theme } from "styles";

export function MenuSide({
  categories,
  // tags,
  currCategory,
}: {
  categories: any;
  currCategory?: any;
  tags: any;
}) {
  const { locale } = useTranslation({});

  const [activeIndex, setActiveIndex] = useState(null);

  const filteredCategories = categories?.reduce((acc: any, categorie: any) => {
    if (categoriesIds?.includes(categorie?.id)) {
      acc = [
        ...acc,
        {
          ...categorie,
          name: getCategoryNameFromConfig(categorie?.id),
          Icon: categoriesConfig.filter((c: any) => c.id === categorie?.id)[0]
            .Icon,
          children: [],
        },
      ];
    }

    return acc;
  }, []);

  const filteredCategoriesWithChildren = categories?.reduce(
    (acc: any, categorie: any) => {
      if (categoriesIds?.includes(categorie?.parent)) {
        const parentIndex = acc.findIndex(
          (el: any) => el?.id === categorie?.parent
        );

        if (parentIndex >= 0) {
          acc[parentIndex] = {
            ...acc[parentIndex],
            children: [...acc[parentIndex]?.children, categorie],
          };
        }
      }
      return acc;
    },
    filteredCategories
  );

  return (
    <MenuSideContainer>
      <BackButtonWrapper>
        <BackButton />
      </BackButtonWrapper>

      <CategoriesContainer
        className="menu"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        {filteredCategoriesWithChildren &&
          filteredCategoriesWithChildren.map((category: any, i: number) => {
            const {
              id,
              name,
              count,
              slug: parentSlug,
              children,
              Icon,
            } = category;

            if (name === "Uncategorized" || count === 0 || !category) {
              return null;
            }

            const isSelected = name["en"] === currCategory;

            return (
              <Fragment key={id}>
                <CategoryTitleContainer>
                  {Icon && <Icon />}
                  <div key={id} onClick={() => setActiveIndex(null)}>
                    <Link href={`/portfolio-categories/${parentSlug}`}>
                      <a className="lighten">
                        <CategoryTitle isSelected={isSelected}>
                          {name[locale]}
                        </CategoryTitle>
                      </a>
                    </Link>
                  </div>
                </CategoryTitleContainer>
                <SubCategoriesContainer>
                  {children &&
                    children.length > 0 &&
                    children.map((childCategory: any) => {
                      const { id, name, slug } = childCategory;
                      const isSelected = name === currCategory;
                      return (
                        <Link
                          href={`/portfolio-categories/${slug}`}
                          passHref
                          key={id}
                        >
                          <SubCategoryAnchor
                            className="lighten"
                            isSelected={isSelected}
                          >
                            <span>{name}</span>
                          </SubCategoryAnchor>
                        </Link>
                      );
                    })}
                </SubCategoriesContainer>
              </Fragment>
            );
          })}
        <SocialH />
      </CategoriesContainer>
    </MenuSideContainer>
  );
}

const MenuSideContainer = styled(motion.div)`
  min-width: 20rem;
  padding: 0 2rem;
  ${media.desktop` 
    padding: 0 1rem;
  `};
`;

const BackButtonWrapper = styled(motion.article)`
  padding: 1.5rem 3.5rem 0 3.5rem;
  // ${media.desktop` 
  //   padding: 0 1rem 2rem 1rem;
  // `};
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
