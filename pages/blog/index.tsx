import Head from "next/head";

import { about } from "lib";

import { Section } from "styles";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>{about.name} Blog</title>
        <meta name="description" content={`${about.name} Blog`} />
      </Head>

      <Section>
        <p>Blog</p>
      </Section>
    </>
  );
}
