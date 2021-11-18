import Image from "next/image";

import { Image as PrimeImage } from "primereact/image";

import styles from "./PostImage.module.css";

export default function PostImage({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: any;
}) {
  return (
    <>
      {/* <div
        className={`${styles["img-hover-zoom"]} p-mb-1 p-md-mb-2`}
        // onClick={() => onClick(index)}
      >
        <PrimeImage
          src={src}
          alt={src}
          imageClassName={`${styles["post-detail-image"]}`}
          // preview
        />
      </div> */}

      <div
        className={`${styles["img-hover-zoom"]} p-mb-2 p-mb-md-3`}
        onClick={() => onClick(index)}
      >
        <Image
          src={src}
          layout="fill"
          alt={src}
          className={`${styles["post-detail-image"]}`}
        />
      </div>
    </>
  );
}
