// Definição da estrutura (interface) do seu objeto theme.
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    buttonBackground: string;
  };
  typography: {
    fontFamily: string;
    fontSizeBase: string;
  };
  spacings: {
    small: string;
    medium: string;
    large: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}