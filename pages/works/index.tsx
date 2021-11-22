import Head from "next/head";
// import Image from "next/image";

import { motion } from "framer-motion";

import { getMedia, getPosts, getCategories, getTags } from "lib";

import Menu from "components/MenuSide";
// import Hero from "components/Hero";
import WorksGallery from "components/WorksGallery";

// import styles from "styles/Home.module.css";

export default function WorksPage({ posts, media, categories, tags }: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego Works</title>
        <meta name="description" content="Raúl de Diego Works" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div
          className="p-d-flex"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
        >
          <Menu categories={categories} tags={tags} />
          <WorksGallery
            posts={posts}
            media={media}
            className="p-grid p-align-center p-justify-end"
            style={{ width: "100%" }}
          />
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPosts();
  const media = await getMedia(posts);
  const categories = await getCategories();
  const tags = await getTags();
  return {
    props: {
      posts,
      media,
      categories,
      tags,
    },
    revalidate: 10, // In seconds
  };
}
