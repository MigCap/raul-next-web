import Head from "next/head";

import { useTranslation } from "hooks";

import { about } from "lib";

import { Section, BlogPageContainer } from "./styles";
import { locale } from "./locale";

export default function BlogPage() {
  const { t } = useTranslation({ localeFile: locale });

  return (
    <>
      <Head>
        <title>{about.name} Blog</title>
        <meta name="description" content={`${about.name} Blog`} />
      </Head>

      <Section>
        <BlogPageContainer>
          <h3>{t("title")}</h3>
          <p>{t("description")}</p>
        </BlogPageContainer>
      </Section>
    </>
  );
}
