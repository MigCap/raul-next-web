import { useCallback, useState } from "react";

// import { Button } from "primereact/button";

import { motion } from "framer-motion";

import BackButton from "components/BackButton";
import LightBox from "components/LightBox";
import PostImage from "components/PostImage";
import PostTags from "components/PostTags";

import { getPost, getSlugs, getPostTags, getImagesSources, parse } from "lib";

import styles from "./PostPage.module.css";

export default function PostPage({
  post,
  postTags,
}: {
  post: any;
  postTags: any;
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

  const postTitleUnderline = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="container">
      <div className={`p-px-5 p-mx-lg-6 p-mt-4 p-md-mt-5 p-pt-3`}>
        <BackButton />

        <div className="p-grid p-align-center">
          <div className="p-col-12 p-md-4 p-col-align-start p-mt-2 p-mt-md-5 p-pt-md-2">
            <h1 className={`${styles["post-title"]} p-mb-2 primary-color`}>
              {post?.title?.rendered}
            </h1>

            <motion.div
              className={`${styles.separator} p-my-1 p-md-my-3`}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2 }}
              variants={postTitleUnderline}
            />

            <div className="pb-5">
              {post?.excerpt?.rendered && parse(post?.excerpt?.rendered)}
            </div>

            <PostTags postTags={postTags} />
          </div>

          <div className="p-col-12 p-md-8">
            <div className="p-grid p-align-center">
              <div className="p-col-12 p-md-6">{leftPostImages}</div>
              <div className="p-col-12 p-md-6">{rightPostImages}</div>
            </div>
          </div>
        </div>
      </div>

      <LightBox
        images={imgs}
        show={show}
        setShow={setShow}
        activeIndex={activeIndex}
      />
    </div>
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
  const postTags = await getPostTags(params.slug);
  return {
    props: {
      post,
      postTags,
    },
    revalidate: 10, // In seconds
  };
}
