import PostCard from "components/PostCard";

import { motion } from "framer-motion";
import styled from "styled-components";

import { getFeaturedMedia, stagger } from "lib";

import { theme, mixins, media, Section } from "styles";

export default function WorksGallery({ posts, media, className, style }: any) {
  const jsxPosts = posts?.slice(0, 9)?.map((post: any) => {
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

const WorksGalleryContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  ${media.phone`grid-template-columns: repeat(2, minmax(160px, 250px));`};
  gap: 1em;
  overflow: hidden;
  margin-top: 20px;
  width: 100%;
`;
