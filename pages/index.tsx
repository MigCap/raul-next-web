import Head from "next/head";

import { getMedia, getPosts, getFeaturedMedia } from "lib";

import { Menu } from "components/Menu";
import Hero from "components/Hero";
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

      {/* <Menu /> */}

      <div className="p-py-2">
        <p
          className="p-text-center p-text-uppercase"
          style={{ fontWeight: 700 }}
        >
          Raúl de Diego Vázquez
        </p>
      </div>

      <Hero />

      <div className="container">
        <div className="p-mx-5 p-px-5">
          <section className="p-grid p-align-center p-justify-center p-mx-5 p-px-5 p-my-5">
            {jsxPosts}
          </section>
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
