import Link from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

import { fadeInUp } from "lib";

import { theme, media, mixins } from "styles";

export default function WorkCategories({
  postCategories,
}: {
  postCategories: any;
}) {
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
              <Link
                href={{
                  pathname: "/portfolio-categories/[slug]",
                  query: { slug },
                }}
                key={id}
              >
                <a>
                  <WorkCategorieText>#{name.toLowerCase()}</WorkCategorieText>
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
  padding: 3rem 0;
  ${media.phablet`padding: 1rem 0;`};
`;
// const WorkCategoriesTitle = styled.h3`
//   margin: 1rem 0 0 0;
//   font-weight: 700;
//   color: ${theme.colors.teal};
// `;
const WorkCategoriesListContainer = styled(motion.div)`
  ${mixins.flexEnd};
  a {
    margin-left: auto;
    color: ${theme.colors.blue};
  }
`;
const WorkCategorieText = styled.p`
  margin: 0 0.5rem 0 0;
  padding: 0 0;
  font-size: 1rem;
`;
