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
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Hero />

        {/* <div
          className="p-d-flex p-flex-column p-ai-center p-jc-center"
          style={{
            // marginTop: "5rem",
            marginBottom: "5rem",
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
          <div
            className="p-d-flex p-flex-column p-ai-center p-jc-center"
            style={{
              marginTop: "5rem",
              marginBottom: "5rem",
              minHeight: "40vh",
            }}
          >
            <div>
              <div className="p-d-flex p-ai-center pjc center">
                <h3 className="p-text-uppercase">{about.title}</h3>
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#6bb0b2",
                  }}
                  className={"p-ml-6"}
                />
              </div>
              <p
                className="p-text-left"
                style={{
                  fontSize: "1rem",
                  margin: "0 0 0 10rem",
                  maxWidth: "70%",
                }}
              >
                {about.description}
              </p>
            </div>
          </div>

          <div className="p-d-flex p-ai-center pjc center">
            <h3 className="p-text-uppercase">works</h3>
            <div
              style={{
                height: "2px",
                width: "100%",
                backgroundColor: "#6bb0b2",
              }}
              className={"p-ml-6"}
            />
          </div>
          <div
            className="p-d-flex"
            style={{
              // marginTop: "5rem",
              marginBottom: "5rem",
            }}
          >
            <WorksGallery
              posts={posts}
              media={media}
              className="p-grid p-align-center p-justify-center"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </motion.div>
    </>
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
