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
  scaleRatio: 1.4,
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
    img: {
      marginBottom: 0,
    },
  }),
});

export default typography;
