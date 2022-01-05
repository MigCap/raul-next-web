import styled from "styled-components";
import media from "./media";

const Section = styled.section<any>`
  margin: ${(props) => props.margin || "0 auto"};
  padding: 150px 0;
  max-width: ${(props) => props.maxWidth || "1000px"};

  ${media.tablet`padding: 100px 0;`};
`;

export default Section;
