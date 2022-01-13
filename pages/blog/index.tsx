import Head from "next/head";

import { useTranslation } from "hooks";

import { about } from "lib";

import { Section, BlogPageContainer } from "styles/blog";

export default function BlogPage() {
  const { t } = useTranslation({});

  return (
    <>
      <Head>
        <title>{about.name} Blog</title>
        <meta name="description" content={`${about.name} Blog`} />
      </Head>

      <Section>
        <BlogPageContainer>
          <h3>{t("blog")}</h3>
          <p>{t("blogDescription")}</p>
        </BlogPageContainer>
      </Section>
    </>
  );
}
