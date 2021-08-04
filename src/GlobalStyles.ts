import {css, createGlobalStyle} from 'styled-components';

export const applyStyle = ({style}: any) => style 

const viewport: any = {
  desktop: 1024,
  large: 1366,
  tablet: 768,
  mobile: 320
}

export const applyBreakpoints = ({breakpoints}: any) => {
  if(!breakpoints) return undefined;

  return css`
    ${Object.keys(breakpoints).map(
      (value) => {
        return css`
          @media (min-width: ${viewport[value]}px) {
            ${css(breakpoints[value])};
          }
        `;
      }
    )}
  `;
}

export const fontWeight = (weight: string) => {
  switch(weight) {
    case 'Regular':
      case 'reguar': return 400;
    case 'Medium':
      case 'medium': return 600;
    case 'Bold':
      case 'bold': return 700;
    case 'Light':
      case 'light': return 300;
  }
}

export const setSizes = (sizes: string | number | Array<string> | Array<number>): string => {
  switch(typeof sizes) {
    case 'string':
    case 'number':  
      return rem(sizes);
    case 'object':
      if(sizes instanceof Array) {
        let accumulator = '';

        for(let current of sizes) {
          if(!accumulator) {
            accumulator = setSizes(current);
            continue;
          }

          accumulator = accumulator.concat(' ', setSizes(current));
        }

        return accumulator;
      }

      return '0 auto';
    default: throw new Error('Invalid parameter type. setSizer only accepts string, number or array of number/string');
  }
}

export const rem = (value: string | number, base = 16): string => {
  const convertRem = (v: string | number) => typeof v === 'number' ? `${v / base}rem`: `${parseFloat(v) / base}rem`;
  
  if(typeof value === 'number') {
    return convertRem(value);
  } else if(typeof value === 'string') {
    if(value.match(/^\d+$/)) {
      return convertRem(value);
    } else if(['%', 'px', 'rem', 'em'].find(v => value.indexOf(v) >= 1)) {
      return value;
    }
  }

  return value;
}

const GlobalStyle = createGlobalStyle`
  :root {
    --root-large-min-width: ${viewport['large']}px;
    --root-desktop-min-width: ${viewport['desktop']}px;
    --root-tablet-min-width: ${viewport['tablet']}px;
    --root-mobile-min-width: ${viewport['mobile']}px;

    --header-height: 60px;
    --footer-minheight: 60px;
    --default-padding: 0 1em;
    --initial-menu-position: calc(-100vw - 25%);
    --menu-width: calc(100vw - 25%);

    // Colors
    --primary-color: rgba(13, 24, 33, 1);
    --secondary-color: rgba(52, 73, 102, 1);
    --terciary-color: rgba(230, 170, 206, 1);
    --primary-font-color: rgba(95, 93, 110, 1);
    --secondary-font-color: rgba(240, 244, 239, 1);
    --terciary-font-color: rgba(191, 204, 148, 1);

    @media (min-width: ${viewport['mobile']}px) {
      font-size: 32px;
    }

    @media (min-width: ${viewport['tablet']}px) {
      font-size: 24px;
    }

    @media (min-width: ${viewport['desktop']}px) {
      font-size: 16px;
    }
  }

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
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--secondary-font-color);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  #application{
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 100vh;
  }

  :disabled {
    cursor: no-drop;
  }

  pre {
    margin: 20px auto;
  }


  $grid__cols: 12;
  @for $i from 1 through $grid__cols {
    .col-#{$i} {
      flex-basis: (100 / ($grid__cols / $i) ) * 1%;
    }
  }

  main, header, footer {
    padding: var(--default-padding);
  }

  menu {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;