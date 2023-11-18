import * as React from "react";
import Image, { ImageProps } from "next/image";

import { motion } from "framer-motion";
import styled from "styled-components";

import { useCustomRouter as useRouter } from "hooks";

import { theme, media } from "styles";

type NextImageProps = {
  useSkeleton?: boolean;
  imgClassName?: string;
  blurClassName?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
} & ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className = "",
  imgClassName = "",
  blurClassName,
  ...rest
}: NextImageProps) {
  // const [status, setStatus] = React.useState(
  //   useSkeleton ? "loading" : "complete"
  // );

  const { isHomePage } = useRouter();

  return (
    <ImageWrapper
      $isHomePage={isHomePage}
      className={`image-container ${className}`}
    >
      <ImageStyled
        // status={status}
        // className={clsx(
        //   imgClassName,
        //   "bg-gray-400 text-gray-400 ",
        //   status === "loading" && clsx("animate-pulse", blurClassName)
        // )}
        className={`image ${imgClassName}`}
        src={src}
        width={width}
        height={height}
        alt={alt}
        // onLoadingComplete={() => setStatus("complete")}
        layout="fill"
        // sizes="50vw"
        objectFit="cover"
        {...rest}
      />
    </ImageWrapper>
  );
}

const ImageWrapper = styled<any>(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;

  .image-container {
    width: 100%;
    border-radius: 5px;
  }
  .image {
    // object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 5px;
  }
`;

const ImageStyled = styled<any>(Image)`
  // text-gray to hide alt text
  color: ${theme.colors.darkGrey};
  background-color: ${theme.colors.teal};
  animation: ${({ status }) =>
    status === "loading"
      ? "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      : ""};
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  // ${media.desktop``};
  // ${media.tablet``};
`;
