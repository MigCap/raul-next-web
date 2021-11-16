// import Image from "next/image";

import { Image as PrimeImage } from "primereact/image";

import styles from "./PostImage.module.css";

export default function PostImage({ src }: { src: string }) {
  //   const imagesMinHeight = `200px`;
  //   const imagesPosition = `relative`;
  //   const imagesClassnames = `${styles["img-hover-zoom"]}`;

  return (
    <>
      <div className={`${styles["img-hover-zoom"]} p-mb-1 p-mb-md-2`}>
        <PrimeImage
          src={src}
          alt={src}
          imageClassName={`${styles["post-detail-image"]}`}
          preview
        />
      </div>
      {/* <div
        style={{
          position: imagesPosition,
          minHeight: imagesMinHeight,
        }}
        className={imagesClassnames}
      >
        <Image
          src={src}
          layout="fill"
          alt={src}
          className={styles.postDetailImage}
        />
      </div> */}
    </>
  );
}
