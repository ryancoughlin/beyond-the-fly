export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Chivo, sans-serif',
    heading: 'Chivo',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [9, 12, 14, 16, 20, 24, 32, 44, 52, 60],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#1d2737',
    white: '#fff',
    background: '#fff',
    darkBackground: '#16171b',
    primary: '#ffc500',
    secondary: '#30c',
    muted: '#868C96'
  },
  variants: {
    nav_link: {
      color: 'text',
      textDecoration: 'none'
    }
  },
  text: {
    light: {
      color: 'white'
    }
  },
  buttons: {
    dark: {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'heading',
      fontSize: 4,
      pl: 4,
      pr: 4,
      pt: 3,
      pb: 3,
      borderRadius: 0
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'white',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      letterSpacing: '0.055em',
      textTransform: 'uppercase',
      fontSize: 8
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      fontSize: 7
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      fontSize: 4
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'bold',
      marginBottom: 0,
      fontSize: 4
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      marginBottom: 0,
      fontSize: 3
    },
    h6: {
      color: 'muted',
      fontFamily: 'body',
      lineHeight: 'heading',
      fontWeight: 'body',
      marginBottom: 0,
      marginTop: 2,
      fontSize: 1,
      textAlign: 'center'
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    blockquote: {
      fontSize: 6,
      fontFamily: 'heading',
      fontWeight: 'bold',
      color: 'white'
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    },
    caption: {
      fontSize: 2,
      color: 'muted'
    }
  }
};
