import styled from "styled-components";

import { theme, media, Section } from "styles";

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

  .meet-section,
  .testimonial-section {
    margin-bottom: 4rem;
  }
`;

const MeetSectionContainer = styled(Section)<any>`
  margin: 0;
  max-width: 100%;
  padding: 8rem 0 0 0;
  ${media.desktop`
    // margin: 0;
    // padding: 8rem 0 0 0;
  `};
  ${media.tablet`
    // margin: 0;
    // padding: 8rem 0 0 0;
  `};
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
      background-image: url("/assets/profile-pic-about.png");
      background-position: right top;
      background-size: cover;
      background-origin: content-box, padding-box;
      background-clip: padding-box;
      background-repeat: no-repeat;
      ${media.tablet`
        display: none;
      `};
    }
    .left-side-wrapper {
      grid-column: 1 / span 6;
      grid-row: 1 / 4;
      display: flex;
      align-items: center;
      justify-content: start;
      padding-top: 20rem;
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
      ${media.tablet`
        grid-column: 1 / 21;
        padding: 2rem;
        p {
          text-align: center;
          padding: 0;
        }
        .buttons-wrapper {
          align-self: center;
        }
      `};
    }
  }
`;

const TestimonialSectionContainer = styled(Section)<any>`
  margin: 0 2rem;
  max-width: 100%;
  padding: 0 5% 3rem 5%;
  ${media.desktop`
    margin: 0;
    padding: 0rem 2rem;
  `};
  ${media.tablet`
    margin: 0;
    padding: 1rem 1.2rem;
  `};
`;

const ContactSectionContainer = styled(Section)<any>`
  margin: 0 2rem;
  max-width: 100%;
  padding: 0 5% 3rem 5%;
  ${media.desktop`
    margin: 0;
    padding: 0rem 2rem;
  `};
  ${media.tablet`
    margin: 0;
    padding: 1rem 1.2rem;
  `};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  margin: 0 auto;

  h3 {
    padding: 0 0 1rem 0;
  }

  label {
    align-self: flex-start;
  }

  span,
  textarea,
  input {
    width: 100%;
  }
`;

export {
  Section,
  AboutPageContainer,
  MeetSectionContainer,
  TestimonialSectionContainer,
  ContactSectionContainer,
  FormContainer,
};
