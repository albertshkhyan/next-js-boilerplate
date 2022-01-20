import { CSSProperties } from 'react';

import { Theme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { createTheme, ThemeOptions, css } from '@mui/material/styles';

import CircularStdFont from '../assets/fonts/CircularStd';
import MonsterRatFont from '../assets/fonts/Montserrat';
import { FontFamilyNames } from '../types/global/theme/fonts';
import DomineFont from '../assets/fonts/Domine';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    inputTitle: true;
    h7: true;
  }
}

declare module '@material-ui/core/Button' {
  interface ButtonPropsColorOverrides {
    koko: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  title1: CSSProperties;
  inputTitle: CSSProperties;
  h7: CSSProperties;
}
const theme: Theme = createTheme({
  palette: {
    // sell: 'red',
    common: {
      black: 'cyan',
      white: '#ffffff',
    },
    primary: {
      light: '#B3E5FC',
      main: '#039E4F',
      background: 'red',
      dark: '#027e3f',
      contrastText: '#212121',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    secondary: {
      main: '#002E99',
      dark: '#01257b',
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
    warning: {
      main: '#E5E5E5',
      dark: '#e9e9e9',
    },
    error: {
      main: '#FF5C00',
      // dark: '#cf7a49',
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
      ...DomineFont.fontFamily,
      'sans',
    ].join(', '),
    h1: {
      fontFamily: FontFamilyNames.CircularStdBold,
      fontWeight: 700,
      fontSize: '80px',
      lineHeight: '101px',
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: FontFamilyNames.CircularStdMedium,
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '42px',
      lineHeight: '53px',
      letterSpacing: '-0.04em',
    },
    h3: {
      fontFamily: FontFamilyNames.CircularStdBook,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '33px',
      letterSpacing: '-0.04em',
    },
    h4: {
      fontFamily: FontFamilyNames.MontserratBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '42px',
    },
    h5: {
      fontFamily: FontFamilyNames.CircularStdBook,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '140%',
      letterSpacing: '-0.02em',
    },
    h6: {
      fontFamily: FontFamilyNames.MontserratBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '20px',
    },
    h7: {
      fontFamily: FontFamilyNames.MontserratBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '17px',
    },
    title1: {
      fontFamily: FontFamilyNames.MontserratBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '32px',
    },
    subtitle1: {
      fontFamily: FontFamilyNames.MontserratBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '18px',
      lineHeight: '26px',
    },
    subtitle2: {
      fontFamily: FontFamilyNames.DomineBook,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '18px',
      lineHeight: '26px',
    },
    body1: {
      fontFamily: FontFamilyNames.CircularStdBook,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '140%',
      letterSpacing: '-0.02em',
    },
    body2: {
      fontFamily: FontFamilyNames.CircularStdBook,
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '140%',
      letterSpacing: '-0.02em',
    },
    inputTitle: {
      fontFamily: FontFamilyNames.CircularStdBook,
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '-0.5px',
      textTransform: 'uppercase',
    },
  } as ExtendedTypographyOptions,
  components: {
    MuiCssBaseline: {
      styleOverrides: css`
        ${CircularStdFont.fontFaces}
        ${MonsterRatFont.fontFaces}
        ${DomineFont.fontFaces}
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
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
          textTransform: 'none',
        },
        outlined: {
          borderWidth: '2px',
          // color: '#333333',
          '&:hover': {
            borderWidth: '2px',
          },
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
} as ThemeOptions);

export default theme;
