import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

/*
|--------------------------------------------------------------------------
| 1. RESET CSS UNIVERSAL
|--------------------------------------------------------------------------
*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  
  /* Acessando a estrutura aninhada: theme.colors */
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  transition: background-color 0.3s ease, color 0.3s ease;
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
  font: inherit;
}

/*
|--------------------------------------------------------------------------
| 2. TIPOGRAFIA E ELEMENTOS (INTEGRADO AO THEME)
|--------------------------------------------------------------------------
*/

:root {
  /* Usando a tipagem de tipografia do tema */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSizeBase};
  line-height: 1.5;
  font-weight: 400;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  min-width: 320px;
}

a {
  font-weight: 500;
  text-decoration: none;
  /* Cor primária definida na sua interface */
  color: ${({ theme }) => theme.colors.primary};
  transition: color 0.25s;
}

a:hover {
  color: ${({ theme }) => theme.colors.secondary};
}

ul, ol {
  list-style: none;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacings.medium};
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.25s;
  
  /* Utilizando buttonBackground e cores do tema */
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
}

button:hover {
  border-color: ${({ theme }) => theme.colors.primary};
}

button:focus,
button:focus-visible {
  outline: 4px auto ${({ theme }) => theme.colors.primary};
}
`;