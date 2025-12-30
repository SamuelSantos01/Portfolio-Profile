import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import './index.css'
import { lightTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles/>
          <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
)
 