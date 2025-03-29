import { CommonStyledProps as CoreCommonStyledProps } from 'styled-components';
import { Theme } from 'utils/styling';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
  export interface CommonStyledProps extends CoreCommonStyledProps {
    theme: Theme;
  }
}
