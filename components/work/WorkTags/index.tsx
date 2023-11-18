import { motion } from "framer-motion";
import styled from "styled-components";

import { fadeInUp } from "lib";

import { theme, mixins, media } from "styles";

export default function WorkTags({ postTags }: { postTags: any }) {
  if (!postTags || postTags?.length <= 0) return null;

  return (
    <motion.div className="p-col-12 p-mt-2 p-mt-md-6 p-p-0" variants={fadeInUp}>
      <WorkTagsTitle>TOOLS</WorkTagsTitle>

      <WorkTagsListContainer>
        {postTags?.map((tag: any, i: number) => {
          return <PostTag key={tag?.id} tag={tag} />;
        })}
      </WorkTagsListContainer>
    </motion.div>
  );
}

const WorkTagsTitle = styled.h3`
  margin: 1rem 0 0 0;
  font-weight: 700;
  color: ${theme.colors.teal};
`;
const WorkTagsListContainer = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

function PostTag({ tag }: { tag: any }) {
  const getTagIcon = () => {
    const pencilTags = ["acuarelas", "lapiz-y-papel"];
    const computerTags = [
      "acrobat",
      "adobe-xd",
      "illustrator",
      "indesign",
      "photoshop",
      "3dsmax",
      "zbrush",
    ];
    if (pencilTags.includes(tag?.slug)) return "pi pi-pencil";
    if (computerTags.includes(tag?.slug)) return "pi pi-desktop";
    return;
  };

  return (
    <WorkTagsContainer>
      {getTagIcon() && (
        <i className={`${getTagIcon()}`} style={{ fontSize: "0.8rem" }} />
      )}
       <p>{tag?.name.toUpperCase()}</p>
    </WorkTagsContainer>
  );
}

const WorkTagsContainer = styled.div`
  ${mixins.flexCenter};
  justify-content: start;
  margin: 0 1rem 0 0;
  p {
    margin: 0;
    padding: 0 0 0 0.1rem;
    font-size: 0.9rem;
  }
`;
