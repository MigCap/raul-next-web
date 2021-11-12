import Link from "next/link";

import { Button } from "primereact/button";

import PostImage from "components/PostImage";
import PostTag from "components/PostTag";

import { getPost, getSlugs, getPostTags, getImagesSources, parse } from "lib";

import styles from "./styles.module.css";

export default function PostPage({
  post,
  postTags,
}: {
  post: any;
  postTags: any;
}) {
  const srcs = getImagesSources(post);

  const postTagsElements =
    postTags &&
    postTags.map((tag: any) => {
      return <PostTag key={tag?.id} tag={tag} />;
    });

  const leftPostImages =
    srcs?.length >= 3 &&
    srcs.slice(0, 3).map((src: string) => {
      return <PostImage src={src} key={src} />;
    });

  const rightPostImages =
    srcs?.length >= 4 &&
    srcs.slice(3, srcs?.length).map((src: string) => {
      return <PostImage src={src} key={src} />;
    });

  return (
    <div className="p-px-5 p-mt-5 p-pt-3">
      <div className="p-my-4">
        <Link href="/" passHref>
          <Button
            label="Home"
            icon="pi pi-angle-double-left"
            iconPos="left"
            type="button"
            className="p-button-outlined p-button-rounded p-button-sm"
            style={{ color: "var(--teal-500)" }}
          />
        </Link>
      </div>

      <div className="p-grid p-align-center">
        <div className="p-col-12 p-md-4">
          <h1 className={`${styles["post-title"]} p-py-3`}>
            {post?.title?.rendered}
          </h1>
          <div className="card-text pb-5">
            {post?.excerpt?.rendered && parse(post?.excerpt?.rendered)}
          </div>
        </div>
        <div className="p-col-12 p-md-8">
          <div className="p-grid p-align-center">
            <div className="p-col-6">
              <div className="p-d-flex p-flex-column">{leftPostImages}</div>
            </div>
            <div className="p-col-6">{rightPostImages}</div>
          </div>
        </div>
        <div className="p-col-12 p-d-flex p-jc-end">{postTagsElements}</div>
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
  const postTags = await getPostTags(params.slug);

  return {
    props: {
      post,
      postTags,
    },
    revalidate: 10, // In seconds
  };
}
