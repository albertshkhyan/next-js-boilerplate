import { css } from '@mui/material/styles';

import CircularStdBlackTtf900 from './CircularStd-Black-900.ttf';
import CircularStdBlackWoff900 from './CircularStd-Black-900.woff';
import CircularStdMediumTtf500 from './CircularStd-Medium-500.ttf';
import CircularStdMediumWoff500 from './CircularStd-Medium-500.woff';
import CircularStdBookTtf from './CircularStd-Book.ttf';
import CircularStdBookWoff from './CircularStd-Book.woff';
import { ThemeFont } from '../../../types/global/fonts';

const CircularStdFont: ThemeFont = {
  fontFamily: ['Circular Std', 'Circular Std Black'],
  fontFaces: css`
    @font-face {
      font-family: 'Circular Std';
      font-style: normal;
      font-display: swap;
      src: local('Circular Std Book'),
      local('Circular-Std-Book'),
      url(${CircularStdBookTtf}) format('truetype'),
      url(${CircularStdBookWoff}) format('woff');
    }

    @font-face {
      font-family: 'Circular Std Black';
      font-style: normal;
      font-display: swap;
      src: local('Circular Std Black'), local('Circular-Std-Black-900'),
      url(${CircularStdBlackTtf900}) format('truetype'), /* Safari, Android, iOS */ url(${CircularStdBlackWoff900}) format('woff'); /* Pretty Modern Browsers */
    }

    @font-face {
      font-family: 'Circular Std Medium';
      font-style: normal;
      font-display: swap;
      src: local('Circular Std Medium'),
      local('Circular-Std-Medium-Ttf-500'),
      url(${CircularStdMediumTtf500}) format('truetype'), /* Safari, Android, iOS */ url(${CircularStdMediumWoff500}) format('woff'); /* Pretty Modern Browsers */
    }
  `,
};

export default CircularStdFont;
