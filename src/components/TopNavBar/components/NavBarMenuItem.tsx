import * as React from 'react';
import { MenuListItem } from 'react95';
import styled from 'styled-components';

const StyledMenuListItem = styled(MenuListItem)`
  cursor: pointer !important;
`;

export interface NavBarMenuItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const NavBarMenuItem: React.FC<NavBarMenuItemProps> = ({ children }) => {
  return (
    <StyledMenuListItem>
      <span role="img" aria-label="👨‍💻">
        👨‍💻
      </span>
      {children}
    </StyledMenuListItem>
  );
};
