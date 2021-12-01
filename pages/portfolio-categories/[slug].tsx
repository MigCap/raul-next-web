import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import {
  getSlugs,
  getCategory,
  getPostsByCategoryId,
  getMedia,
  getCategories,
  getTags,
} from "lib";

import { MenuSide } from "components/MenuSide";
import WorksGallery from "components/WorksGallery";

import { Section, media } from "styles";

export default function PortfolioCategoryPage({
  category,
  posts,
  media,
  categories,
  tags,
}: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego - {category?.name} Category</title>
        <meta
          name="description"
          content={`Raúl de Diego - ${category?.name} Category`}
        />
      </Head>

      <Section>
        <PortfolioCategoryContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <MenuSide
            categories={categories}
            tags={tags}
            currCategory={category?.name}
          />
          <WorksGallery posts={posts} media={media} />
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
  ${media.phablet`flex-direction: column;`};
`;

export async function getStaticPaths() {
  const paths = await getSlugs("categories");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const categories = await getCategories();
  const tags = await getTags();
  const category = await getCategory(params.slug);
  const posts = await getPostsByCategoryId(category?.id);
  const media = await getMedia(posts);
  return {
    props: {
      categories,
      tags,
      category,
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}