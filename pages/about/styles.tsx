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
`;

export { Section, AboutPageContainer };
