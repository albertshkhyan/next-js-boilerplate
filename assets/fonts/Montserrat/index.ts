import { css } from '@mui/material/styles';

import MontserratBoldTtf700 from './Montserrat-Bold-700.ttf';
import MontserratBoldWoff700 from './Montserrat-Bold.woff';
import { ThemeFont } from '../../../types/global/fonts';

const MonsterRatFont: ThemeFont = {
  fontFamily: ['Montserrat Bold', 'Circular Std Black'],
  fontFaces: css`
    @font-face {
      font-family: 'Montserrat Bold';
      font-style: normal;
      font-display: swap;
      src: local('Montserrat Bold'),
      local('Montserrat-Bold'),
      url(${MontserratBoldTtf700}) format('truetype'),
      url(${MontserratBoldWoff700}) format('woff');
    }
  `,
};

export default MonsterRatFont;
