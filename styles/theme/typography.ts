import { TypographyOptions } from '@mui/material/styles/createTypography';

import CircularStdFont from '../../assets/fonts/CircularStd';
import MonsterRatFont from '../../assets/fonts/Montserrat';
import DomineFont from '../../assets/fonts/Domine';
import { FontFamilyNames } from '../../types/global/theme/fonts';

const typography: TypographyOptions = {
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
};

export default typography;
