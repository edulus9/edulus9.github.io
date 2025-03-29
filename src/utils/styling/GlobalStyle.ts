import { createScrollbars, styleReset } from 'react95';
// @ts-expect-error FIXME Fix type issue here
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
// @ts-expect-error FIXME Fix type issue here
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  
  html, body, #app {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0
  }

  ${createScrollbars()}
`;
