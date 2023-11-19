// import Link from "next/link";

import styled from "styled-components";

import { theme, mixins } from "styles";

const FooterContainer = styled.footer`
  font-family: ${theme.fonts.Karla};
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: start;
  padding: 3rem 3rem 3rem 3rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.white};
  text-align: left;
  height: auto;

  background-color: ${theme.colors.teal};
`;
const Copyright = styled.p`
  //   font-size: 1rem;
  padding: 0.2rem 0;
  margin: 0;
`;
const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: self-start;
  justify-content: space-between;
  margin: 2rem 0;
  h3 {
    margin-bottom: 1rem;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  span,
  textarea,
  input {
    width: 100%;
  }
  button {
    align-self: flex-start;
    padding: 0.25rem 1.25rem;
    margin-top: 0.5rem;
    background-color: ${theme.colors.orange};
  }
`;
const FieldWrapper = styled.div`
  margin: 0.5rem 0;
  width: 100%;
`;
const GeneralContainer = styled.div`
  padding: 0 3rem;
  text-align: left;
`;
const NavListItem = styled.li`
  margin: 0;
  position: relative;
  a {
    &:hover,
    &:focus {
      color: ${theme.colors.orange};
      outline: 0;
    }
    p {
      margin: 0;
    }
  }
`;
// const NavLink = styled(Link)`
//   padding: 1rem 1.2rem;
// `;
const By = styled.p`
  padding: 0.5rem 0;
  margin-top: 100%;
  font-size: 0.7rem;
  a {
    margin-left: 0.2rem;
    span {
      color: ${theme.colors.white};
      &:hover,
      &:focus {
        color: ${theme.colors.orange};
        outline: 0;
      }
    }
  }
`;

export {
  FooterContainer,
  Copyright,
  ContentContainer,
  FormContainer,
  FieldWrapper,
  GeneralContainer,
  NavListItem,
  // NavLink,
  By,
};
