import Head from "next/head";

import { useTranslation } from "hooks";

import { about } from "lib";

import { Section, AboutPageContainer } from "./styles";
import { locale } from "./locale";

export default function AboutPage() {
  const { t } = useTranslation({ localeFile: locale });

  return (
    <>
      <Head>
        <title>
          {t("title")} {about.name}
        </title>
        <meta name="description" content={`${t("title")} ${about.name}`} />
      </Head>

      <Section>
        <AboutPageContainer>
          <h3>{t("title")}</h3>
          <p>{t("description")}</p>
        </AboutPageContainer>
      </Section>
    </>
  );
}
