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
    <motion.div
      className={`${styles["img-container"]} p-mb-2 p-mb-md-3`}
      onClick={() => onClick(index)}
      exit={{ opacity: 0 }}
      initial="initial"
      animate="animate"
    >
      <Image
        src={src}
        layout="responsive"
        width={850}
        height={570}
        alt={src}
        className={`${styles["image"]}`}
      />
    </motion.div>
  );
}
