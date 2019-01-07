import css from '@emotion/css/macro';
import theme from './theme'

const layout = css`
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.textColor};
  }
`;

export default layout;
