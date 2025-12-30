// src/assets/styles/theme.ts
import type { Theme } from '../types/Theme';

export const lightTheme: Theme = {
  colors: {
    primary: '#3c65db',          // Azul Royal: Ideal para Títulos e botões principais
    secondary: '#84a1f4',        // Azul Céu: Ideal para bordas, badges ou fundos de cards
    background: '#ffffffff',       // Gelo/Azul muito claro: Fundo total da página
    text: '#0a0c15',             // Marinho quase preto: Texto principal (alto contraste)
    accent: '#4071ff',           // Azul Vibrante: Links, interações e estados de foco
    buttonBackground: '#3c65db', // Cor base para botões primários
    white: '#ffffff',
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
    primary: '#244bc2',          // Azul Forte: Títulos e botões no modo escuro
    secondary: '#0b287a',        // Marinho Fechado: Fundo de inputs, cards ou seções secundárias
    background: '#03050c',       // Midnight Blue: Fundo total (muito elegante no OLED)
    text: '#eaecf5',             // Azul Acinzentado claro: Texto principal (descanso visual)
    accent: '#002fbd',           // Azul Elétrico: Destaques e Call to Actions
    buttonBackground: '#244bc2', // Cor base para botões no modo dark
    white: '#ffffff',
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