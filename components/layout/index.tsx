import { AnimatePresence, motion } from "framer-motion";

import styled, { ThemeProvider } from "styled-components";

import Header from "components/layout/Header";
import Social from "components/Social";
// import Email from "components/layout/Email";
import Footer from "components/layout/Footer";

import { getRoutePathById, ROUTES_IDS } from "lib";

import { GlobalStyle, Main, theme, mixins } from "styles";

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

export default function Layout({ children, router }: any) {
  const isHomePage = router?.pathname === getRoutePathById(ROUTES_IDS.HOME);
  const isAboutPage = router?.pathname === getRoutePathById(ROUTES_IDS.ABOUT);
  const isWorkDetail = router?.pathname?.startsWith("/works/");
  const isPortfolioCategories = router?.pathname?.startsWith(
    "/portfolio-categories/"
  );

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          {/* <AnimatePresence exitBeforeEnter onExitComplete={onExit}> */}
          <motion.div key={router.route}>
            <Header location={router} />
            {isWorkDetail && <Social />}
            {/* <Email /> */}
            {isHomePage || isAboutPage || isPortfolioCategories ? (
              <>{children}</>
            ) : (
              <MainContainer>{children}</MainContainer>
            )}

            <Footer />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
