import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

import { getMedia, getPosts, getCategories } from "lib";

import { Menu } from "primereact/menu";

// import { Menu } from "components/Menu";
import Hero from "components/Hero";
import Works from "components/Works";

import styles from "styles/Home.module.css";

export default function Home({ posts, media, categories }: any) {
  // let items: any = [];
  // categories &&
  //   categories.forEach((category: any) => {
  //     if (category.name === "Uncategorized" || category.count === 0) {
  //       return;
  //     } else {
  //       items.push({
  //         label: category?.name || "",
  //         // items: [
  //         //   {
  //         //     label: category?.name || "",
  //         //     icon: "pi pi-refresh",
  //         //     command: () => {
  //         //         toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
  //         //     }
  //         //   },
  //         // ],
  //       });
  //     }
  //   });

  return (
    <div>
      <Head>
        <title>Raúl de Diego Vázquez</title>
        <meta name="description" content="Raúl de Diego Vázquez Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        {/* You can add more metadata here, like open graph tags for social media, etc */}
      </Head>

      {/* <Menu /> */}

      {/* <Hero /> */}

      <motion.div
        className="container"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
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

            <div className="p-mt-6 p-d-pt-6">
              {/* <Menu model={items} /> */}
              {categories &&
                categories.map((category: any) => {
                  if (
                    category.name === "Uncategorized" ||
                    category.count === 0
                  ) {
                    return null;
                  }
                  return (
                    <a href={`/category/${category.slug}`} key={category.id}>
                      <p
                        className="p-text-uppercase p-m-0"
                        style={{ fontSize: "0.7rem" }}
                      >
                        {category.name}
                      </p>
                    </a>
                  );
                })}
            </div>
          </div>

          <Works posts={posts} media={media} />
        </div>
      </motion.div>
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
