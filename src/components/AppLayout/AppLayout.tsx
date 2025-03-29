import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { TopNavBar } from '../TopNavBar';
import * as S from './styles';

export interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = ({}) => {
  return (
    <S.LayoutRoot>
      <TopNavBar />

      <S.DesktopWrapper>
        <Outlet />
      </S.DesktopWrapper>
    </S.LayoutRoot>
  );
};
