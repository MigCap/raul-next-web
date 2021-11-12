// import { useEffect } from "react";
import Head from "next/head";

import { getMedia, getPosts, getFeaturedMedia } from "lib";

import PostCard from "components/PostCard";

export default function Home({ posts, media }: { posts: any; media: any }) {
  const jsxPosts = posts.slice(0, 6).map((post: any) => {
    const featuredMediaId = post["featured_media"];
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);

    return <PostCard post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Raúl de Diego Vázquez</title>
        <meta
          name="description"
          content="Raúl de Diego Vázquez personal website"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <h1 className="p-text-center p-py-5">Raúl de Diego Vázquez</h1>
        <div className="p-mx-4">
          <h2 className="">Blog posts</h2>
          <section className="p-grid p-align-center">{jsxPosts}</section>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPosts();
  const media = await getMedia();
  return {
    props: {
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}
