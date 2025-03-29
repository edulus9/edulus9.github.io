import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { initializeI18N } from 'utils/initializeI18N';
import { APP_THEME, GlobalStyle } from 'utils/styling';
import App from './App';

const renderApp = () => {
  const container = document.getElementById('app');
  const root = createRoot(container!);
  initializeI18N();

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={APP_THEME}>
        <GlobalStyle />
        <HashRouter basename={'/'}>
          <App />
        </HashRouter>
      </ThemeProvider>
    </React.StrictMode>
  );
};

renderApp();
