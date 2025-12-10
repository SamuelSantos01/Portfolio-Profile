import type { Theme } from '../../types/Theme';

export const lightTheme: Theme = {
  colors: {
    primary: '#646cff',           // Cor principal de links/elementos de destaque
    secondary: '#747bff',         // Cor de hover/interação
    background: '#ffffff',        // Cor de fundo principal da página
    text: '#213547',              // Cor do texto principal
    buttonBackground: '#f9f9f9',  // Cor de fundo padrão de botões
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    fontSizeBase: '1em',
  },
  spacings: {
    small: '0.5rem',
    medium: '1rem',
    large: '2rem',
  },
};