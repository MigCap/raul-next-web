import { motion } from "framer-motion";

import { MenuItem } from "./MenuItem";

import styles from "./Menu.module.css";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants} className={styles.ul}>
    {items.map((item: any, i: number) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </motion.ul>
);

const items = [
  { id: 0, label: "WORK" },
  { id: 1, label: "BLOG" },
  { id: 2, label: "CONTACT" },
  { id: 3, label: "INFO" },
];
