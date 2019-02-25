import Typography from 'typography';
import {Colors} from '../styles/theme';

const typography = new Typography({
  title: 'Beyond the Fly',
  baseFontSize: '16px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'frank-new',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'frank-new',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  scaleRatio: 3.0,
  headerWeight: 600,
  overrideStyles: () => ({
    h1: {
      color: Colors.Global.Highlight,
    },
    h3: {
      color: Colors.Global.Highlight,
      fontWeight: 500,
    },
    h4: {
      color: Colors.Global.Highlight,
      fontWeight: 500,
    },
    h6: {
      textTransform: 'uppercase',
      fontWeight: 400,
      letterSpacing: 0.3,
    },
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;
