import Link from "next/link";
// import Image from "next/image";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Filigrana } from "components/Icons";

import { fadeInUp, scaleAndTab } from "lib";

import { theme, media } from "styles";

const postCard = {
  hover: {
    // scale: 1.05,
    // translateY: -2,
    // x: 15,
    color: theme.colors.primary,
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

// const arrowMotion = {
//   initial: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
//   hover: {
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeIn",
//     },
//   },
// };

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  return (
    <CardContainer variants={fadeInUp}>
      <motion.div
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        initial="initial"
        variants={postCard}
      >
        <Link href={`/works/${post.slug}`}>
          <a>
            {featuredMedia && (
              <ImageContainer>
                <StyledImage
                  src={featuredMedia?.source_url}
                  alt={`${post.title.rendered}-image`}
                />
                <PostCardTitleContainer>
                  <div>
                    <Filigrana />
                    <h1>{post.title.rendered}</h1>
                  </div>
                </PostCardTitleContainer>
              </ImageContainer>
            )}
          </a>
        </Link>
      </motion.div>
    </CardContainer>
  );
}

const CardContainer = styled(motion.div)`
  // ${media.tablet`max-width: 20rem;`};
  &:hover .cardImage {
    filter: opacity(0.9);
  }
  a {
    width: 100%;
  }
`;

const StyledImage = styled.img`
  position: absolute;
  object-fit: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: ${theme.transition};
`;
const PostCardTitleContainer = styled.div`
  padding: 0.5rem;
  position: relative;
  opacity: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  // align-items: start;
  // justify-content: end;
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
    }
  }
`;
const ImageContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 100%;
  border-radius: 5px;
  background-color: ${theme.colors.teal};
  transition: ${theme.transition};
  &:hover ${PostCardTitleContainer} {
    opacity: 1;
  }
  &:hover ${StyledImage} {
    opacity: 0.1;
    // border-radius: 5px 40px 5px 5px;
  }
  // &:hover {
  //   border-radius: 5px 40px 5px 5px;
  // }
`;
