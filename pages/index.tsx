import Head from "next/head";
// import Image from "next/image";

import { motion } from "framer-motion";

import { getMedia, getPosts, getCategories } from "lib";

import { Menu } from "components/Menu";
// import Hero from "components/Hero";
import Works from "components/Works";

// import styles from "styles/Home.module.css";

export default function Home({ posts, media, categories }: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego Portfolio</title>
        <meta name="description" content="Raúl de Diego Portfolio" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        {/* <Hero /> */}

        <div
          className="p-d-flex"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
        >
          <Menu categories={categories} />
          <Works posts={posts} media={media} />
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPosts();
  const media = await getMedia(posts);
  const categories = await getCategories();
  return {
    props: {
      posts,
      media,
      categories,
    },
    revalidate: 10, // In seconds
  };
}
