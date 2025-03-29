import { Window, WindowContent } from 'react95';
import styled from 'styled-components';
import { ResponsiveWindowProps } from './ResponsiveWindow';

export const StyledWindow = styled(Window).attrs<ResponsiveWindowProps>(
  ({ height, width, ...rest }) => ({
    style: {
      height,
      width,
      top: `calc(50% - calc(${height} / 2))`,
      left: `calc(50% - calc(${width} / 2))`,
    },
    ...rest,
  })
)`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 95%;
  max-height: 95%;
`;

export const StyledWindowContent = styled(WindowContent)`
  flex-grow: 1;
  overflow: auto;
`;
