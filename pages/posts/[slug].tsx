import { useCallback, useState } from "react";

import Head from "next/head";

import { motion } from "framer-motion";

import BackButton from "components/BackButton";
import LightBox from "components/LightBox";
import PostImage from "components/PostImage";
import PostCategories from "components/PostCategories";
import PostTags from "components/PostTags";

import {
  getPost,
  getSlugs,
  getPostTags,
  getPostCategories,
  getImagesSources,
  fadeInUp,
  parse,
  stagger,
} from "lib";

import styles from "./PostPage.module.css";

const postTitleUnderline = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function PostPage({
  post,
  postTags,
  postCategories,
}: {
  post: any;
  postTags: any;
  postCategories: any;
}) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const imgs = getImagesSources(post);

  const onClickImg = useCallback((index: number) => {
    setShow(true);
    setActiveIndex(index);
  }, []);

  const leftPostImages =
    imgs?.length >= 3 &&
    imgs.slice(0, 2).map((img: any) => {
      const { src, alt, index } = img;
      return (
        <PostImage src={src} index={index} onClick={onClickImg} key={src} />
      );
    });

  const rightPostImages =
    imgs?.length >= 4 &&
    imgs.slice(2, 5).map((img: any) => {
      const { src, alt, index } = img;
      return (
        <PostImage src={src} index={index} onClick={onClickImg} key={src} />
      );
    });

  const postTitle = post?.title?.rendered;

  return (
    <>
      <Head>
        <title>Raúl de Diego Works - ${postTitle}</title>
        <meta
          name="description"
          content={`Raúl de Diego Works - ${postTitle}`}
        />
      </Head>

      <motion.div
        className={`p-mt-4 p-md-mt-5 p-pt-3`}
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <BackButton />
        <div className="p-grid p-align-center">
          <motion.div
            className="p-col-12 p-md-4 p-col-align-start p-mt-2 p-mt-md-5 p-pt-md-2"
            variants={stagger}
          >
            <motion.h1
              className={`${styles["post-title"]} p-mb-0 primary-color`}
              variants={fadeInUp}
            >
              {postTitle}
            </motion.h1>
            <motion.div className={`p-my-1 p-md-my-3`} variants={fadeInUp}>
              <motion.div
                className={`${styles.separator}`}
                // initial="hidden"
                // animate="visible"
                // transition={{ duration: 2 }}
                variants={postTitleUnderline}
              />
            </motion.div>
            <motion.p className="p-pb-2 p-pb-md-6 p-pt-2" variants={fadeInUp}>
              {post?.excerpt?.rendered && parse(post?.excerpt?.rendered)}
            </motion.p>
            <PostTags postTags={postTags} />
            <PostCategories postCategories={postCategories} />
          </motion.div>

          <div className="p-col-12 p-md-8">
            <div className="p-grid p-align-center p-px-3">
              <motion.div className="p-col-12 p-md-6" variants={stagger}>
                {leftPostImages}
              </motion.div>
              <motion.div className="p-col-12 p-md-6" variants={stagger}>
                {rightPostImages}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <LightBox
        images={imgs}
        show={show}
        setShow={setShow}
        activeIndex={activeIndex}
      />
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const post = await getPost(params.slug);
  const postTags = await getPostTags(post?.tags);
  const postCategories = await getPostCategories(post?.categories);
  return {
    props: {
      post,
      postTags,
      postCategories,
    },
    revalidate: 10, // In seconds
  };
}
