import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
    height: auto;
  }

  body {
    min-height: 100vh;
    width: 100%;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    transition: background-color 0.3s ease, color 0.3s ease;
    min-width: 320px;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  :root {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSizeBase};
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    line-height: 1.1;
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.25s;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  ul, ol {
    list-style: none;
  }

  img, picture, video, canvas, svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s;
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    color: #ffffff;
  }

  button:hover {
    filter: brightness(1.1);
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto ${({ theme }) => theme.colors.primary};
  }
`;