import { ReactNode } from "react";

import Head from "next/head";

import { motion } from "framer-motion";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

import { useTranslation } from "hooks";

import { getMedia, getPosts, getCategories, about } from "lib";

import Hero from "components/Hero";
import WorksGallery from "components/WorksGallery";

import { theme, mixins, media, Section } from "styles";

export default function Home({ posts, media, categories }: any) {
  const { locale } = useTranslation({});

  return (
    <>
      <Head>
        <title>Raúl de Diego Portfolio</title>
        <meta name="description" content="Raúl de Diego Portfolio" />
      </Head>

      <motion.main initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Hero />

        <section className="container" style={{ marginTop: "5rem" }}>
          <HomeSection title={about?.title?.[locale]}>
            <p>{about?.description?.[locale]}</p>
          </HomeSection>

          <HomeSection title={"works"}>
            <WorksGallery posts={posts} media={media} />
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
      <FlexHeaderContainer>
        <h3>{title.toUpperCase()}</h3>
        <LineSeparator />
      </FlexHeaderContainer>
      {children}
    </HomeSectionContainer>
  );
}

const HomeSectionContainer = styled(Section)`
  position: relative;
  padding: 50px 0;
  ${media.desktop`padding: 25px 100px;`};
  ${media.tablet`padding: 1rem 1.2rem;`};
  &:first-of-type {
    padding-top: 100px;
    ${media.desktop`padding-top: 50px;`};
  }
`;
const FlexHeaderContainer = styled.div`
  ${mixins.flexCenter};
  width: 100%;
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
