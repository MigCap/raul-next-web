import { Dialog } from "primereact/dialog";
import { Galleria } from "primereact/galleria";

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

  const itemTemplate = (item: any) => {
    return <img src={item.src} alt={item.alt} style={{ width: "100%" }} />;
  };

  const thumbnailTemplate = (item: any) => {
    return (
      <img
        src={item.src}
        alt={item.alt}
        style={{ display: "block", width: "8rem", height: "5rem" }}
      />
    );
  };

  return (
    <>
      <Dialog
        visible={show}
        onHide={() => onHide()}
        breakpoints={{ "960px": "75vw" }}
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
          style={{ minWidth: "50vw" }}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          showItemNavigators
          showThumbnails={false}
          showItemNavigatorsOnHover
          showIndicators
        />
      </Dialog>
    </>
  );
}
