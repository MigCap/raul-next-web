import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import { getMedia, getPosts, getCategories } from "lib";

import { Menu } from "components/Menu";
import Hero from "components/Hero";
import Works from "components/Works";

import styles from "styles/Home.module.css";

export default function Home({ posts, media, categories }: any) {
  return (
    <div>
      <Head>
        <title>Raúl de Diego Vázquez</title>
        <meta name="description" content="Raúl de Diego Vázquez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      {/* <Hero /> */}

      <motion.div
        className="container"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <div className="p-my-3" style={{ position: "relative", width: "5rem" }}>
          <Image
            src={`/assets/logo-raul.png`}
            // layout="fill"
            alt={`logo-raul`}
            width={50}
            height={50}
            className={styles.logo}
          />
        </div>

        <div
          className="p-d-flex"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
        >
          <Menu categories={categories} />

          <Works posts={posts} media={media} />
        </div>
      </motion.div>
    </div>
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
