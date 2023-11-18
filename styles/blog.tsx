import styled from "styled-components";

import { theme, Section } from "styles";

const BlogPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 1rem 0;
  h1,
  h3,
  p {
    color: ${theme.colors.teal};
  }
`;

export { Section, BlogPageContainer };
