export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      // staggerDirection: -1,
    },
  },
};

export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: easing,
    },
  },
};

export const fadeInRight = {
  initial: {
    x: 200,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      // delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const scaleAndTab = {
  hover: {
    scale: 1.02,
    // translateY: -2,
    // x: 15,
    // boxShadow: '',
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
  },
};

// const arrowMotion = {
//   initial: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween" },
//   hover: {
//     opacity: 1,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeIn",
//     },
//   },
// };
