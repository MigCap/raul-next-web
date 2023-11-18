import styled from "styled-components";

// import { theme, mixins, media, Section } from "styles";

const GdprDialogContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .gdpr-paragraph {
    max-width: 85%;
    p {
      a {
        text-decoration: underline;
      }
    }
  }
  .ctas-buttons-container {
    display: flex;
  }
`;

export { GdprDialogContentContainer };
