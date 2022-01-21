import { createGlobalStyle } from "styled-components";

import theme from "./config/theme";
import media from "./config/media";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.white};
    color: ${theme.colors.slate};
    // color: ${theme.colors.grey};
    line-height: 1.25;
    font-family: ${theme.fonts.Karla};
    font-size: ${theme.fontSizes.xlarge};
    ${media.phablet`font-size: ${theme.fontSizes.large};`}

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${theme.colors.highlight};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${theme.colors.white};
    margin: 0 0 0 0;
  }

  h1 {
    font-family: ${theme.fonts.Oswald};
  }

  h2 {
    font-family: ${theme.fonts.JosefinSlab};
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.colors.teal};
      outline: 0;
    }
  }

  a.lighten:hover {
    // filter: brightness(1.5);
    color: ${theme.colors.teal};
}

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${theme.colors.blue};
    }
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    margin: 0 0 10px 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .p-button {
    color: ${theme.colors.white};
    background: ${theme.colors.teal};
    border: 1px solid ${theme.colors.teal};
    &:focus {
      box-shadow: 0 0 0 2px transparent, 0 0 0 4px transparent, 0 1px 2px 0 transparent;
    }
    &:enabled:hover, .p-button:not(button):not(a):not(.p-disabled):hover {
      background: ${theme.colors.orange};
      color: ${theme.colors.white};
      border-color: ${theme.colors.orange};
  }
  }

  .p-button-primary {
    background: ${theme.colors.bronzeLight};
    border: 1px solid ${theme.colors.bronzeLight};
    &:enabled:hover {
      background: ${theme.colors.orange};
      border: 1px solid ${theme.colors.orange};
    }
    &:focus {
      box-shadow: 0 0 0 2px transparent, 0 0 0 4px transparent, 0 1px 2px 0 transparent;
    }
  }

  .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem transparent;
}

.p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
  background: transparent;
  border-color: ${theme.colors.teal};
  color: ${theme.colors.teal};
}

.p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    background: #e9ecef;
    border-color: ${theme.colors.teal};
    color: ${theme.colors.teal};
}

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }

  .p-dialog .p-dialog-header .p-dialog-header-icon,
  .p-dialog.p-dialog-header.p-dialog-header-icon,
  .p-link {
    &:focus {
      box-shadow: 0 0 0 0.2rem transparent;
    }
  }

  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: ${theme.colors.teal};
  }

  .p-inputtext {
    &:enabled:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem ${theme.colors.teal};
      border-color: ${theme.colors.teal};
  }

  .p-button:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px ${
      theme.colors.teal
    }, 0 1px 2px 0 black;
  }
`;

export default GlobalStyle;
