import Image from "next/image";

import { motion } from "framer-motion";

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
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <div
        className={`${styles["img-hover-zoom"]} p-mb-2 p-mb-md-3`}
        onClick={() => onClick(index)}
      >
        <Image
          src={src}
          layout="fill"
          alt={src}
          className={`${styles["post-detail-image"]}`}
        />
      </div>
    </motion.div>
  );
}
