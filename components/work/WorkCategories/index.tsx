import Link from "next/link";

import { motion } from "framer-motion";
import styled from "styled-components";

import { fadeInUp } from "lib";

import { theme, mixins, media, Main } from "styles";

export default function WorkCategories({
  postCategories,
}: {
  postCategories: any;
}) {
  if (!postCategories || postCategories?.length <= 0) return null;

  return (
    <>
      <WorkCategoriesContainer
        // className="p-col-12 p-mt-2 p-mt-md-6 p-p-0"
        variants={fadeInUp}
      >
        <WorkCategoriesTitle>CATEGORIES</WorkCategoriesTitle>
        <div className="p-d-flex p-flex-wrap p-jc-cener p-ai-start">
          {postCategories?.map(({ id, name, count, slug }: any, i: number) => {
            if (name === "Uncategorized" || count === 0) {
              return null;
            }
            return (
              <Link
                href={{
                  pathname: "/categories/[slug]",
                  query: { slug },
                }}
                key={id}
              >
                <a>
                  <WorkCategorieText
                  // className="p-my-0 p-mr-2 p-text-bold"
                  // style={{ fontSize: "0.7rem" }}
                  >
                    #{name.toLowerCase()}
                  </WorkCategorieText>
                </a>
              </Link>
            );
          })}
        </div>
      </WorkCategoriesContainer>
    </>
  );
}

const WorkCategoriesContainer = styled(motion.div)``;
const WorkCategoriesTitle = styled.h3`
  margin: 1rem 0 0 0;
  font-weight: 700;
  color: ${theme.colors.teal};
`;
const WorkCategorieText = styled.p`
  margin: 0 0.5rem 0 0;
  padding: 0 0;
`;
