import Head from "next/head";

import styled from "styled-components";

import { about } from "lib";

import { Section, theme } from "styles";

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>{about.name} Blog</title>
        <meta name="description" content={`${about.name} Blog`} />
      </Head>

      <Section>
        <BlogPageContainer>
          <h3>Blog</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque rem
            hic repellendus delectus. Quis illum in ab ratione natus! Saepe
            atque est sint illum et consequatur necessitatibus, iure veritatis
            perferendis!
          </p>
        </BlogPageContainer>
      </Section>
    </>
  );
}

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
