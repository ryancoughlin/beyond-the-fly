import css from '@emotion/css/macro';
import theme from './theme'

const layout = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    background-color: ${theme.colors.black};    
    color: ${theme.colors.textColor};
  }

  p, h1, h2, h3 {
    color: ${theme.colors.textColor};
  }
`;

export default layout;
