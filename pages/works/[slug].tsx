import { useCallback, useState } from "react";

import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import BackButton from "components/BackButton";
import { Filigrana } from "components/Icons";
import LightBox from "components/LightBox";
import PostImage from "components/work/WorkImage";
// import WorkTags from "components/work/WorkTags";
import WorkCategories from "components/work/WorkCategories";

import {
  getSlugs,
  getPostTags,
  getPostCategories,
  getPostsImagesSources,
  fadeInUp,
  parse,
  stagger,
  getPostBySlug,
} from "lib";

import { theme, mixins, media, Section } from "styles";

const postTitleUnderline = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function WorkPage({
  post,
  // postTags,
  postCategories,
}: {
  post: any;
  // postTags: any;
  postCategories: any;
}) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const imgs = getPostsImagesSources(post);

  const onClickImg = useCallback((index: number) => {
    setShow(true);
    setActiveIndex(index);
  }, []);

  const postImages = imgs?.map((img: any) => (
    <PostImage img={img} onClick={onClickImg} key={img?.src} />
  ));

  const postTitle = post?.title?.rendered;

  return (
    <>
      <Head>
        <title>Raúl de Diego Works - ${postTitle}</title>
        <meta
          name="description"
          content={`Raúl de Diego Works - ${postTitle}`}
        />
      </Head>

      <Section>
        <PostDetailContainer>
          <BackButtonWrapper>
            <BackButton />
          </BackButtonWrapper>

          <FiligranaContainerDesktop>
            <Filigrana />
          </FiligranaContainerDesktop>

          <PostDetailContent imagesLength={imgs?.length}>
            <motion.div variants={stagger}>
              <PostTitle variants={fadeInUp}>{postTitle}</PostTitle>

              <LineSeparatorContainer variants={fadeInUp}>
                <LineSeparator variants={postTitleUnderline} />
              </LineSeparatorContainer>

              <PostDescription variants={fadeInUp}>
                {post?.excerpt?.rendered && parse(post?.excerpt?.rendered)}
              </PostDescription>

              {/* <WorkTags postTags={postTags} /> */}
              <WorkCategories postCategories={postCategories} />
            </motion.div>

            <PostImagesContainer imagesLength={imgs?.length}>
              <motion.div variants={stagger}>{postImages}</motion.div>
            </PostImagesContainer>
          </PostDetailContent>
        </PostDetailContainer>

        <LightBox
          images={imgs}
          show={show}
          setShow={setShow}
          activeIndex={activeIndex}
        />
      </Section>
    </>
  );
}

interface ImagesLengthProp {
  imagesLength: number;
}

const PostDetailContainer = styled(motion.article)`
  display: flex;
`;
const BackButtonWrapper = styled(motion.article)`
  padding: 0.5rem 1rem 1rem 1rem;
  // ${media.thone`padding: 25px; display: none;`};
  ${media.tablet`
    padding: 25px;
    display: none;
  `};
`;
const FiligranaContainerMobile = styled.div`
  margin: 0 0.5rem;
  align-self: center;
  svg {
    width: 4rem;
    height: 100%;
  }
`;
const FiligranaContainerDesktop = styled.div`
  margin: 8rem 1rem;
  svg {
    width: 4rem;
    height: 4rem;
  }

  ${media.tablet`display: none;`};
`;
const PostDetailContent = styled.div<ImagesLengthProp>`
  margin-top: 8rem;
  width: 100%;
  ${media.phablet`
      margin-top: 1rem;
      gap: 0;
    `};
  ${mixins.gridStart};
  gap: 5rem;
  grid-template-columns: 40% 60%;
  ${media.desktop`
    grid-template-columns: 100%;
    gap: 0;
    margin-top: 1rem;
  `};
`;
// const PostTitleContainerMobile = styled.div`
//   display: flex;
// `;
const PostTitle = styled(motion.h1)`
  margin: 0 0 1rem 0;
  color: ${theme.colors.teal};
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -2px;
`;
const LineSeparatorContainer = styled(motion.div)`
  margin: 0.2rem 0 0.5rem 0;
  ${media.desktop`margin: 0.4rem 0 1rem 0;`};
  background-color: ${theme.colors.bronze};
`;
const LineSeparator = styled(motion.div)`
  width: 20%;
  height: 2px;
`;
const PostDescription = styled(motion.div)`
  padding: 3rem 0;
  ${media.desktop`padding: 1rem 0 1rem 0;`};
`;
const PostImagesContainer = styled.div<ImagesLengthProp>`
  ${mixins.gridCenter};
  grid-template-columns: "100%";
  margin: 8rem 0 0 0;
  ${media.desktop`margin: 0 0 0 0;`};
`;

export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const post = await getPostBySlug(params.slug);
  // const postTags = await getPostTags(post?.tags);
  const postCategories = await getPostCategories(post?.categories);
  return {
    props: {
      post,
      // postTags,
      postCategories,
    },
    revalidate: 10, // In seconds
  };
}
