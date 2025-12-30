export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;   
    buttonBackground: string;
    white: string;
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