import { Fragment, useState } from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Accordion, AccordionTab } from "primereact/accordion";

import SocialH from "components/layout/SocialH";

import { categoriesConfig, categoriesIds, stagger } from "lib";

import { theme } from "styles";

const AccordionHeader = styled(motion.article)`
  display: flex;
`;

export function MenuSide({
  categories,
  // tags,
  currCategory,
}: {
  categories: any;
  currCategory?: any;
  tags: any;
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredCategories = categories?.reduce((acc: any, categorie: any) => {
    if (categoriesIds?.includes(categorie?.id)) {
      acc = [
        ...acc,
        {
          ...categorie,
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
    <>
      <CategoriesContainer
        className="menu"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        {/* <Accordion
          activeIndex={activeIndex}
          onTabChange={(e: any) => setActiveIndex(e.index)}
        >
          <AccordionTab
            header={
              <AccordionHeader>
                <i className="pi pi-bookmark p-mr-2"></i>
                <p className="p-text-uppercase p-m-0">categorías</p>
              </AccordionHeader>
            }
          >
            {categories &&
              categories.map(({ id, name, count, slug }: any, i: number) => {
                if (name === "Uncategorized" || count === 0) {
                  return null;
                }
                return (
                  <div key={id} onClick={() => setActiveIndex(null)}>
                    <Link
                      href={{
                        pathname: "/portfolio-categories/[slug]",
                        query: { slug },
                      }}
                    >
                      <a className="lighten">
                        <p
                          className={`p-text-lowercase p-m-0 ${
                            currCategory && currCategory === name
                              ? "p-text-bold"
                              : ""
                          }`}
                          style={{ fontSize: "0.7rem" }}
                        >
                          # {name} ({count})
                        </p>
                      </a>
                    </Link>
                  </div>
                );
              })}
          </AccordionTab>
        </Accordion> */}

        {filteredCategoriesWithChildren &&
          filteredCategoriesWithChildren.map(
            ({ id, name, count, slug, children, Icon }: any, i: number) => {
              if (name === "Uncategorized" || count === 0) {
                return null;
              }

              return (
                <Fragment key={id}>
                  <CategoryTitleContainer>
                    <Icon />
                    <div key={id} onClick={() => setActiveIndex(null)}>
                      <Link href={`/portfolio-categories/${slug}`}>
                        <a className="lighten">
                          <CategoryTitle>{name}</CategoryTitle>
                        </a>
                      </Link>
                    </div>
                  </CategoryTitleContainer>
                  <SubCategoriesContainer>
                    {children &&
                      children.length > 0 &&
                      children.map((childCategory: any) => {
                        const { id, name, slug } = childCategory;
                        return (
                          <Link href={`/portfolio-categories/${slug}`} key={id}>
                            <a className="lighten">
                              <span>{name}</span>
                            </a>
                          </Link>
                        );
                      })}
                  </SubCategoriesContainer>
                </Fragment>
              );
            }
          )}

        <SocialH />
      </CategoriesContainer>
    </>
  );
}

const CategoriesContainer = styled(motion.div)`
  padding: 10rem 2rem 0 2rem;
  min-width: 20rem;
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
const CategoryTitle = styled.h1`
  color: ${theme.colors.primary};
  font-weight: 800;
  transition: ${theme.transition};
  font-size: 1.5rem;
  &:hover {
    color: ${theme.colors.orange};
  }
`;
const SubCategoriesContainer = styled.div`
  margin-left: 4.5rem;
  a {
    font-family: "Josefin Slab", serif;
    color: ${theme.colors.orange};
    font-size: 1rem;
  }
`;
