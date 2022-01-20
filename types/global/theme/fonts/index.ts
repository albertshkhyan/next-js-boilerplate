import type { SerializedStyles } from '@emotion/serialize';

// declare object as a const, so ts recognizes it as enum
export enum FontFamilyNames {
  CircularStdBook = 'Circular Std Book',
  CircularStdBlack = 'Circular Std Black',
  CircularStdBold = 'Circular Std Bold',
  CircularStdMedium = 'Circular Std Medium',
  MontserratBold = 'Montserrat Bold',
  DomineBook = 'Domine Book',
}

type FontFamily = typeof FontFamilyNames;

type Values = FontFamily[keyof FontFamily];

export interface ThemeFont {
  fontFamily: Values[];
  fontFaces: SerializedStyles;
}
