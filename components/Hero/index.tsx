import Image from "next/image";

import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { useInView } from "react-intersection-observer";

import { ParallaxImage } from "../ParallaxImage/index";

import styles from "./Hero.module.css";

// export default function Hero() {
//   const { scrollY } = useViewportScroll();
//   const y1 = useTransform(scrollY, [0, 300], [0, 200]);
//   const y2 = useTransform(scrollY, [0, 300], [0, -100]);

//   const [ref, inView, entry] = useInView({
//     /* Optional options */
//     threshold: 0.5,
//     triggerOnce: false,
//   });

//   const variants = {
//     visible: { opacity: 1, scale: 1, y: 0 },
//     hidden: {
//       opacity: 0,
//       scale: 0.65,
//       y: 50,
//     },
//   };

//   return (
//     <>
//       {/* <div className={`${styles["hero-container"]}`}>
//         <h1 className="p-text-center p-py-5">Raúl de Diego Vázquez</h1>
//       </div> */}

//       <div
//         style={{
//           height: "100vh",
//           width: "100vw",
//           position: "absolute",
//           top: 0,
//           left: 0,
//         }}
//         className="p-d-flex p-jc-center"
//       >
//         <h1 style={{ marginTop: "15rem" }} className="p-text-center">
//           Diseñador Gráfico Senior e Ilustrador
//         </h1>
//       </div>

//       <div className={`${styles["hero-container"]}`}>
//         <div className={`${styles["logo-wrapper"]}`}>
//           <Image
//             src="/assets/logo-raul.png"
//             alt="Raul de Diego logo"
//             width={50}
//             height={50}
//             layout="fixed"
//           />
//         </div>

//         {/* <div style={{ position: "fixed", top: 150, left: 10 }}>
//           {" "}
//           {"is in view? " + inView}
//         </div> */}

//         <div style={{ height: 200 }} />

//         <motion.div
//           className={`${styles.box}`}
//           style={{ y: y1, x: -50, background: "#f9f07e" }}
//         ></motion.div>

//         <motion.div
//           className={`${styles.box}`}
//           style={{ y: y2, x: 50, marginTop: "-3.5rem", background: "salmon" }}
//         ></motion.div>

//         {/* <div style={{ height: 200 }} /> */}

//         {/* <motion.div
//           animate={inView ? "visible" : "hidden"}
//           variants={variants}
//           transition={{ duration: 1, ease: "easeOut" }}
//           ref={ref}
//           style={{ color: "var(--surface-200)" }}
//           className={`${styles.magic} p-d-flex p-flex-column p-ai-center p-jc-center`}
//         >
//           <h1 className="p-text-center">Raúl de Diego Vázquez</h1>
//           <p className="p-text-center p-px-5">
//             Me llamo Raúl, encantado de saludarte. ¡Bienvenido/a a mi portfolio!
//             Un lugar donde encontrarás algunos de mis mejores trabajos a los
//             largo de mi carrera y mis estudios, así como mi experiencia
//             profesional, clientes y educación. ¿Qué más puedo contarte sobre mí?
//             Alguien creativo, comprometido, competitivo, resiliente, con
//             capacidad y gusto por el trabajo en equipo, de rápido aprendizaje,
//             simpático, dicharachero, empático, con sus inquietudes… Aunque lo
//             mejor es que charlemos y me conozcas personalmente. ¿Hablamos pronto
//             y formamos equipo?
//           </p>
//         </motion.div> */}
//       </div>
//     </>
//   );
// }

export default function Hero() {
  const img = {
    src: "/assets/background-Hero.jpg",
    // background: "#C24B47",
    width: "10rem",
    height: "10rem",
    left: 0,
    top: 0,
  };

  return (
    <>
      {/* <div
        style={{
          width: "100vw",
          maxWidth: "100vw",
          height: "100%",
          // maxHeight: "100vh",
          // margin: "0 auto",
          // perspective: "1200px",
          // paddingTop: "15vh",
          // paddingBottom: "15vh",
        }}
      >
        <ParallaxImage {...img} />
      </div> */}
      {/* <ParallaxImage {...img} /> */}
    </>
  );
}

// export default function Hero() {
//   const img = {
//     src: "/assets/background-Hero.jpg",
//     // background: "#C24B47",
//     width: "10rem",
//     height: "10rem",
//     left: 0,
//     top: 0,
//   };

//   return (
//     <>
//       <div
//         style={{
//           width: "100vw",
//           maxWidth: "100vw",
//           // minHeight: "100vh",
//           // maxHeight: "100vh",
//           // margin: "0 auto",
//           // perspective: "1200px",
//           // paddingTop: "15vh",
//           // paddingBottom: "15vh",
//         }}
//       >
//         <Parallax pages={2} style={{ top: "0", left: "0" }}>
//           <ParallaxLayer
//             offset={0}
//             speed={2.5}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <p>Scroll down</p>
//           </ParallaxLayer>
//           <ParallaxLayer
//             offset={1}
//             speed={2}
//             style={{ backgroundColor: "#ff6d6d" }}
//           />
//           <ParallaxLayer
//             offset={1}
//             speed={0.5}
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               color: "white",
//             }}
//           >
//             <p>Scroll up</p>
//           </ParallaxLayer>
//         </Parallax>
//       </div>
//     </>
//   );
// }
