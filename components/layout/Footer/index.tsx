import styled from "styled-components";

import { theme, mixins, media } from "styles";

export default function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        Copyright 2014-2021 – Raúl de Diego . All rights reserved
      </Copyright>

      <By className="p-d-flex p-ai-center p-jc-center p-my-2">
        Develop by
        <a
          href="https://miguelcapellan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="lighten p-ml-1"
        >
          <span className={"footer-author"}> MCV</span>
        </a>
      </By>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 50px 25px 25px 25px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.slate};
  text-align: center;
  height: auto;
`;
const Copyright = styled.p`
  font-size: 1rem;
  padding: 0;
  margin: 0;
`;
const By = styled.p`
  padding: 10px 0 5px 0;
  font-size: 0.7rem;
`;
