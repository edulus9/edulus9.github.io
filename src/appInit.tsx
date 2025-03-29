import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import defaultTheme from 'react95/dist/themes/original';
import { ThemeProvider } from 'styled-components';
import { initializeI18N } from 'utils/initializeI18N';
import App from './App';

const renderApp = () => {
  const container = document.getElementById('app');
  const root = createRoot(container!);
  initializeI18N();

  root.render(
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

renderApp();
