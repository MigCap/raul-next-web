import Link from "next/link";
import Image from "next/image";

// import { Card } from "primereact/card";

import { motion } from "framer-motion";

import { getFeaturedImage } from "lib";

import styles from "./PostCard.module.css";

let easing = [0.6, -0.05, 0.01, 0.99];

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  // const textMotion = {
  //   hover: {
  //     // color: "blue",
  //     x: 5,
  //     transition: {
  //       duration: 0.4,
  //       type: "tween",
  //       ease: "easeOut",
  //     },
  //   },
  // };

  // const postCardMotion = {
  //   hover: {
  //     // scale: 1.05,
  //     translateY: -2,
  //     transition: { duration: 0.5 },
  //   },
  // };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
    // hover: {
    //   // scale: 1.05,
    //   translateY: -2,
    //   transition: { duration: 0.5 },
    // },
  };

  const arrowMotion = {
    initial: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      // whileHover={{
      //   // scale: 1.1,
      //   translateY: -5,
      //   transition: { duration: 0.5 },
      // }}
      // initial="initial"
      // whileHover="hover"
      // animate="animate"
      variants={fadeInUp}
      // exit={{ opacity: 0 }}
      className={`${styles.card} p-col-4`}
    >
      <Link href={`/posts/${post.slug}`}>
        <a>
          <p className="p-m-0 p-p-0">
            {post.title.rendered}
            <motion.span variants={arrowMotion}> →</motion.span>
          </p>

          {featuredMedia && (
            <div className={styles.cardImageContainer}>
              <Image
                priority
                src={`${featuredMedia?.["source_url"]}`}
                layout="fill"
                alt={featuredMedia?.["alt_text"]}
                className={styles.cardImage}
              />
            </div>
          )}
        </a>
      </Link>
    </motion.div>
  );
}

export async function getStaticProps(context: any) {
  const image = await getFeaturedImage(context);

  return {
    props: {
      image,
    },
    revalidate: 10, // In seconds
  };
}
