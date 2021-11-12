import Link from "next/link";
import Image from "next/image";

import { Card } from "primereact/card";

import { getFeaturedImage } from "lib";

import styles from "styles/Post.module.css";

export default function Post({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  // console.log(`🚀 ~ featuredMedia`, featuredMedia);
  const header = featuredMedia && (
    <div
      style={{
        position: "relative",
        height: "200px",
      }}
    >
      <Image
        src={`${featuredMedia?.["source_url"]}`}
        layout="fill"
        alt={featuredMedia?.["alt_text"]}
        className={styles.cardImage}
      />
    </div>
  );

  return (
    <div className="p-col-4">
      <Link href={`/posts/${post.slug}`}>
        <a>
          <Card
            title={post.title.rendered}
            style={{ minHeight: "20rem" }}
            header={header}
            className={styles.card}
          />
        </a>
      </Link>
    </div>
  );
}

export async function getStaticProps(context: any) {
  console.log(`🚀 ~ getStaticProps ~ context`, context);
  const image = await getFeaturedImage(context);

  return {
    props: {
      image,
    },
    revalidate: 10, // In seconds
  };
}
