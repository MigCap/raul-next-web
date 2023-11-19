import { Metadata } from 'next'

import { AnimatePresence, motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";

import { GlobalStyle, Main, theme, mixins } from "styles";
import { Providers } from "contexts/Providers";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import { GdprDialog } from "components/Gdpr";

export const metadata: Metadata = {
  title: 'Raúl de Diego Portfolio',
  description: 'Raúl de Diego Portfolio',
}

const router: any = {}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          {/* <link
            href="https://fonts.googleapis.com/css?family=Karla:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oswald:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Josefin+Slab:700&display=swap"
            rel="stylesheet"
          /> */}
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body>
            {/* <GlobalStyle /> */}
            {/* <ThemeProvider theme={theme}> */}
                {/* <AnimatePresence exitBeforeEnter> */}
                    {/* <motion.div key={router.route}> */}
                        {/* <Providers> */}
                            {/* <Header /> */}
                            {children}
                            {/* <Footer /> */}
                            {/* <GdprDialog /> */}
                        {/* </Providers> */}
                    {/* </motion.div> */}
                {/* </AnimatePresence> */}
            {/* </ThemeProvider> */}
        </body>
      </html>
    )
  }
