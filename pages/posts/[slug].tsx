import Link from "next/link";

import { Button } from "primereact/button";

import { motion } from "framer-motion";

import PostImage from "components/PostImage";
import PostTag from "components/PostTag";

import { getPost, getSlugs, getPostTags, getImagesSources, parse } from "lib";

import styles from "./PostPage.module.css";

export default function PostPage({
  post,
  postTags,
}: {
  post: any;
  postTags: any;
}) {
  const srcs = getImagesSources(post);

  const postTagsElements =
    postTags &&
    postTags.map((tag: any, i: number) => {
      return <PostTag key={tag?.id} tag={tag} />;
    });

  const leftPostImages =
    srcs?.length >= 3 &&
    srcs.slice(0, 3).map((src: string) => {
      return <PostImage src={src} key={src} />;
    });

  const rightPostImages =
    srcs?.length >= 4 &&
    srcs.slice(3, srcs?.length).map((src: string) => {
      return <PostImage src={src} key={src} />;
    });

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const button = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    pressed: { scale: 0.95 },
  };
  const arrow = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.4 } },
  };

  return (
    <div className="container">
      <div className={`p-px-5 p-mx-lg-6 p-mt-4 p-md-mt-5 p-pt-3`}>
        {/* <div className="p-md-my-4">
          <Link href="/" passHref>
            <Button
              // label="Home"
              icon="pi pi-angle-double-left"
              iconPos="left"
              type="button"
              className="p-button-outlined p-button-rounded p-button-sm"
              style={{ color: "var(--teal-500)" }}
            />
            </Link>
          </div> */}
        <Link href="/" passHref>
          <motion.div
            className={styles["refresh"]}
            // onClick={onClick}
            variants={button}
            initial="rest"
            whileHover="hover"
            whileTap="pressed"
          >
            <motion.svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              variants={arrow}
            >
              <path
                d="M12.8 5.1541V2.5a.7.7 0 0 1 1.4 0v5a.7.7 0 0 1-.7.7h-5a.7.7 0 0 1 0-1.4h3.573c-.7005-1.8367-2.4886-3.1-4.5308-3.1C4.8665 3.7 2.7 5.85 2.7 8.5s2.1665 4.8 4.8422 4.8c1.3035 0 2.523-.512 3.426-1.4079a.7.7 0 0 1 .986.9938C10.7915 14.0396 9.2186 14.7 7.5422 14.7 4.0957 14.7 1.3 11.9257 1.3 8.5s2.7957-6.2 6.2422-6.2c2.1801 0 4.137 1.1192 5.2578 2.8541z"
                fill="var(--teal-300)"
                fillRule="nonzero"
              />
            </motion.svg>
          </motion.div>
        </Link>

        <div className="p-grid p-align-center">
          <div className="p-col-12 p-md-4 p-col-align-start p-mt-2 p-md-mt-6">
            <h1 className={`${styles["post-title"]} p-mb-2`}>
              {post?.title?.rendered}
            </h1>
            <motion.div
              className={`${styles.separator} p-my-1 p-md-my-3`}
              // animate={{ x: 100 }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={variants}
            />
            <div className="pb-5">
              {post?.excerpt?.rendered && parse(post?.excerpt?.rendered)}
            </div>
            <div className="p-col-12 p-d-flex p-flex-wrap p-jc-start p-mt-2 p-md-mt-6 p-p-0">
              {postTagsElements}
            </div>
          </div>

          <div className="p-col-12 p-md-8">
            <div className="p-grid p-align-center">
              <div className="p-col-12 p-md-6">
                <div className="p-d-flex p-flex-column">{leftPostImages}</div>
              </div>
              <div className="p-col-12 p-md-6">{rightPostImages}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
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
