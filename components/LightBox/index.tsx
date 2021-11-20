import Image from "next/image";

import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";

import styles from "./LightBox.module.css";

export default function LightBox({ show, setShow, images, activeIndex }: any) {
  const onHide = () => {
    setShow(false);
  };

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "960px",
      numVisible: 4,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  const itemTemplate = ({ src, alt }: any) => {
    return (
      <div className={styles.imageContainer}>
        <Image
          src={src}
          layout="responsive"
          width={100}
          height={100}
          alt={src}
          className={`${styles["image"]}`}
        />
      </div>
    );
  };

  return (
    <>
      <Dialog
        visible={show}
        onHide={() => onHide()}
        // breakpoints={{ "960px": "75vw" }}
        modal
        resizable
        maximizable
        draggable
        dismissableMask
        keepInViewport
      >
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          activeIndex={activeIndex}
          numVisible={7}
          circular
          style={{ minWidth: "80vw" }}
          item={itemTemplate}
          showItemNavigators
          showThumbnails={false}
          showItemNavigatorsOnHover
          showIndicators
        />
      </Dialog>
    </>
  );
}
