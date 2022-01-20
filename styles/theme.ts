import { createTheme, css } from '@mui/material/styles';

import CircularStdFont from '../assets/fonts/CircularStd';
import MonsterRatFont from '../assets/fonts/Montserrat';

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
      ...CircularStdFont.fontFamily,
      ...MonsterRatFont.fontFamily,
      'sans',
    ].join(', '),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: css`
        ${CircularStdFont.fontFaces}
        ${MonsterRatFont.fontFaces}
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
      `.styles,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontSize: '16px',
          minWidth: '112px',
          lineHeight: '2.1',
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

console.log('%c theme ', 'background: #222; color: red', theme);

export default theme;
