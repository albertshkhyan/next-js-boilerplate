import { CSSProperties } from 'react';

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
