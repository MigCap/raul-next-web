import styled from "styled-components";
import theme from "../config/theme";

const InlineLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  position: relative;
  transition: ${theme.transition};
  cursor: pointer;
  color: ${theme.colors.green};
  &:hover,
  &:focus,
  &:active {
    color: ${theme.colors.green};
    outline: 0;
    &:after {
      width: 100%;
    }
  }
  &:after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    position: relative;
    bottom: 0.37em;
    background-color: ${theme.colors.green};
    transition: ${theme.transition};
  }
`;

export default InlineLink;
