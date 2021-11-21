import { useCallback, useState } from "react";

import Head from "next/head";

// import { motion } from "framer-motion";

import {
  getPost,
  getSlugs,
  //   getPostTags,
  getPostCategories,
  //   getImagesSources,
  //   fadeInUp,
  //   parse,
  //   stagger,
} from "lib";

export default function PostPage({
  postCategories,
}: {
  post: any;
  postTags: any;
  postCategories: any;
}) {
  console.log(`🚀 ~ postCategories`, postCategories);

  return (
    <>
      <Head>
        <title>Raúl de Diego Posts Categories</title>
        <meta name="description" content={`Raúl de Diego Posts Categories`} />
      </Head>

      <h1></h1>
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
  const post = await getPost(params.slug);
  const postCategories = await getPostCategories(post?.categories);
  return {
    props: {
      post,
      postCategories,
    },
    revalidate: 10, // In seconds
  };
}
