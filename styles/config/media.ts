// @ts-nocheck
import { css } from "styled-components";

const sizes: any = {
  giant: 1440,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce(
  (accumulator: any, label: any) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css`
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

export default media;
