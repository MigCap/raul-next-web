import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInUp, getFeaturedImage, scaleAndTab } from "lib";

import { colors } from "styles/theme";

import styles from "./PostCard.module.css";

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

export default function PostCard({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  const { source_url, alt_text } = featuredMedia;

  return (
    <motion.div variants={fadeInUp} className={`${styles.card} p-col-4`}>
      <motion.div
        whileHover="hover"
        whileTap="tap"
        animate="animate"
        initial="initial"
        variants={postCard}
      >
        <Link
          href={{
            pathname: "/posts/[slug]",
            query: { slug: post.slug },
          }}
        >
          <a>
            <motion.p className="p-m-0 p-p-0" variants={scaleAndTab}>
              {post.title.rendered}
              <motion.span variants={arrowMotion}> →</motion.span>
            </motion.p>
            {featuredMedia && (
              <motion.div
                className={`${styles.imageContainer}`}
                variants={scaleAndTab}
              >
                <Image
                  priority
                  src={source_url}
                  layout="fill"
                  alt={alt_text}
                  className={`${styles.image}`}
                />
              </motion.div>
            )}
          </a>
        </Link>
      </motion.div>
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
