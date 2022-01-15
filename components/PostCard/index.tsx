import Link from "next/link";
import { useRouter } from "next/router";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Filigrana } from "components/Icons";

import { fadeInUp, getRoutePathById, ROUTES_IDS } from "lib";

import { theme } from "styles";

import {
  CardContainer,
  ImageContainer,
  PostCardTitleContainer,
  StyledImage,
} from "./styles";

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
  const { pathname, locale } = useRouter();
  const isHomePage = pathname === getRoutePathById(ROUTES_IDS.HOME);

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
              <ImageContainer isHomePage={isHomePage}>
                <StyledImage
                  src={featuredMedia?.source_url}
                  alt={`${post.title.rendered}-image`}
                  isHomePage={isHomePage}
                />
                <PostCardTitleContainer isHomePage={isHomePage}>
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
