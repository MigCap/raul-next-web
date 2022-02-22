import styled from "styled-components";

import { theme, mixins } from "styles";

const TestimonialCarouselWrapper = styled.div<any>`
  ${mixins.customCarousel};
`;

const TestimonialItemContainer = styled.div<any>`
  .testimonial-item-wrapper {
    .testimonial-item-content {
      display: grid;
      grid-template-columns: repeat(20, 1fr);
      grid-template-rows: 2rem auto 2rem;
      margin: 0.3rem;
      text-align: left;

      // border: 1px solid grey;
      // border-radius: 3px;

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
            isEven ? theme.colors.blue : theme.colors.teal};
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

export { TestimonialCarouselWrapper, TestimonialItemContainer };
