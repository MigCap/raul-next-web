import Head from "next/head";

import styled from "styled-components";

import { about } from "lib";

import { Section, theme } from "styles";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About {about.name}</title>
        <meta name="description" content={`About ${about.name}`} />
      </Head>

      <Section>
        <AboutPageContainer>
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem
            hic repellendus delectus. Quis illum in ab ratione natus! Saepe
            atque est sint illum et consequatur necessitatibus, iure veritatis
            perferendis!
          </p>
        </AboutPageContainer>
      </Section>
    </>
  );
}

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
