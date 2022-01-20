import { css } from '@mui/material/styles';

import CircularStdBlackTtf900 from './CircularStd-Black-900.ttf';
import CircularStdBlackWoff900 from './CircularStd-Black-900.woff';
import CircularStdBoldTtf700 from './CircularStd-Bold-700.ttf';
import CircularStdBoldWoff700 from './CircularStd-Bold-700.woff';
import CircularStdMediumTtf500 from './CircularStd-Medium-500.ttf';
import CircularStdMediumWoff500 from './CircularStd-Medium-500.woff';
import CircularStdBookTtf from './CircularStd-Book.ttf';
import CircularStdBookWoff from './CircularStd-Book.woff';
import { FontFamilyNames, ThemeFont } from '../../../types/global/theme/fonts';

const CircularStdFont: ThemeFont = {
  fontFamily: [
    FontFamilyNames.CircularStdBook,
    FontFamilyNames.CircularStdBold,
    FontFamilyNames.CircularStdBlack,
    FontFamilyNames.CircularStdMedium,
  ],
  fontFaces: css`
    @font-face {
      font-family: ${FontFamilyNames.CircularStdBlack};
      font-style: normal;
      font-display: swap;
      src: local(${FontFamilyNames.CircularStdBlack}),
        local('Circular-Std-Black-900'),
        url(${CircularStdBlackTtf900}) format('truetype'),
        /* Safari, Android, iOS */ url(${CircularStdBlackWoff900})
          format('woff'); /* Pretty Modern Browsers */
    }

    @font-face {
      font-family: ${FontFamilyNames.CircularStdBold};
      font-style: normal;
      font-display: swap;
      src: local(${FontFamilyNames.CircularStdBold}),
        local('Circular-Std-Bold-700'),
        url(${CircularStdBoldTtf700}) format('truetype'),
        url(${CircularStdBoldWoff700}) format('woff'); /* Pretty Modern Browsers */
    }

    @font-face {
      font-family: ${FontFamilyNames.CircularStdMedium};
      font-style: normal;
      font-display: swap;
      src: local(${FontFamilyNames.CircularStdMedium}),
        local('Circular-Std-Medium-Ttf-500'),
        url(${CircularStdMediumTtf500}) format('truetype'),
        /* Safari, Android, iOS */ url(${CircularStdMediumWoff500})
          format('woff'); /* Pretty Modern Browsers */
    }

    @font-face {
      font-family: ${FontFamilyNames.CircularStdBook};
      font-style: normal;
      font-display: swap;
      src: local(${FontFamilyNames.CircularStdBook}), local('Circular-Std-Book'),
        url(${CircularStdBookTtf}) format('truetype'),
        url(${CircularStdBookWoff}) format('woff');
    }
  `,
};

export default CircularStdFont;
