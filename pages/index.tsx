import { ReactNode } from "react";

import Head from "next/head";

import { motion } from "framer-motion";

import { getMedia, getPosts, getCategories, about } from "lib";

import Hero from "components/Hero";
import WorksGallery from "components/WorksGallery";

// import styles from "styles/Home.module.css";

export default function Home({ posts, media, categories }: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego Portfolio</title>
        <meta name="description" content="Raúl de Diego Portfolio" />
      </Head>

      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Hero />

        {/* <div
          className="p-d-flex p-flex-column p-ai-center p-jc-center"
          style={{
            margin: "5rem 0",
            backgroundColor: "#7cb1b1",
            minHeight: "60vh",
            color: "#fff",
            fontSize: "1.5rem",
          }}
        >
          <div
            className="p-d-flex p-flex-column p-ai-center p-jc-center p-pb-6"
            style={{
              maxWidth: "60%",
            }}
          >
            <h3 className="p-text-center p-text-uppercase">{about.title}</h3>
            <p
              className="p-text-center p-m-0"
              style={{
                fontSize: "1rem",
              }}
            >
              {about.description}
            </p>
          </div>
        </div> */}

        <div className="container">
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
        </div>
      </motion.div>
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
    <div
      className="p-d-flex p-flex-column p-ai-center p-jc-center"
      style={{
        margin: "2rem 0",
        // minHeight: "40vh",
      }}
    >
      <div>
        <div className="p-d-flex p-ai-center pjc center">
          <h3 className="p-text-uppercase">{title}</h3>
          <div
            style={{
              height: "2px",
              width: "100%",
              backgroundColor: "#6bb0b2",
            }}
            className={"p-ml-6"}
          />
        </div>
        {children}
      </div>
    </div>
  );
}

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
