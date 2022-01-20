import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import {
  getMedia,
  // getPosts,
  getPostsByLang,
  getCategories,
  getTags,
  about,
} from "lib";

import WorksGallery from "components/WorksGallery";
import { MenuSide } from "components/MenuSide";

import { media, Section } from "styles";

export default function CategoriesPage({
  posts,
  media,
  categories,
  tags,
}: any) {
  return (
    <>
      <Head>
        <title>{about.name} Works Categories</title>
        <meta name="description" content={`${about.name} Works Categories`} />
      </Head>

      <Section margin="0 2rem" maxWidth="100%">
        <PortfolioCategoryContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <MenuSide categories={categories} tags={tags} />
          <WorksGallery posts={posts} media={media} style={{ flexGrow: "1" }} />
        </PortfolioCategoryContainer>
      </Section>
    </>
  );
}

const PortfolioCategoryContainer = styled(motion.article)`
  padding-top: 1rem;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  ${media.desktop`flex-direction: column;`};
`;

export async function getStaticProps({ locale }: { locale: any }) {
  // const posts = await getPosts();
  const posts = await getPostsByLang(locale);
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
