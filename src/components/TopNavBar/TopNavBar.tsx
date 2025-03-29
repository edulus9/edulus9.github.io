import * as React from 'react';
import { AppBar, Toolbar } from 'react95';
import { StartMenu } from './components';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  return (
    <AppBar position="relative">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <StartMenu />
      </Toolbar>
    </AppBar>
  );
};
