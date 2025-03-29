import { MenuList } from 'react95';
import styled from 'styled-components';

export const MenuListWrapper = styled(MenuList)`
  position: absolute;
  left: 0;
  top: 100%;
  z-index: ${({ theme }) => theme.zIndex.startMenu};
`;
