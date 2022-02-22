import Image from "next/image";

import styled from "styled-components";

import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";

import NextImage from "components/CNextImage";

import { media } from "styles";

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
      <ImageContainer>
        {/* <ImageStyled
          src={src}
          layout="responsive"
          width={850}
          height={570}
          alt={src}
        /> */}
        <NextImage
          src={src}
          alt={src}
          // priority
        />
      </ImageContainer>
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
        <GalleriaStyled
          value={images}
          responsiveOptions={responsiveOptions}
          activeIndex={activeIndex}
          numVisible={7}
          circular
          item={itemTemplate}
          showIndicators
          showItemNavigators
          showItemNavigatorsOnHover
          showThumbnails={false}
        />
      </Dialog>
    </>
  );
}

const ImageContainer = styled.div`
  min-height: 20rem;
  position: relative;
  width: 100%;
  height: 30rem;
  border-radius: 1rem;
`;
const ImageStyled = styled(Image)`
  object-fit: contain;
  border-radius: 5px;
  width: 20rem;
  height: 100%;
  overflow: visible;
  transition: all 0.5s ease;
`;
const GalleriaStyled = styled(Galleria)`
  min-width: 65vw;
  ${media.desktop`min-width: 90vw;`};
  ${media.tablet`min-width: 80vw;`};
`;
