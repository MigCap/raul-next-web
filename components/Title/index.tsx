import styled from "styled-components";

import { useTranslation } from "hooks";

import { theme, mixins, media } from "styles";

function Title({ title, Icon }: { title: string; Icon: any }) {
  const { t } = useTranslation({});

  return (
    <FlexTitleContainer>
      <Icon />
      <h3>{t(title)}</h3>
      {/* <LineSeparator /> */}
    </FlexTitleContainer>
  );
}

export default Title;

const FlexTitleContainer = styled.div`
  ${mixins.flexCenter};
  width: 100%;
  margin: 0.5rem 0 2.5rem 0;
  ${media.tablet`width: 100%;`};
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
// const LineSeparator = styled.div`
//   height: 1px;
//   width: 100%;
//   background-color: ${theme.colors.teal};
//   margin: 3px 0 0 1rem;
// `;
