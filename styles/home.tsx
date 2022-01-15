// import { motion } from "framer-motion";
import styled from "styled-components";

import { theme, mixins, media, Section } from "styles";

const HomeSectionContainer = styled(Section)`
  position: relative;
  padding: 5rem 0;
  ${media.desktop`padding: 5rem 2rem;`};
  ${media.tablet`padding: 1rem 1.2rem;`};
  &:first-of-type {
    padding-top: 5rem;
    ${media.desktop`padding-top: 4rem;`};
  }
`;
const FlexTitleContainer = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  margin: 0.5rem 0 2.5rem 0;
  ${media.tablet`
    width: 100%;
  `};
  h3 {
    font-family: ${theme.fonts.Oswald};
    font-size: 2.3rem;
    font-weight: bold;
    color: ${theme.colors.teal};
    margin: 0;
    padding: 0;
  }
  svg {
    width: 2.8rem;
    height: 2.8rem;
    margin: 0 1rem;
    align-self: center;
  }
`;
const HomeAboutSection = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: 2rem auto 2rem;
  //   grid-gap: 1rem;
  width: 100%;
  color: ${theme.colors.white};
  .bg-wrapper {
    grid-column: 1 / span 20;
    grid-row: 2;
    background-color: ${theme.colors.teal};
  }
  .img-wrapper {
    grid-column: 2 / span 6;
    grid-row: 1 / 4;
    img {
      height: 100%;
      object-fit: cover;
      // padding-right: 2rem;
    }
    ${media.desktop`
      display: none;
    `};
  }
  .right-side-wrapper {
    grid-column: 9 / 21;
    grid-row: 2 / 3;
    padding: 2rem 4rem 2rem 0;
    display: flex;
    flex-direction: column;
    // width: 100%;
    p {
      // padding-left: 2rem;
      //   max-width: 80%;
      margin: 3rem 0;
    }
    .buttons-wrapper {
      //   max-width: 80%;
      align-self: end;
    }
    ${media.desktop`
      grid-column: 2 / span 20;
      grid-row: 2 / 3;
      p {
        text-align: center;
      }
      .buttons-wrapper {
        //   max-width: 80%;
      align-self: center;
    }
    `};
  }
  // ${media.desktop`padding: 25px 100px;`};
  // ${media.tablet`padding: 1rem 1.2rem;`};
`;

export { HomeSectionContainer, FlexTitleContainer, HomeAboutSection };
