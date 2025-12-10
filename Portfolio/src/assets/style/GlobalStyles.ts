// src/assets/styles/GlobalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* ------------------------------------------- */
  /* 1. RESET CSS UNIVERSAL (BOX-SIZING, MARGINS, ETC.) */
  /* ------------------------------------------- */

  *,
  *::before,
  *::after {
    /* Define que padding e border não adicionam tamanho ao elemento */
    box-sizing: border-box; 
  }

  * {
    margin: 0;
    padding: 0;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit; /* Garante que elementos de formulário herdem a fonte global */
  }

  ul, ol {
    list-style: none;
  }

  /* ------------------------------------------- */
  /* 2. ESTILOS BASE APLICADOS PELO TEMA */
  /* ------------------------------------------- */
  
  body {
    /* Cores e Tipografia do Theme Provider */
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.fontSizeBase};

    min-height: 100vh;
    line-height: 1.5;
    margin: 0;
    min-width: 320px;
    
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Estilos para H1 */
  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }

  /* Estilos para Links */
  a {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.25s;
  }

  a:hover {
    color: ${(props) => props.theme.colors.secondary};
  }

  /* Estilos para Botões (Default Button Style) */
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: ${(props) => props.theme.colors.buttonBackground};
    cursor: pointer;
    transition: border-color 0.25s;
    color: ${(props) => props.theme.colors.text};
  }

  button:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }

  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;