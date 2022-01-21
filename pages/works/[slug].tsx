import { useCallback, useState } from "react";

import Head from "next/head";

import { motion } from "framer-motion";

// import BackButton from "components/BackButton";
import LightBox from "components/LightBox";
import WorkImage from "components/work/WorkImage";
// import WorkTags from "components/work/WorkTags";
import WorkCategories from "components/work/WorkCategories";
import { Filigrana } from "components/Icons";

import {
  getSlugs,
  // getPostTags,
  getPostCategories,
  getPostsImagesSources,
  getHtmlTagContentFromString,
  fadeInUp,
  parse,
  stagger,
  getPostBySlug,
} from "lib";

import {
  Section,
  WorkDetailContainer,
  // BackButtonWrapper,
  FiligranaContainerDesktop,
  WorkDetailContent,
  WorkTitle,
  LineSeparatorContainer,
  LineSeparator,
  WorkDescription,
  WorkImagesContainer,
} from "styles/workSlug";

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
    <WorkImage img={img} onClick={onClickImg} key={img?.src} />
  ));

  const postTitle = post?.title?.rendered;

  const postDescriptionParagraphs: string = getHtmlTagContentFromString(
    post?.content?.rendered,
    "p"
  );

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
        <WorkDetailContainer>
          {/* <BackButtonWrapper>
            <BackButton />
          </BackButtonWrapper> */}

          {/* <FiligranaContainerDesktop>
            <Filigrana />
          </FiligranaContainerDesktop> */}

          <WorkDetailContent>
            <motion.div variants={stagger}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FiligranaContainerDesktop>
                  <Filigrana />
                </FiligranaContainerDesktop>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <WorkTitle variants={fadeInUp}>{postTitle}</WorkTitle>
                  <LineSeparatorContainer variants={fadeInUp}>
                    <LineSeparator variants={postTitleUnderline} />
                  </LineSeparatorContainer>
                </div>
              </div>

              <WorkCategories postCategories={postCategories} />

              <WorkDescription variants={fadeInUp}>
                {parse(postDescriptionParagraphs)}
              </WorkDescription>
            </motion.div>

            <WorkImagesContainer variants={stagger}>
              {postImages}
            </WorkImagesContainer>
          </WorkDetailContent>
        </WorkDetailContainer>

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
