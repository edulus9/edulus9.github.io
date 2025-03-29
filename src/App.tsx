import * as React from 'react';
import {} from '@react95/icons';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages';
import { pagePaths } from 'utils/routing';
import { AppLayout } from './components/AppLayout';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={pagePaths.base} element={<Navigate to={pagePaths.home} />} />
        <Route path={pagePaths.home} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
