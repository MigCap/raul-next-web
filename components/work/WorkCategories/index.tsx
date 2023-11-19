import Link from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

import { useTranslation } from "hooks";

import { fadeInUp, getCategoryNameFromConfig } from "lib";

import { theme, media, mixins } from "styles";

export default function WorkCategories({
  postCategories,
}: {
  postCategories: any;
}) {
  const { locale } = useTranslation({});

  if (!postCategories || postCategories?.length <= 0) return null;

  return (
    <>
      <WorkCategoriesContainer variants={fadeInUp}>
        <WorkCategoriesListContainer>
          {postCategories?.map(({ id, name, count, slug }: any, i: number) => {
            if (name === "Uncategorized" || count === 0) {
              return null;
            }
            return (
              <Link legacyBehavior
                href={{
                  pathname: "/portfolio-categories/[slug]",
                  query: { slug },
                }}
                key={id}
              >
                <a>
                  <WorkCategorieText>
                    #{getCategoryNameFromConfig(id)?.[locale].toLowerCase()}
                  </WorkCategorieText>
                </a>
              </Link>
            );
          })}
        </WorkCategoriesListContainer>
      </WorkCategoriesContainer>
    </>
  );
}

const WorkCategoriesContainer = styled(motion.div)`
  padding: 1rem 0;
  ${media.phablet`padding: 1rem 0;`};
`;
// const WorkCategoriesTitle = styled.h3`
//   margin: 1rem 0 0 0;
//   font-weight: 700;
//   color: ${theme.colors.teal};
// `;
const WorkCategoriesListContainer = styled(motion.div)`
  ${mixins.flexBetween};
  a {
    // margin-left: auto;
    color: ${theme.colors.blue};
    &:hover,
    &:focus {
      color: ${theme.colors.teal};
    }
  }
`;
const WorkCategorieText = styled.p`
  margin: 0 0.5rem 0 0;
  padding: 0 0;
  font-size: 1rem;
`;
