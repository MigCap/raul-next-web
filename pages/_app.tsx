import { useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";

import { AnimatePresence } from "framer-motion";

// Import styles
// import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";

import "styles/globals.css";

import Header from "components/layout/Header";
import Footer from "components/layout/Footer";

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

  const isHomePage = router?.pathname === "/";

  return (
    <>
      <Head>
        {/* you can add metadata here, for all pages */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <AnimatePresence exitBeforeEnter>
        {/* <AnimatePresence exitBeforeEnter onExitComplete={onExit}> */}
        <div key={router.route}>
          <Header />

          <main
            className={isHomePage ? "" : "container"}
            style={{ minHeight: "100vh" }}
          >
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}
export default MyApp;
