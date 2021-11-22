import PostCard from "components/PostCard";

import { motion } from "framer-motion";

import { getFeaturedMedia, stagger } from "lib";

export default function WorksGallery({ posts, media, className, style }: any) {
  const jsxPosts = posts?.slice(0, 9)?.map((post: any) => {
    const featuredMediaId = post?.featured_media;
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <PostCard post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <motion.section
      variants={stagger}
      className={className}
      style={style}
    >
      {jsxPosts}
    </motion.section>
  );
}
