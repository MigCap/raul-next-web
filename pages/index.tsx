import { ReactNode } from "react";

import Head from "next/head";

import { motion } from "framer-motion";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { getMedia, getPosts, getCategories, about } from "lib";

import Hero from "components/Hero";
import WorksGallery from "components/WorksGallery";

import { theme, mixins, media, Section } from "styles";

// import styles from "styles/Home.module.css";

export default function Home({ posts, media, categories }: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego Portfolio</title>
        <meta name="description" content="Raúl de Diego Portfolio" />
      </Head>

      <motion.main initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Hero />

        <section className="container">
          <HomeSection title={about.title}>
            <p
              className="p-text-left"
              style={{
                fontSize: "1rem",
                // margin: "0 0 0 10rem",
                // maxWidth: "70%",
              }}
            >
              {about.description}
            </p>
          </HomeSection>

          <HomeSection title={"works"}>
            <div
              className="p-d-flex"
              style={{
                marginBottom: "0 0 5rem 0",
              }}
            >
              <WorksGallery
                posts={posts}
                media={media}
                className="p-grid p-align-center p-justify-center"
                style={{ width: "100%" }}
              />
            </div>
          </HomeSection>
        </section>
      </motion.main>
    </>
  );
}

function HomeSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <HomeSectionContainer>
      <FlexHeaderContainer className="p-d-flex p-ai-center p-jc-center">
        <h3>{title.toUpperCase()}</h3>
        <LineSeparator />
      </FlexHeaderContainer>
      {children}
    </HomeSectionContainer>
  );
}

const HomeSectionContainer = styled(Section)`
  position: relative;
  max-width: 700px;
  padding: 50px 0;
  &:first-of-type {
    padding-top: 100px;
  }
`;
const FlexHeaderContainer = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  max-width: 750px;
  margin: 0.5rem 0;
  ${media.tablet`width: 100%;`};
  h3 {
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.teal};
    margin: 0;
    padding: 0;
  }
`;
const LineSeparator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${theme.colors.teal};
  margin: 3px 0 0 1rem;
`;

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPosts();
  const media = await getMedia(posts);
  const categories = await getCategories();
  return {
    props: {
      posts,
      media,
      categories,
    },
    revalidate: 10, // In seconds
  };
}
