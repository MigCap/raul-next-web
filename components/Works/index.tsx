import PostCard from "components/PostCard";

import { motion } from "framer-motion";

import { getFeaturedMedia, stagger } from "lib";

export default function Works({ posts, media }: any) {
  const jsxPosts = posts?.slice(0, 9)?.map((post: any) => {
    const featuredMediaId = post["featured_media"];
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <PostCard post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <motion.section
      variants={stagger}
      className="p-grid p-align-center p-justify-center"
      style={{ width: "100%" }}
    >
      {jsxPosts}
    </motion.section>
  );
}
