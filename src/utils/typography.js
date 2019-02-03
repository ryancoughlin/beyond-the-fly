import Typography from 'typography';
import {Colors} from '../styles/theme';


const typography = new Typography({
  title: 'Beyond the Fly',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Chivo',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Chivo',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  scaleRatio: 2.4,
  headerWeight: 900,
  googleFonts: [
    {
      name: 'Chivo',
      styles: [
        '400','900'
      ],
    },
  ],
  overrideStyles: () => ({
    h1: {
      color: Colors.Global.Text,
      textTransform: 'uppercase',
    },
    h3: {
      color: Colors.Global.Highlight,
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
