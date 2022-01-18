// Create a theme instance.
import { createTheme } from '@mui/material/styles';

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
      primary: '#ffffff',
    },
    secondary: {
      main: '#039E4F', // omitting light and dark will calculate from main
      contrastText: '#ffffff',
    },
    grey: {
      500: '#bcbcbc',
      700: '#79797a',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#00d589',
    },
    error: {
      main: '#832838',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
    ].join(','),
  },
  components: {
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
