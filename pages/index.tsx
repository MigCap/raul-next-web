import Head from "next/head";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import {
  getEvents,
  getMedia,
  getPosts,
  getFeaturedMedia,
} from "../utils/wordpress";

import Post from "../components/Post";

export default function Home({ posts, media }: { posts: any; media: any }) {
  console.log(`🚀 ~ Home ~ media`, media);
  const jsxPosts = posts.map((post: any) => {
    const featuredMediaId = post["featured_media"];
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <Post post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <>
      <Head>
        <title>Raúl de Diego Vázquez</title>
        <meta
          name="description"
          content="Keep up to date with the latest trends in tech"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <div className="container pt-5">
        <h1 className="text-center pb-5">Raúl de Diego Vázquez</h1>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="pb-3">Blog posts</h2>
            {jsxPosts}
          </div>
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
