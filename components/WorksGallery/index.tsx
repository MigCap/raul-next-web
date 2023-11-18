import { useCallback } from "react";

import PostCard from "components/PostCard";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Carousel } from "primereact/carousel";

import { useCustomRouter as useRouter } from "hooks";

import { getFeaturedMedia, stagger } from "lib";

import { media, mixins } from "styles";

export default function WorksGallery({ posts, media, className, style }: any) {
  const { isHomePage } = useRouter();

  const maxCardsToShow = isHomePage ? 9 : 18;

  const jsxPosts = posts?.slice(0, maxCardsToShow)?.map((post: any) => {
    const featuredMediaId = post?.featured_media;
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);
    return <PostCard post={post} featuredMedia={featuredMedia} key={post.id} />;
  });

  return (
    <motion.section variants={stagger} className={className} style={style}>
      <WorksGalleryContainer>{jsxPosts}</WorksGalleryContainer>
    </motion.section>
  );
}

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

export function WorksGalleryCarousel({ posts, media }: any) {
  const workCardTemplate = useCallback((post: any) => {
    const featuredMediaId = post?.featured_media;
    const featuredMedia = getFeaturedMedia(media, featuredMediaId);

    return (
      <div style={{ margin: "0 0.5rem" }}>
        <PostCard post={post} featuredMedia={featuredMedia} />
      </div>
    );
  }, []);

  return (
    <motion.section variants={stagger}>
      <WorksGalleryCarouselContainer>
        <Carousel
          value={posts}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          // autoplayInterval={3000}
          itemTemplate={workCardTemplate}
          // header={}
        />
      </WorksGalleryCarouselContainer>
    </motion.section>
  );
}

const WorksGalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 9rem;
  padding: 0 1rem;
  ${media.thone`grid-template-columns: repeat(2, 1fr); 
  `};
  ${media.phone`grid-template-columns: 100%; 
  `};
  gap: 1em;
  overflow: hidden;
  margin-top: 20px;
  width: 100%;
`;

const WorksGalleryCarouselContainer = styled.div`
  ${mixins.customCarousel};
  padding: 1rem 0;
  .p-carousel-indicators {
    display: none;
  }
`;
