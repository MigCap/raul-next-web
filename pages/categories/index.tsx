import Head from "next/head";

import { motion } from "framer-motion";

import { getMedia, getPosts, getCategories, getTags, about } from "lib";

import { MenuSide } from "components/MenuSide";
import WorksGallery from "components/WorksGallery";

// import styles from "styles/WorksPage.module.css";

export default function CategoriesPage({
  posts,
  media,
  categories,
  tags,
}: any) {
  return (
    <>
      <Head>
        <title>{about.name} Works</title>
        <meta name="description" content={`${about.name} Works`} />
      </Head>

      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <div className="p-d-flex" style={{ margin: "5rem 0" }}>
          <MenuSide categories={categories} tags={tags} />
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
