import * as React from 'react';
import { WindowHeader, WindowProps } from 'react95';
import * as S from './styles';

export interface ResponsiveWindowProps extends WindowProps {
  height?: React.CSSProperties['height'];
  width?: React.CSSProperties['width'];
}

const ResponsiveWindowRoot: React.FC<ResponsiveWindowProps> = ({ ...rest }) => {
  return <S.StyledWindow {...rest} />;
};

export const ResponsiveWindow = Object.assign(ResponsiveWindowRoot, {
  Header: WindowHeader,
  Content: S.StyledWindowContent,
});
