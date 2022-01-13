import styled from "styled-components";

import { theme, Section } from "styles";

const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 1rem 0;
  h1,
  h3,
  p {
    color: ${theme.colors.teal};
  }
  h3 {
    padding-bottom: 1rem;
  }

  .meet-section,
  .testimonial-section {
    margin-bottom: 4rem;
  }

  .meet-section {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    grid-template-rows: 2rem auto 2rem;
    width: 100%;
    color: ${theme.colors.white};

    .bg-wrapper {
      grid-column: 1 / span 20;
      grid-row: 1 / span 3;
      // background: url("/assets/profile-pic-home.png") no-repeat fixed top;
      background-image: url("/assets/profile-pic-home.png");
      background-position: right top;
      background-size: cover;
      background-origin: content-box, padding-box;
      background-clip: padding-box;
      background-repeat: no-repeat;
    }
    .left-side-wrapper {
      grid-column: 1 / span 6;
      grid-row: 1 / 4;
      display: flex;
      align-items: center;
      justify-content: start;
      padding-top: 5rem;
    }
    .right-side-wrapper {
      grid-column: 10 / 21;
      grid-row: 2 / 3;
      padding: 2rem 4rem 2rem 0;
      display: flex;
      flex-direction: column;
      background: ${theme.colors.teal};
      p {
        padding-left: 2rem;
        margin: 3rem 0;
        color: ${theme.colors.white};
      }
      .buttons-wrapper {
        align-self: end;
      }
    }
  }

  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: ${theme.colors.teal};
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:focus,
  .p-dialog.p-dialog-header.p-dialog-header-icon:focus,
  .p-link:focus {
    box-shadow: 0 0 0 0.2rem transparent;
  }
  .p-carousel .p-carousel-content .p-carousel-prev,
  .p-carousel .p-carousel-content .p-carousel-next {
    color: ${theme.colors.orange};
  }
  .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
  .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: ${theme.colors.teal};
    border-color: transparent;
    background: transparent;
  }
  .pi {
    font-size: 2rem;
  }
  .p-carousel-content .p-carousel-next:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem transparent;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:focus,
  .p-carousel .p-carousel-content .p-carousel-next:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem transparent;
  }
`;

const TestimonialItemContainer = styled.div<any>`
  .testimonial-item-wrapper {
    .testimonial-item-content {
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      grid-template-rows: 2rem auto 2rem;
      margin: 0.3rem;
      text-align: left;

      border: 1px solid grey;
      border-radius: 3px;

      .bg-left {
        grid-column: 1 / span 4;
        grid-row: 1 / span 3;
        background-color: ${({ isEven }) =>
          isEven ? theme.colors.white : theme.colors.teal};
      }
      .bg-right {
        grid-column: 5 / span 16;
        grid-row: 1 / span 3;
        background-color: ${({ isEven }) =>
          isEven ? theme.colors.teal : theme.colors.white};
      }
      .testimonial-icon-wrapper {
        grid-column: 2 / span 6;
        grid-row: 2 / span 1;
        // margin-right: 1rem;
        svg {
          // margin-right: 2rem;
          // transform: rotate(45deg);
          // width: 2.8rem;
          // height: 2.8rem;
        }
      }
      .testimonial-text-wrapper {
        grid-column: 9 / span 11;
        grid-row: 2 / span 1;
        p {
          color: ${({ isEven }) =>
            isEven ? theme.colors.white : theme.colors.grey};
        }
        h6 {
          color: ${({ isEven }) =>
            isEven ? theme.colors.darkBlue : theme.colors.teal};
          font-family: ${theme.fonts.JosefinSlab};
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
        }
        span {
          color: ${theme.colors.bronze};
          font-family: ${theme.fonts.JosefinSlab};
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0;
        }
      }
    }
  }
`;

export { Section, AboutPageContainer, TestimonialItemContainer };
