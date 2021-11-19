import { useEffect } from "react";

import Head from "next/head";
import Router from "next/router";

import { AnimatePresence } from "framer-motion";

import type { AppProps } from "next/app";

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
    router.push(router.pathname);
  }, []);

  return (
    <>
      {/* <Head>
        you can add metadata here, for all pages
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head> */}
      <AnimatePresence exitBeforeEnter>
        {/* <AnimatePresence exitBeforeEnter onExitComplete={onExit}> */}
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}
export default MyApp;
