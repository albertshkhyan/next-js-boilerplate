import { createTheme, css } from '@mui/material/styles';

import CircularStdBlack900 from '../assets/fonts/CircularStd/CircularStd-Black-900.ttf';

// Create a theme instance.

// const CircularStdBlack = {
//   fontFamily: 'CircularStd Black',
//   fontStyle: 'normal',
//   fontWeight: 100,
//   src: `url(${CircularStdBlackTtf})`,
// };
//
// const NeonderthawRegular = {
//   fontFamily: 'Neonderthaw Regular',
//   fontStyle: 'normal',
//   fontWeight: 100,
//   src: `url(${NeonderthawRegularTtf})`,
// };

const theme = createTheme({
  palette: {
    common: {
      black: '#19192B',
      white: '#ffffff',
    },
    primary: {
      light: '#B3E5FC',
      main: '#002E99',
      dark: '#0288D1',
      contrastText: '#212121',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    secondary: {
      main: '#039E4F', // omitting light and dark will calculate from main
      contrastText: '#ffffff',
    },
    grey: {
      500: '#E9E9E9',
      700: '#ACACAC',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#00d589',
    },
    error: {
      main: '#FF5C00',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    allVariants: {
      color: '#000000',
    },
    fontFamily: [
      'Circular Std Black',
      'sans',
    ].join(', '),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: css`
        @font-face {
          font-family: 'Circular Std Black';
          font-style: normal;
          font-display: swap;
          src: local('Circular Std Black'),
          local('Circular-Std-Black-900'),
          url(${CircularStdBlack900}) format('truetype');
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
      `.styles,
    },

    // MuiCssBaseline: {
    //   styleOverrides: css`
    //     // @font-face {
    //     //   font-family: 'Neonderthaw Regular';
    //     //   font-style: normal;
    //     //   font-display: swap;
    //     //   font-weight: 700;
    //     //   src: local('Neonderthaw Regular'), local('Neonderthaw-Regular'), url(${NeonderthawRegular})
    // format('ttf'); // }  body { background: cyan; //font-family: 'Neonderthaw Regular', 'sans-serif'; //font-family:
    // 'fantasy', 'sans-serif'; }  p { //font-family: "Neonderthaw Regular", "sans-serif"; font-family: "fantasy",
    // "sans-serif"; } `.styles, },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
        },
        outlined: {
          color: '#000000',
        },
        contained: {
          color: '#ffffff',
        },
      },
    },
  },
  shape: {
    borderRadius: '6px',
  },
});

export default theme;
