/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
// import Head from "next/head";
import Router from "next/router";

import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Layout from "components/layout";

// Import styles
import "primereact/resources/themes/lara-light-teal/theme.css";
// import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";

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

  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      {/* <Head>you can add metadata here, for all pages</Head> */}
      <Layout router={router}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </Layout>
    </>
  );
}
export default MyApp;
