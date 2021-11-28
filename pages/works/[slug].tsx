import { useCallback, useState } from "react";

import Head from "next/head";

import { motion } from "framer-motion";
import styled from "styled-components";

import BackButton from "components/BackButton";
import LightBox from "components/LightBox";
import PostImage from "components/work/WorkImage";
import WorkTags from "components/work/WorkTags";
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
  postTags,
  postCategories,
}: {
  post: any;
  postTags: any;
  postCategories: any;
}) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const imgs = getPostsImagesSources(post);

  const onClickImg = useCallback((index: number) => {
    setShow(true);
    setActiveIndex(index);
  }, []);

  const leftPostImages =
    imgs?.length >= 3 &&
    imgs.slice(0, 2).map((img: any) => {
      const { src, alt, index } = img;
      return (
        <PostImage src={src} index={index} onClick={onClickImg} key={src} />
      );
    });

  const rightPostImages =
    imgs?.length >= 4 &&
    imgs.slice(2, 5).map((img: any) => {
      const { src, alt, index } = img;
      return (
        <PostImage src={src} index={index} onClick={onClickImg} key={src} />
      );
    });

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
        <PostDetailContainer
          initial="initial"
          animate="animate"
          exit={{ opacity: 0 }}
        >
          <BackButton />
          <PostDetailContent imagesLength={imgs?.length}>
            <motion.div variants={stagger}>
              <PostTitle variants={fadeInUp}>{postTitle}</PostTitle>
              <LineSeparatorContainer variants={fadeInUp}>
                <LineSeparator variants={postTitleUnderline} />
              </LineSeparatorContainer>
              <PostDescription variants={fadeInUp}>
                {post?.excerpt?.rendered && parse(post?.excerpt?.rendered)}
              </PostDescription>
              <WorkTags postTags={postTags} />
              <WorkCategories postCategories={postCategories} />
            </motion.div>
            <div>
              <PostImagesContainer imagesLength={imgs?.length}>
                <motion.div variants={stagger}>{leftPostImages}</motion.div>
                {imgs?.length > 3 && (
                  <motion.div variants={stagger}>{rightPostImages}</motion.div>
                )}
              </PostImagesContainer>
            </div>
          </PostDetailContent>
        </PostDetailContainer>
        {/* <LightBox
          images={imgs}
          show={show}
          setShow={setShow}
          activeIndex={activeIndex}
        /> */}
      </Section>
    </>
  );
}

interface ImagesLengthProp {
  imagesLength: number;
}

const PostDetailContainer = styled(motion.article)``;
const PostDetailContent = styled.div<ImagesLengthProp>`
  ${mixins.gridCenter};
  grid-template-columns: 40% 60%;
  ${media.desktop`grid-template-columns: 100%;`};
  gap: 1rem;
`;
const PostTitle = styled(motion.h1)`
  margin: 1rem 0 0 0;
  color: ${theme.colors.teal};
  font-size: 2.5rem;
`;
const LineSeparatorContainer = styled(motion.div)`
  margin: 0.5rem 0;
  ${media.desktop`margin: 1rem 0;`};
`;
const LineSeparator = styled(motion.div)`
  width: 20%;
  height: 2px;
  background-color: ${theme.colors.teal};
`;
const PostDescription = styled(motion.div)`
  padding: 1rem 0 0.5rem 0;
  ${media.desktop`padding: 1rem 0 1rem 0;`};
`;
const PostImagesContainer = styled.div<ImagesLengthProp>`
  margin: 0;
  ${media.desktop`margin: 3rem 0 0 0;`};
  ${mixins.gridCenter};
  grid-template-columns: ${(props: any) =>
    props.imagesLength >= 4 ? `50% 50%` : "100%"};
  ${media.desktop`grid-template-columns: 100%;`};
  gap: 1rem;
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
  const postTags = await getPostTags(post?.tags);
  const postCategories = await getPostCategories(post?.categories);
  return {
    props: {
      post,
      postTags,
      postCategories,
    },
    revalidate: 10, // In seconds
  };
}
