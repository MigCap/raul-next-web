import Head from "next/head";
import Image from "next/image";

import { getMedia, getPosts } from "lib";

// import { Menu } from "components/Menu";
import Hero from "components/Hero";
import Works from "components/Works";

import styles from "styles/Home.module.css";

export default function Home({ posts, media }: any) {
  return (
    <>
      <Head>
        <title>Raúl de Diego Vázquez</title>
        <meta
          name="description"
          content="Raúl de Diego Vázquez personal website"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      {/* <Menu /> */}

      <Hero />

      <div className="container">
        <div className="p-my-3" style={{ position: "relative", width: "5rem" }}>
          <Image
            src={`/assets/logo-raul.png`}
            // layout="fill"
            alt={`logo-raul`}
            width={50}
            height={50}
            className={styles.logo}
          />
        </div>
        <div
          className="p-d-flex"
          style={{ marginTop: "5rem", marginBottom: "5rem" }}
        >
          <div className="menu" style={{ minWidth: "10rem" }}>
            <p className="p-text-uppercase p-m-0" style={{ fontWeight: 700 }}>
              Raúl de Diego
            </p>
          </div>
          <Works posts={posts} media={media} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const posts = await getPosts();
  const media = await getMedia(posts);
  return {
    props: {
      posts,
      media,
    },
    revalidate: 10, // In seconds
  };
}
