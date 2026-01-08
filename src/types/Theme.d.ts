export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;   
    buttonBackground: string;
    white: string;
    expirenceBackground: string;
    cardBackground: string;
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