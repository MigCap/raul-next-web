import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import { getMedia, getPosts, getCategories, getTags, about } from "lib";

import { MenuSide } from "components/MenuSide";
import WorksGallery from "components/WorksGallery";

import { theme, mixins, media, Main } from "styles";
// import styles from "styles/WorksPage.module.css";

export default function CategoriesPage({
  posts,
  media,
  categories,
  tags,
}: any) {
  return (
    <>
      <Head>
        <title>{about.name} Works</title>
        <meta name="description" content={`${about.name} Works`} />
      </Head>

      <MainCategoriesContainer
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <MenuSide categories={categories} tags={tags} />
        <WorksGallery
          posts={posts}
          media={media}
          className="p-grid p-align-center p-justify-end"
          style={{ width: "100%" }}
        />
      </MainCategoriesContainer>
    </>
  );
}

const MainCategoriesContainer = styled(motion.div)`
  display: flex;
  margin: 10rem 0 5rem 0;
  min-height: 80vh;
`;

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPosts();
  const media = await getMedia(posts);
  const categories = await getCategories();
  const tags = await getTags();
  return {
    props: {
      posts,
      media,
      categories,
      tags,
    },
    revalidate: 10, // In seconds
  };
}
