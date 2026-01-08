import type { Theme } from '../types/Theme';

export const lightTheme: Theme = {
  colors: {
    primary: '#3c65db',
    secondary: '#84a1f4',
    background: '#ffffffff',
    text: '#0a0c15',
    accent: '#4071ff',
    buttonBackground: '#3c65db',
    white: '#ffffff',
    expirenceBackground: '#F2F2F2',
    cardBackground: 'f3f6fb',
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSizeBase: '1em',
  },
  spacings: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: '#244bc2',
    secondary: '#0b287a',
    background: '#03050c',
    text: '#eaecf5',
    accent: '#002fbd',
    buttonBackground: '#244bc2',
    white: '#ffffff',
    expirenceBackground: '#F2F2F2',
    cardBackground: '#F2F2F2',
  },
  typography: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSizeBase: '1em',
  },
  spacings: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
};