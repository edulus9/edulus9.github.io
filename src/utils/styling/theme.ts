import defaultTheme from 'react95/dist/themes/original';
import type { Theme as React95Theme } from 'react95/dist/themes/types';

export interface Theme extends React95Theme {
  spacing: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
  };
  zIndex: {
    startMenu: number;
  };
}

export const APP_THEME = {
  ...defaultTheme,
  spacing: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
  },
  zIndex: {
    startMenu: 1,
  },
};
