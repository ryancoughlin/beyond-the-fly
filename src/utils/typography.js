import Typography from 'typography';

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
  scaleRatio: 3,
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
      textTransform: 'uppercase',
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
