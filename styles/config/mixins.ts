import { css } from "styled-components";

import theme from "./theme";
import media from "./media";

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexAround: css`
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  flexEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  `,

  gridStart: css`
    display: grid;
    align-items: start;
  `,

  gridCenter: css`
    display: grid;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.green};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${theme.colors.green};
    &:hover,
    &:focus,
    &:active {
      color: ${theme.colors.green};
      outline: 0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.37em;
      background-color: ${theme.colors.green};
      transition: ${theme.transition};
    }
  `,

  smallButton: css`
    color: ${theme.colors.green};
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 12px 17px;
    font-size: ${theme.fontSizes.smallish};
    font-family: ${theme.fonts.Karla};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: ${theme.colors.green};
    background-color: transparent;
    border: 1px solid ${theme.colors.green};
    border-radius: ${theme.borderRadius};
    padding: 18px 23px;
    font-size: ${theme.fontSizes.small};
    font-family: ${theme.fonts.Karla};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transGreen};
    }
    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  animatedUnderline: css`
    background-image: linear-gradient(#33333300, #33333300),
      linear-gradient(to right, ${theme.colors.orange}, ${theme.colors.orange});
    background-size: 100% 2px, 0 2px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;

    @media (prefers-reduced-motion: no-preference) {
      transition: 0.3s ease;
      transition-property: background-size, color, background-color,
        border-color;
    }

    &:hover {
      background-size: 0 2px, 100% 2px;
    }
  `,

  customCarousel: css`
    .p-carousel
      .p-carousel-indicators
      .p-carousel-indicator.p-highlight
      button {
      background-color: ${theme.colors.teal};
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
    .p-carousel {
      .pi {
        font-size: 2rem;
      }
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
  `,
};

export default mixins;
