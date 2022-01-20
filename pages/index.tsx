import { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { motion } from "framer-motion";

import { Button } from "primereact/button";

import Hero from "components/Hero";
import Title from "components/Title";
import WorksGallery, { WorksGalleryCarousel } from "components/WorksGallery";
import { Filigrana, Filigrana2 } from "components/Icons";

import { useTranslation } from "hooks";

import {
  getMedia,
  getPostsByLang,
  about,
  getRoutePathById,
  ROUTES_IDS,
} from "lib";

import { HomeSectionContainer, HomeAboutSection } from "styles/home";

export default function Home({ posts, media }: any) {
  const router = useRouter();
  const { locale } = useTranslation({});

  return (
    <>
      <Head>
        <title>Raúl de Diego Portfolio</title>
        <meta name="description" content="Raúl de Diego Portfolio" />
      </Head>

      <motion.main initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Hero />

        <section>
          <HomeSection
            title={"heyThanksForComing"}
            Icon={Filigrana}
            margin="0"
            maxWidth="100%"
          >
            <HomeAboutSection>
              <div className="bg-wrapper"></div>
              <div className="img-wrapper">
                <img
                  alt="Raul de Diego Picture"
                  src="/assets/profile-pic-home.png"
                  // width="241px"
                  // height="241px"
                />
              </div>
              {/* <NextImage
                  alt="Raul de Diego Picture"
                  src="/assets/profile-pic-home.png"
                  width="241px"
                  height="241px"
                /> */}
              <div className="right-side-wrapper">
                <p>{about?.description?.[locale]}</p>
                <div className="buttons-wrapper">
                  <Button
                    label={"Curriculum Vitae"}
                    // onClick={() =>
                    //   router.push(getRoutePathById(ROUTES_IDS.PORTFOLIO))
                    // }
                    className="p-button-primary p-mr-4"
                  />
                  <Button
                    label={"Services Catalogue"}
                    onClick={() =>
                      router.push(getRoutePathById(ROUTES_IDS.PORTFOLIO))
                    }
                    className="p-button-primary"
                  />
                </div>
              </div>
            </HomeAboutSection>
          </HomeSection>

          <HomeSection title={"whatCanIDoForYou"} Icon={Filigrana2}>
            {/* <WorksGallery posts={posts} media={media} /> */}
            <WorksGalleryCarousel posts={posts} media={media} />
          </HomeSection>

          {/* <HomeSectionContainer>
            <Title title={"whatCanIDoForYou"} Icon={Filigrana2} />
            <WorksGallery posts={posts} media={media} />
          </HomeSectionContainer> */}
        </section>
      </motion.main>
    </>
  );
}

function HomeSection({
  title,
  Icon,
  margin,
  maxWidth,
  children,
}: {
  title: string;
  Icon: any;
  margin?: string;
  maxWidth?: string;
  children: ReactNode;
}) {
  return (
    <HomeSectionContainer margin={margin} maxWidth={maxWidth}>
      <Title title={title} Icon={Icon} />
      {children}
    </HomeSectionContainer>
  );
}

export async function getStaticProps({ locale }: { locale: any }) {
  const posts = await getPostsByLang(locale);
  const media = await getMedia(posts);
  // const categories = await getCategories();
  return {
    props: {
      posts,
      media,
      // categories,
    },
    revalidate: 10, // In seconds
  };
}
