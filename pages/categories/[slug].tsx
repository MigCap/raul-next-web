import Head from "next/head";

import { motion } from "framer-motion";

import {
  getSlugs,
  getCategory,
  getPostsByCategoryId,
  getMedia,
  getCategories,
  getTags,
} from "lib";

import { MenuSide } from "components/MenuSide";
import WorksGallery from "components/WorksGallery";

export default function CategoryPage({
  category,
  posts,
  media,
  categories,
  tags,
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
        style={{ margin: "5rem 0" }}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <MenuSide
          categories={categories}
          tags={tags}
          currCategory={category?.name}
        />
        <WorksGallery
          posts={posts}
          media={media}
          className="p-grid p-align-start p-justify-end"
          style={{ width: "100%" }}
        />
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
  const tags = await getTags();
  const category = await getCategory(params.slug);
  const posts = await getPostsByCategoryId(category?.id);
  const media = await getMedia(posts);
  return {
    props: {
      categories,
      tags,
      category,
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}
