import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization

import { Card } from "primereact/card";

import { getDate } from "../utils/utils";

import styles from "../styles/Home.module.css";

export default function Post({
  post,
  featuredMedia,
}: {
  post: any;
  featuredMedia: any;
}) {
  console.log(featuredMedia);
  const header = featuredMedia && (
    <Link href={`/posts/${post.slug}`}>
      <a>
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
      </a>
    </Link>
  );

  return (
    <>
      <Card
        title={post.title.rendered}
        style={{ width: "25em" }}
        header={header}
        className="mb-3"
      >
        <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
      </Card>

      {/* <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          {featuredMedia && (
            <div className="col-md-4">
              <Link href={`/posts/${post.slug}`}>
                <a>
                  <Image
                    src={`${featuredMedia?.["source_url"]}`}
                    width={180}
                    height={120}
                    alt={featuredMedia?.["alt_text"]}
                  />
                </a>
              </Link>
            </div>
          )}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{post.title.rendered}</h5>
              <div
                className="card-text"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></div>
              <p className="card-text">
                <small className="text-muted">
                  On {getDate(post.modified)}
                </small>
              </p>
              <Link href={`/posts/${post.slug}`}>
                <a className="btn btn-primary">See more</a>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
