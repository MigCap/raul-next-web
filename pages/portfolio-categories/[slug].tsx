import Head from "next/head";

import {
  useQuery,
  dehydrate,
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "react-query";

import { motion } from "framer-motion";
import styled from "styled-components";

import {
  getSlugs,
  getCategory,
  getPostsByCategoryId,
  getMedia,
  getCategories,
  getTags,
  about,
} from "lib";

import WorksGallery from "components/WorksGallery";
import { MenuSide } from "components/MenuSide";

import { useWorksContext } from "contexts/works";

import { Section, media } from "styles";

export async function getStaticPaths() {
  const paths = await getSlugs("categories");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}
const queryClient = new QueryClient();
const STALE_TIME = 10000;

export async function getStaticProps({ params, locale }: any) {
  await queryClient.prefetchQuery(["getCategories"], getCategories, {
    staleTime: STALE_TIME,
  });

  // const categories = await getCategories();

  const tags = await getTags();
  const category = await getCategory(params.slug);
  const posts = await getPostsByCategoryId(category?.id, locale);
  const media = await getMedia(posts);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      // categories,
      tags,
      category,
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}

export default function PortfolioCategoryPage({
  category,
  posts,
  media,
  // categories,
  tags,
}: any) {
  const {
    isSuccess,
    data: categories,
    isLoading,
    isError,
  } = useQuery(["getCategories"], getCategories);

  // const {worksState: {categories: categoriesState}} = useWorksContext();

  return (
    <>
      <Head>
        <title>
          {about.name} Works Categories - {category?.name}
        </title>
        <meta
          name="description"
          content={`Raúl de Diego Works Categories - ${category?.name}`}
        />
      </Head>

      <Section margin="0 2rem" maxWidth="100%">
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
