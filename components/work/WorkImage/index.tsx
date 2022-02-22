import Image from "next/image";

import { motion } from "framer-motion";
import styled from "styled-components";

import { fadeInRight } from "lib";

// import { media } from "styles";

export default function WorkImage({
  img,
  onClick,
}: {
  img: { src: string; alt: string; index: number };
  onClick: any;
}) {
  const { src, alt, index } = img;
  const newImageSrc = src.toString().replace(/[()]/g, "");
  const convertImage = (w: any, h: any) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str: any) =>
    typeof window === "undefined"
      ? Buffer.from(str).toString("base64")
      : window.btoa(str);

  return (
    <PostImageContainer variants={fadeInRight} transition={{ delay: 0.2 }}>
      <ImageContainer onClick={() => onClick(index)}>
        <ImageStyled
          priority
          src={newImageSrc}
          layout="fill"
          // width={850}
          // height={570}
          alt={alt}
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            convertImage(700, 475)
          )}`}
          className="image"
        />
      </ImageContainer>
    </PostImageContainer>
  );
}

const PostImageContainer = styled(motion.div)`
  margin: 0;
  position: relative;
`;
const ImageContainer = styled(motion.div)`
  position: relative;
  height: 15rem;
  border-radius: 5px;
  transition: transform 0.5s ease;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
  .image-container {
    transition: transform 0.5s ease;
  }
`;
const ImageStyled = styled(Image)`
  border-radius: 5px;
  object-fit: fill;
  width: 100%;
  width: 50rem;
  height: 40rem;
  max-width: 80%;
  min-height: 150px;
  transition: transform 0.5s ease;

  ${ImageContainer}:hover & {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
