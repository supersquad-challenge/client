import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'ClashDisplayVariable';
    src: local('ClashDisplayVariable'), local('ClashDisplayVariable');
    font-style: normal;
    src: url('/static/fonts/ClashDisplay-Variable.ttf') format('truetype');
  }
`
export default GlobalStyle;