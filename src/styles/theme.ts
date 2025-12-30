import type { Theme } from '../types/Theme';

export const lightTheme: Theme = {
  colors: {
    primary: '#1b4869',  
    secondary: '#71b5ea',
    background: '#f4f7fa',
    text: '#0d1216',      
    accent: '#0a81db',    
    buttonBackground: '#1b4869',
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
    primary: '#96c3e4',       
    secondary: '#155a8e',     
    background: '#05080a',    
    text: '#e9eef2',          
    accent: '#249af5',        
    buttonBackground: '#249af5', 
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