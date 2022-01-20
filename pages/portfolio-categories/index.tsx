import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import {
  getMedia,
  getPosts,
  getPostsByLang,
  getCategories,
  getTags,
  about,
} from "lib";

import BackButton from "components/BackButton";
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
        <title>{about.name} Works</title>
        <meta name="description" content={`${about.name} Works`} />
      </Head>

      <Section>
        <MainCategoriesContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <div>
            <BackButton />
            <MenuSide categories={categories} tags={tags} />
          </div>
          <WorksGallery posts={posts} media={media} />
        </MainCategoriesContainer>
      </Section>
    </>
  );
}

const MainCategoriesContainer = styled(motion.div)`
  padding-top: 1rem;
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  ${media.phablet`flex-direction: column;`};
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
