import { css } from '@mui/material/styles';

import MontserratBoldTtf700 from './Montserrat-Bold-700.ttf';
import MontserratBoldWoff700 from './Montserrat-Bold.woff';
import { FontFamilyNames, ThemeFont } from '../../../types/global/theme/fonts';

const MonsterRatFont: ThemeFont = {
  fontFamily: [FontFamilyNames.MontserratBold],
  fontFaces: css`
    @font-face {
      font-family: ${FontFamilyNames.MontserratBold};
      font-style: normal;
      font-display: swap;
      src: local(${FontFamilyNames.MontserratBold}), local('Montserrat-Bold'),
        url(${MontserratBoldTtf700}) format('truetype'),
        url(${MontserratBoldWoff700}) format('woff');
    }
  `,
};

export default MonsterRatFont;
