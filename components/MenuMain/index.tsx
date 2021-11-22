// import { useRef } from "react";

import Link from "next/link";

import { motion, useCycle } from "framer-motion";

import { getCategories, getTags, scaleAndTab, stagger } from "lib";

// import { MenuToggle } from "./MenuToggle";
// import { Navigation } from "./Navigation";

import { useDimensions } from "./use-dimensions";

// import styles from "./Menu.module.css";

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

export default function Menu({
  categories,
  currCategory,
  tags,
}: {
  categories: any;
  currCategory?: any;
  tags: any;
}) {
  // const [isOpen, toggleOpen] = useCycle(false, true);

  // const containerRef = useRef(null);

  // const { height } = useDimensions(containerRef);

  // useEffect(() => {
  //   toggleOpen();
  // }, []);

  return (
    <>
      {/* <motion.nav
        className={styles.nav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={toggleOpen} />
      </motion.nav> */}
    </>
  );
}
