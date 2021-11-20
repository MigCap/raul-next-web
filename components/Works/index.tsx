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
    <div style={{ width: "100%" }}>
      <motion.section
        variants={stagger}
        className="p-grid p-align-center p-justify-center p-mx-5 p-md-px-5"
      >
        {jsxPosts}
      </motion.section>
    </div>
  );
}
