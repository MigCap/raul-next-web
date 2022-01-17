import Head from "next/head";
import { useRouter } from "next/router";

import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

import Title from "components/Title";
import { Filigrana, Filigrana2 } from "components/Icons";
import SocialH from "components/SocialH";
import { ContactForm } from "pages/contact";

import { useTranslation } from "hooks";

import { about, getRoutePathById, ROUTES_IDS } from "lib";

import {
  AboutPageContainer,
  MeetSectionContainer,
  TestimonialSectionContainer,
  TestimonialItemContainer,
} from "styles/about";

export default function AboutPage() {
  const router = useRouter();
  const { t, locale } = useTranslation({});

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const testimonials = [
    {
      id: 1,
      // Icon: FiligranaRombo,
      personName: "Margarita Álvarez",
      workName: "Palabras hilvanadas",
      description:
        '"Un diseño muy bonito y en consonancia con el título. Estoy muy contenta con la portada de mi libro."',
    },
    {
      id: 2,
      // Icon: FiligranaRombo,
      personName: "Margarita Álvarez",
      workName: "Palabras hilvanadas",
      description:
        '"Un diseño muy bonito y en consonancia con el título. Estoy muy contenta con la portada de mi libro."',
    },
    {
      id: 3,
      // Icon: FiligranaRombo,
      personName: "Margarita Álvarez",
      workName: "Palabras hilvanadas",
      description:
        '"Un diseño muy bonito y en consonancia con el título. Estoy muy contenta con la portada de mi libro."',
    },
    {
      id: 4,
      // Icon: FiligranaRombo,
      personName: "Margarita Álvarez",
      workName: "Palabras hilvanadas",
      description:
        '"Un diseño muy bonito y en consonancia con el título. Estoy muy contenta con la portada de mi libro."',
    },
    {
      id: 5,
      // Icon: FiligranaRombo,
      personName: "Margarita Álvarez",
      workName: "Palabras hilvanadas",
      description:
        '"Un diseño muy bonito y en consonancia con el título. Estoy muy contenta con la portada de mi libro."',
    },
    {
      id: 6,
      // Icon: FiligranaRombo,
      personName: "Margarita Álvarez",
      workName: "Palabras hilvanadas",
      description:
        '"Un diseño muy bonito y en consonancia con el título. Estoy muy contenta con la portada de mi libro."',
    },
  ];

  const testimonialTemplate = (testimonial: any) => {
    const { id, description, personName, workName } = testimonial;
    const isEven = id % 2 === 0;

    return (
      <TestimonialItemContainer isEven={isEven}>
        <div className="testimonial-item-wrapper">
          <div className="testimonial-item-content">
            <div className="bg-left"></div>
            <div className="bg-right"></div>
            <div className="testimonial-icon-wrapper">
              <img
                src={
                  isEven
                    ? "/assets/filigranaRombo2.svg"
                    : "/assets/filigranaRombo.svg"
                }
                alt="An SVG of an eye"
              />
            </div>
            <div className="testimonial-text-wrapper">
              <p className="testimonial-description">{description}</p>
              <h6 className="testimonial-personName">{personName}</h6>
              <span className="testimonial-workName">About: {workName}</span>
            </div>
          </div>
        </div>
      </TestimonialItemContainer>
    );
  };

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
          <section className="testimonial-section">
            <Title title={"whatTheySayAboutMe"} Icon={Filigrana2} />
            <Carousel
              value={testimonials}
              numVisible={2}
              numScroll={2}
              responsiveOptions={responsiveOptions}
              className="custom-carousel"
              circular
              // autoplayInterval={3000}
              itemTemplate={testimonialTemplate}
              // header={}
            />
          </section>

          <section className="contact-section">
            <Title title={"whatCanIDoForYou"} Icon={Filigrana} />
            <ContactForm />
          </section>
        </TestimonialSectionContainer>
      </AboutPageContainer>
    </>
  );
}
