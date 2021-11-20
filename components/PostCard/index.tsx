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
                className={`${styles.cardImageContainer}`}
                variants={scaleAndTab}
              >
                <Image
                  priority
                  src={`${featuredMedia?.["source_url"]}`}
                  layout="fill"
                  alt={featuredMedia?.["alt_text"]}
                  className={`${styles.cardImage}`}
                />
              </motion.div>
            )}
          </a>
        </Link>
      </motion.div>
    </motion.div>
  );

  // return (
  //   <>
  //     <div
  //       id="curve"
  //       className={`${styles.card}`}
  //       style={{ backgroundImage: `url(${featuredMedia?.["source_url"]})` }}
  //     >
  //       <div className={`${styles.footer}`}>
  //         <svg id="curve">
  //           <path
  //             id="p"
  //             d="M0,200 Q80,100 400,200 V150 H0 V50"
  //             transform="translate(0 300)"
  //           />
  //           <rect
  //             id="dummyRect"
  //             x="0"
  //             y="0"
  //             height="450"
  //             width="400"
  //             fill="transparent"
  //           />
  //           {/* <!-- slide up--> */}
  //           <animate
  //             xlinkHref="#p"
  //             attributeName="d"
  //             to="M0,50 Q80,100 400,50 V150 H0 V50"
  //             fill="freeze"
  //             begin="dummyRect.mouseover"
  //             end="dummyRect.mouseout"
  //             dur="0.1s"
  //             id="bounce1"
  //           />
  //           {/* <!-- slide up and curve in --> */}
  //           <animate
  //             xlinkHref="#p"
  //             attributeName="d"
  //             to="M0,50 Q80,0 400,50 V150 H0 V50"
  //             fill="freeze"
  //             begin="bounce1.end"
  //             end="dummyRect.mouseout"
  //             dur="0.15s"
  //             id="bounce2"
  //           />
  //           {/* <!-- slide down and curve in --> */}
  //           <animate
  //             xlinkHref="#p"
  //             attributeName="d"
  //             to="M0,50 Q80,80 400,50 V150 H0 V50"
  //             fill="freeze"
  //             begin="bounce2.end"
  //             end="dummyRect.mouseout"
  //             dur="0.15s"
  //             id="bounce3"
  //           />
  //           {/* <!-- slide down and curve out --> */}
  //           <animate
  //             xlinkHref="#p"
  //             attributeName="d"
  //             to="M0,50 Q80,45 400,50 V150 H0 V50"
  //             fill="freeze"
  //             begin="bounce3.end"
  //             end="dummyRect.mouseout"
  //             dur="0.1s"
  //             id="bounce4"
  //           />
  //           {/* <!-- curve in --> */}
  //           <animate
  //             xlinkHref="#p"
  //             attributeName="d"
  //             to="M0,50 Q80,50 400,50 V150 H0 V50"
  //             fill="freeze"
  //             begin="bounce4.end"
  //             end="dummyRect.mouseout"
  //             dur="0.05s"
  //             id="bounce5"
  //           />

  //           <animate
  //             xlinkHref="#p"
  //             attributeName="d"
  //             to="M0,200 Q80,100 400,200 V150 H0 V50"
  //             fill="freeze"
  //             begin="dummyRect.mouseout"
  //             dur="0.15s"
  //             id="bounceOut"
  //           />
  //         </svg>
  //         <div className={`${styles.info}`}>
  //           <div className={`${styles.name}`}>Filan Fisteku</div>
  //           <div className={`${styles.job}`}>Architect Manager</div>
  //         </div>
  //       </div>
  //       <div className={`${styles["card-blur"]}`}></div>
  //     </div>
  //   </>
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
