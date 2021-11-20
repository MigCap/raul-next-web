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
      duration: 0.6,
      ease: easing,
    },
  },
};

export const scaleAndTab = {
  hover: {
    scale: 1.02,
    translateY: -2,
    // x: 15,
    // boxShadow: '',
    transition: { duration: 0.5, type: "tween", ease: "easeOut" },
  },
  tap: {
    scale: 0.95,
  },
};
