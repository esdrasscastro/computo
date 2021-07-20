
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  font-variant-ligatures: none;
  -webkit-font-variant-ligatures: none;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #fff;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  opacity: 1;
}
#root{
  opacity: 1;
}
:disabled {
  cursor: no-drop;
}
pre {
  margin: 20px auto;
}
`;

export default GlobalStyle;