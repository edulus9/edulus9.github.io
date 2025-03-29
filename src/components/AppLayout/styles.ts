import styled from 'styled-components';

export const LayoutRoot = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const DesktopWrapper = styled.div`
  background-color: ${({ theme }) => theme.desktopBackground};
  flex-grow: 1;
  position: relative;
`;
