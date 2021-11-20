import { useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import styles from "styles/Home.module.css";

// Import styles
// import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";

import "styles/globals.css";

const routeChange = () => {
  // Temporary fix to avoid flash of unstyled content
  // during route transitions. Keep an eye on this
  // issue and remove this code when resolved:
  // https://github.com/vercel/next.js/issues/17464

  const tempFix = () => {
    const allStyleElems = document.querySelectorAll('style[media="x"]');
    allStyleElems.forEach((elem) => {
      elem.removeAttribute("media");
    });
  };
  tempFix();
};

Router.events.on("routeChangeComplete", routeChange);
Router.events.on("routeChangeStart", routeChange);

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    router.push(router.asPath);
  }, []);

  return (
    <>
      <Head>
        {/* you can add metadata here, for all pages */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnimatePresence exitBeforeEnter>
        {/* <AnimatePresence exitBeforeEnter onExitComplete={onExit}> */}

        <div
          className="p-my-3 container"
          style={{ position: "relative", width: "5rem" }}
        >
          <Image
            src={`/assets/logo-raul.png`}
            // layout="fill"
            alt={`logo-raul`}
            width={50}
            height={50}
            className={styles.logo}
          />
        </div>

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
export default MyApp;
