import Head from "next/head";

// import { motion } from "framer-motion";

import { getSlugs, getCategory } from "lib";

export default function PostPage({ category }: { category: any }) {
  return (
    <>
      <Head>
        <title>Raúl de Diego - {category?.name} Category</title>
        <meta
          name="description"
          content={`Raúl de Diego - ${category?.name} Category`}
        />
      </Head>

      <h1>{category?.name}</h1>
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
  const category = await getCategory(params.slug);
  return {
    props: {
      category,
    },
    revalidate: 10, // In seconds
  };
}
