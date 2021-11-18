import PostCard from "components/PostCard";

import { getMedia, getPosts, getFeaturedMedia } from "lib";

export default function Works({ posts, media }: any) {
  // console.log(`🚀 ~ Works ~ media`, media);
  // console.log(`🚀 ~ Works ~ posts`, posts);
  const jsxPosts = posts.slice(0, 6).map((post: any) => {
    const featuredMediaId = post["featured_media"];
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);

    return <PostCard post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <section
        className="p-grid p-align-center p-justify-center p-mx-5 p-md-px-5"
        style={{ width: "100%" }}
      >
        {jsxPosts}
      </section>
    </>
  );
}
