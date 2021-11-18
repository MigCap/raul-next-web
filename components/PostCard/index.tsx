import Link from "next/link";
import Image from "next/image";

import { Card } from "primereact/card";

import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";

import { getFeaturedImage } from "lib";

import styles from "./PostCard.module.css";

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  // const header = featuredMedia && (
  //   <div
  //     style={{
  //       position: "relative",
  //       height: "200px",
  //     }}
  //   >
  //     <Image
  //       src={`${featuredMedia?.["source_url"]}`}
  //       layout="fill"
  //       alt={featuredMedia?.["alt_text"]}
  //       className={styles.cardImage}
  //     />
  //   </div>
  // );

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

  const arrowMotion = {
    rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
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
      initial="rest"
      whileHover="hover"
      animate="rest"
      // variants={postCardMotion}
      className={`${styles.card} p-col-4`}
    >
      <Link href={`/posts/${post.slug}`}>
        <a>
          {/* <Card
            // title={post.title.rendered}
            style={{ minHeight: "20rem" }}
            // header={header}
            className={styles.card}
          >
          </Card> */}
          <>
            <p className="p-m-0 p-p-0">
              {post.title.rendered}
              {/* <motion.span variants={arrowMotion}>
                <i
                  className="pi pi-arrow-right p-ml-1"
                  style={{ fontSize: "0.6em", color: "#63666f" }}
                ></i>
              </motion.span> */}
              <motion.span variants={arrowMotion}> →</motion.span>
            </p>
            {featuredMedia && (
              <div className={styles.cardImageContainer}>
                <Image
                  src={`${featuredMedia?.["source_url"]}`}
                  layout="fill"
                  alt={featuredMedia?.["alt_text"]}
                  className={styles.cardImage}
                />
              </div>
            )}
          </>
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
