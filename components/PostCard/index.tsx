import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import styled from "styled-components";

import { fadeInUp, scaleAndTab } from "lib";

import { theme, mixins, media, Section } from "styles";

import styles from "./PostCard.module.css";

const postCard = {
  hover: {
    // scale: 1.05,
    // translateY: -2,
    // x: 15,
    color: theme.colors.primary,
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
};

const arrowMotion = {
  initial: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  return (
    <CardContainer
      variants={fadeInUp}
      // className={`${styles.card} p-col-12 p-lg-4`}
    >
      <motion.div
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        initial="initial"
        variants={postCard}
      >
        <Link
          href={{
            pathname: "/portfolio/[slug]",
            query: { slug: post.slug },
          }}
        >
          <a style={{ width: "100%" }}>
            <PostCardTitle>
              {post.title.rendered}
              <motion.span variants={arrowMotion}> →</motion.span>
            </PostCardTitle>
            {featuredMedia && (
              <ImageContainer
                // className={`${styles.imageContainer}`}
                variants={scaleAndTab}
              >
                <StyledImage
                  priority
                  src={featuredMedia?.source_url}
                  layout="fill"
                  alt={featuredMedia?.alt_text}
                  // className={`${styles.image}`}
                />
              </ImageContainer>
            )}
          </a>
        </Link>
      </motion.div>
    </CardContainer>
  );
}

const CardContainer = styled(motion.div)`
  ${media.tablet`max-width: 20rem;`};
  &:hover .cardImage {
    filter: opacity(0.9);
  }
`;
const PostCardTitle = styled(motion.p)`
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-size: 0.9rem;
  max-width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const ImageContainer = styled(motion.div)`
  position: relative;
  height: 10rem;
  width: 100%;
  border-radius: 1rem;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
  border-radius: 5px;
  width: 850px;
  height: 567px;
  overflow: visible;
  transition: all 0.5s ease;
`;
