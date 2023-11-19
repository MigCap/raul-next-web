import { Fragment } from "react";

import Link from "next/link";

import BackButton from "components/BackButton";
import SocialH from "components/SocialH";

import { useTranslation } from "hooks/useTranslation";

import {
  categoriesConfig,
  mainCategoriesIds,
  stagger,
  getCategoryNameFromConfig,
  LANGUAGES,
} from "lib";

import {
  MenuSideContainer,
  BackButtonWrapper,
  CategoriesContainer,
  CategoryTitleContainer,
  CategoryTitle,
  SubCategoriesContainer,
  SubCategoryAnchor,
} from "./styles";

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

  const filteredCategories = categories?.reduce((acc: any, categorie: any) => {
    if (mainCategoriesIds?.includes(categorie?.id)) {
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
      if (mainCategoriesIds?.includes(categorie?.parent)) {
        const parentIndex = acc.findIndex(
          (el: any) => el?.id === categorie?.parent
        );

        if (parentIndex >= 0) {
          acc[parentIndex] = {
            ...acc[parentIndex],
            children: [
              ...acc[parentIndex]?.children,
              { ...categorie, name: getCategoryNameFromConfig(categorie?.id) },
            ],
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

            const isSelected = name[LANGUAGES.EN] === currCategory;

            return (
              <Fragment key={id}>
                <CategoryTitleContainer>
                  <>
                    {Icon && <Icon />}
                    <Link legacyBehavior href={`/portfolio-categories/${parentSlug}`}>
                      <a className="lighten">
                        <CategoryTitle isSelected={isSelected}>
                          {name[locale]}
                        </CategoryTitle>
                      </a>
                    </Link>
                  </>
                </CategoryTitleContainer>
                <SubCategoriesContainer>
                  {children &&
                    children.length > 0 &&
                    children.map((childCategory: any) => {
                      const { id, name, slug } = childCategory;
                      const isSelected = name?.[LANGUAGES.EN] === currCategory;
                      return (
                        <Link legacyBehavior
                          href={`/portfolio-categories/${slug}`}
                          passHref
                          key={id}
                        >
                          <SubCategoryAnchor
                            className="lighten"
                            isSelected={isSelected}
                          >
                            <span>{name?.[locale]}</span>
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
