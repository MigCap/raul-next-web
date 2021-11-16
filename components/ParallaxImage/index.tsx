import { useState, useRef, useLayoutEffect } from "react";

import { motion, useViewportScroll, useTransform } from "framer-motion";

import styles from "./Parallax.module.css";

export function ParallaxImage({ src, ...style }: any) {
  const [elementTop, setElementTop] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false,
  });

  useLayoutEffect(() => {
    const element: any = ref.current;
    setElementTop(element?.offsetTop);
  }, [ref]);

  return (
    // <div
    //   ref={ref}
    //   className="image-container"
    //   style={{
    //     position: "relative",
    //     // marginBottom: "50px",
    //     zIndex: 1,
    //   }}
    // >
    //   <motion.div
    //     className="overlay"
    //     style={{
    //       top: 0,
    //       left: 0,
    //       width: "100px",
    //       height: "100px",
    //       position: "absolute",
    //       ...style,
    //       y,
    //     }}
    //   />
    //   <img
    //     src={src}
    //     alt=""
    //     style={{
    //       background: "url(src) no-repeat fixed",
    //       backgroundPosition: "center center",
    //       //   -webkit-background-size: cover
    //       //   -moz-background-size: 'cover',
    //       //   -o-background-size: 'cover',
    //       backgroundSize: "cover",
    //       minHeight: "500px",
    //     }}
    //   />
    // </div>

    <img alt="" className={styles.image} />
  );
}
