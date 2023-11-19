import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "primereact/button";

import Title from "components/Title";
import { Filigrana, Filigrana2 } from "components/Icons";
import SocialH from "components/SocialH";
import Testimonial from "components/Testimonial";
// import { ContactForm } from "pages/contact";

import { useTranslation } from "hooks";

import { about, getRoutePathById, ROUTES_IDS } from "lib";

import {
  AboutPageContainer,
  MeetSectionContainer,
  TestimonialSectionContainer,
  // ContactSectionContainer,
  // FormContainer,
} from "styles/about";

export default function AboutPage() {
  const router = useRouter();
  const { t, locale } = useTranslation({});

  return (
    <>
      <Head>
        <title>
          {t("title")} {about.name}
        </title>
        <meta name="description" content={`${t("title")} ${about.name}`} />
      </Head>

      <AboutPageContainer>
        <MeetSectionContainer>
          <Title title={"niceToMeetYou"} Icon={Filigrana} />
          <section className="meet-section">
            <div className="bg-wrapper"></div>
            <div className="left-side-wrapper">
              <SocialH styles={{ width: "100%", "flex-grow": "4" }} />
            </div>
            <div className="right-side-wrapper">
              <p>{about?.description?.[locale]}</p>
              <div className="buttons-wrapper">
                <Button
                  label={"Curriculum Vitae"}
                  className="p-button-primary p-mr-4"
                  style={{ maxWidth: "150px", padding: "0.25rem 1.25rem" }}
                />
                <Button
                  label={"Services Catalogue"}
                  onClick={() =>
                    router.push(getRoutePathById(ROUTES_IDS.PORTFOLIO))
                  }
                  className="p-button-primary"
                  style={{ maxWidth: "150px", padding: "0.25rem 1.25rem" }}
                />
              </div>
            </div>
          </section>
        </MeetSectionContainer>

        <TestimonialSectionContainer>
          <Title title={"whatTheySayAboutMe"} Icon={Filigrana2} />
          <Testimonial />
        </TestimonialSectionContainer>

        {/* <ContactSectionContainer>
          <section className="contact-section">
            <Title title={"whatCanIDoForYou"} Icon={Filigrana} />
            <FormContainer>
              <p>{t("contactDescription")}</p>
              <ContactForm />
            </FormContainer>
          </section>
        </ContactSectionContainer> */}
      </AboutPageContainer>
    </>
  );
}
