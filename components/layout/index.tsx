import { AnimatePresence, motion } from "framer-motion";

import styled, { ThemeProvider } from "styled-components";

import { Providers } from "contexts/Providers";
import Header from "components/layout/Header";
// import Social from "components/Social";
// import Email from "components/layout/Email";
import Footer from "components/layout/Footer";
import { GdprDialog } from "components/Gdpr";

import { useCustomRouter as useRouter } from "hooks";

import { GlobalStyle, Main, theme, mixins } from "styles";

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

export default function Layout({ children, router }: any) {
  const { isHomePage, isAboutPage, isWorkDetail, isPortfolioCategories } =
    useRouter();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter>
          {/* <AnimatePresence exitBeforeEnter onExitComplete={onExit}> */}
          <motion.div key={router.route}>
            <Providers>
              <Header />
              {/* {isWorkDetail && <Social />} */}
              {/* <Email /> */}
              {isHomePage || isAboutPage || isPortfolioCategories ? (
                <>{children}</>
              ) : (
                <MainContainer>{children}</MainContainer>
              )}

              <Footer />

              <GdprDialog />
            </Providers>
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
