import Link from "next/link";
import Image from "next/image";

import { Button } from "primereact/button";

import parse from "html-react-parser";

import { getPost, getSlugs } from "lib";

import styles from "styles/PostSlug.module.css";

export default function PostPage({ post }: { post: any }) {
  console.log(`🚀 ~ PostPage ~ post`, post);

  const match = post?.content?.rendered?.match(/srcs*=s*"(.+?)"/g);
  // const match = post.content.rendered.match(/src\s*=\s*"?(.+?)["|\s]/g);
  // const match = post.content.rendered.match(/<img.*?src="(.*?)"/g);

  const srcs = match
    ? match.map((m: any) => m.replace(/srcs*=s*"/g, "").replace('"', ""))
    : [];
  // console.log(`🚀 ~ PostPage ~ srcs`, srcs);

  const imagesHeight = `300px`;
  const imagesPosition = `relative`;
  const imagesClassnames = ``;

  return (
    <div className="p-pt-5 p-px-5">
      <h1 className="p-text-center p-py-5">{post.title.rendered}</h1>
      <div className="p-grid">
        <div className="p-col-12 p-md-4">
          <Link href="/" passHref>
            <Button
              label="Home"
              icon="pi pi-angle-double-left"
              iconPos="left"
              type="button"
              className="p-button-rounded"
            />
          </Link>
          <div className="card-text pb-5">{parse(post?.excerpt?.rendered)}</div>
        </div>
        <div className="p-col-12 p-md-8">
          <div className="p-grid p-nested-grid">
            <div className="p-col-8">
              <div className="p-grid">
                <div className="p-col-6">
                  <div
                    key={srcs[0]}
                    style={{
                      position: imagesPosition,
                      height: imagesHeight,
                      backgroundColor: "green",
                    }}
                    className={imagesClassnames}
                  >
                    <Image
                      src={srcs[0]}
                      layout="fill"
                      alt={srcs[0]}
                      className={styles.postDetailImage}
                    />
                  </div>
                </div>
                <div className="p-col-6">
                  <div
                    key={srcs[1]}
                    style={{
                      position: imagesPosition,
                      height: imagesHeight,
                      backgroundColor: "red",
                    }}
                    className={imagesClassnames}
                  >
                    <Image
                      src={srcs[1]}
                      layout="fill"
                      alt={srcs[1]}
                      className={styles.postDetailImage}
                    />
                  </div>
                </div>
                <div className="p-col-12">
                  <div
                    key={srcs[2]}
                    style={{
                      position: imagesPosition,
                      height: imagesHeight,
                      backgroundColor: "brown",
                    }}
                    className={imagesClassnames}
                  >
                    <Image
                      src={srcs[2]}
                      layout="fill"
                      alt={srcs[2]}
                      className={styles.postDetailImage}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-col-4">
              <div
                key={srcs[3]}
                style={{
                  position: imagesPosition,
                  height: imagesHeight,
                  backgroundColor: "blue",
                }}
                className={imagesClassnames}
              >
                <Image
                  src={srcs[3]}
                  layout="fill"
                  alt={srcs[3]}
                  className={styles.postDetailImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params }: { params: any }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 10, // In seconds
  };
}
