import { Carousel } from "primereact/carousel";

import { TestimonialCarouselWrapper, TestimonialItemContainer } from "./styles";

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

function Testimonial() {
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
    <section className="testimonial-section">
      <TestimonialCarouselWrapper>
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
      </TestimonialCarouselWrapper>
    </section>
  );
}

export default Testimonial;
