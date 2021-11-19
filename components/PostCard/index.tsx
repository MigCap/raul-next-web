import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { getFeaturedImage } from "lib";

import { colors } from "styles/theme";

import cs from "components/Works/Works.module.css";
import styles from "./PostCard.module.css";

let easing = [0.6, -0.05, 0.01, 0.99];

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
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
  };

  const postCard = {
    hover: {
      // scale: 1.05,
      // translateY: -2,
      // x: 15,
      color: colors.primary,
      transition: { duration: 0.5, type: "tween", ease: "easeOut" },
    },
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
    <motion.div variants={fadeInUp} className={`${styles.card} p-col-4`}>
      <motion.div
        whileHover="hover"
        animate="animate"
        initial="initial"
        variants={postCard}
      >
        <Link href={`/posts/${post.slug}`} passHref>
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
    </motion.div>
  );

  // return (
  //   <div className={`${styles.card} p-col-4`}>
  //     <div className={cs.container}>
  //       <div className={cs.box}>
  //         <div className={cs.imgBox}>
  //           {/* <img
  //             src={`${featuredMedia?.["source_url"]}`}
  //             alt={featuredMedia?.["alt_text"]}
  //           /> */}
  //           <div className={styles.cardImageContainer}>
  //             <Image
  //               priority
  //               src={`${featuredMedia?.["source_url"]}`}
  //               layout="fill"
  //               alt={featuredMedia?.["alt_text"]}
  //               className={styles.cardImage}
  //             />
  //           </div>
  //         </div>
  //         <div className={cs.content}>
  //           <h2>{post.title.rendered}</h2>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
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
