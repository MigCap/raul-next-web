import Image from "next/image";

import { motion } from "framer-motion";

import { fadeInUp } from "lib";

import styles from "./PostImage.module.css";

export default function PostImage({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: any;
}) {
  //   const newImageSrc = src.toString().replace(/[()]/g, "");
  //   const convertImage = (w: any, h: any) => `
  // <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //   <defs>
  //     <linearGradient id="g">
  //       <stop stop-color="#333" offset="20%" />
  //       <stop stop-color="#222" offset="50%" />
  //       <stop stop-color="#333" offset="70%" />
  //     </linearGradient>
  //   </defs>
  //   <rect width="${w}" height="${h}" fill="#333" />
  //   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  //   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  // </svg>`;

  //   const toBase64 = (str: any) =>
  //     typeof window === "undefined"
  //       ? Buffer.from(str).toString("base64")
  //       : window.btoa(str);

  return (
    <motion.div variants={fadeInUp} className={`p-mb-2 p-mb-md-3`}>
      <motion.div
        className={`${styles.imgContainer}`}
        onClick={() => onClick(index)}
        // exit={{ opacity: 0 }}
        // initial="initial"
        // animate="animate"
      >
        <Image
          // priority
          src={src}
          layout="responsive"
          width={850}
          height={570}
          alt={src}
          className={`${styles.image}`}
          // blurDataURL={`data:image/svg+xml;base64,${toBase64(
          //   convertImage(700, 475)
          // )}`}
        />
      </motion.div>
    </motion.div>
  );
}
