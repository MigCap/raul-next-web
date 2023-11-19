import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { Filigrana } from "components/Icons";
// import NextImage from "components/NextImage";
import NextImage from "components/CNextImage";

import { useCustomRouter as useRouter } from "hooks";

import { fadeInUp } from "lib";

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

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  const { isHomePage } = useRouter();

  return (
    <CardContainer variants={fadeInUp}>
      <motion.div
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        initial="initial"
        variants={postCard}
      >
        <Link legacyBehavior href={`/works/${post.slug}`}>
          <a>
            {featuredMedia && (
              <ImageContainer $isHomePage={isHomePage}>
                <NextImage
                  src={featuredMedia?.source_url}
                  alt={`${post.title.rendered}-image`}
                />
                <PostCardTitleContainer $isHomePage={isHomePage}>
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
