import styled from "styled-components";
import media from "../config/media";

const Section = styled.section<any>`
  margin: ${({ margin }) => margin || "0 auto"};
  padding: 8rem 0;
  max-width: ${({ maxWidth }) => maxWidth || "1000px"};

  ${media.desktop`
    padding: 100px 0;
    margin: 0 auto;
  `};

  ${({ styles }) => styles}
`;

export default Section;
