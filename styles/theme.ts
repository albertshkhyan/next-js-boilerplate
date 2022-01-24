import { CSSProperties } from 'react';

import { createTheme, css, ThemeOptions } from '@mui/material/styles';

import CircularStdFont from '../assets/fonts/CircularStd';
import MonsterRatFont from '../assets/fonts/Montserrat';
import { FontFamilyNames } from '../types/global/theme/fonts';
import DomineFont from '../assets/fonts/Domine';

declare module '@mui/material/styles' {
  // # For Typography
  interface TypographyVariants {
    poster: CSSProperties;
    h7: CSSProperties;
    title1: CSSProperties;
    inputTitle: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: CSSProperties;
    h7?: CSSProperties;
    title1?: CSSProperties;
    inputTitle?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
    h7: true;
    title1: true;
    inputTitle: true;
  }
}

const theme: ThemeOptions = createTheme({
  palette: {
    common: {
      black: 'cyan',
      white: '#ffffff',
    },
    primary: {
      light: '#B3E5FC',
      // main: '#039E4F',
      main: '#002E99',
      dark: '#01257b',
      contrastText: '#212121',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
    secondary: {
      main: '#039E4F',
      dark: '#027e3f',
      contrastText: '#ffffff',
    },
    grey: {
      500: '#D4D3D3',
      700: '#E9E9E9',
      800: '#F6F6F6',
    },
    info: {
      main: '#D4D3D3',
      dark: '#E9E9E9',
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
      dark: '#c94c00',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    poster: {
      color: 'red',
    },
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
  },
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
    // # Button
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '100px',
          fontSize: '16px',
          minWidth: '112px',
          lineHeight: '1.95',
          textTransform: 'none',
        },
        contained: {
          color: '#ffffff',
        },
      },
    },
    // # Input
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: FontFamilyNames.CircularStdBold,
          fontSize: 16,
          textTransform: 'uppercase',
          letterSpacing: '-0.5px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: 395,
          width: '100%',
          // border: '1px solid #039E4F',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '14px 24px 12px',
          maxWidth: '395px',
          fontSize: 14,
          border: '1px solid #039E4F',
          borderRadius: 6,
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: '6px',
  },
});

export default theme;
