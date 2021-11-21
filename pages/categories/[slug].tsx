import Head from "next/head";

import { motion } from "framer-motion";

import {
  getSlugs,
  getCategory,
  getPostsByCategoryId,
  getMedia,
  getCategories,
} from "lib";

import { Menu } from "components/Menu";
import Works from "components/Works";

export default function CategoryPage({
  category,
  posts,
  media,
  categories,
}: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego - {category?.name} Category</title>
        <meta
          name="description"
          content={`Raúl de Diego - ${category?.name} Category`}
        />
      </Head>

      <motion.div
        className="p-d-flex"
        style={{ marginTop: "5rem", marginBottom: "5rem" }}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <Menu categories={categories} currCategory={category?.name} />
        <Works posts={posts} media={media} />
      </motion.div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("categories");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const categories = await getCategories();
  const category = await getCategory(params.slug);
  const posts = await getPostsByCategoryId(category?.id);
  const media = await getMedia(posts);
  return {
    props: {
      categories,
      category,
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}
