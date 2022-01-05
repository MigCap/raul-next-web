import Router from "next/router";

import PostCard from "components/PostCard";

import { motion } from "framer-motion";
import styled from "styled-components";

import { getFeaturedMedia, stagger } from "lib";

import { media } from "styles";

export default function WorksGallery({ posts, media, className, style }: any) {
  const isHomePage = Router?.router?.pathname === "/";
  const maxCardsToShow = isHomePage ? 9 : 18;

  const jsxPosts = posts?.slice(0, maxCardsToShow)?.map((post: any) => {
    const featuredMediaId = post?.featured_media;
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <PostCard post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <motion.section variants={stagger} className={className} style={style}>
      <WorksGalleryContainer>{jsxPosts}</WorksGalleryContainer>
    </motion.section>
  );
}

const WorksGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 1rem;
  ${media.thone`grid-template-columns: repeat(2, 1fr); 
  `};
  ${media.phone`grid-template-columns: 100%; 
  padding: 0;
  `};
  gap: 1em;
  overflow: hidden;
  margin-top: 20px;
  width: 100%;
`;
