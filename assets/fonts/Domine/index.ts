import { css } from '@mui/material/styles';

import { FontFamilyNames, ThemeFont } from '../../../types/global/theme/fonts';
import DomineBookTtf from './Domine-Regular.ttf';
import DomineBookWoff from './Domine-Regular.woff';

const DomineFont: ThemeFont = {
  fontFamily: [FontFamilyNames.DomineBook],
  fontFaces: css`
    @font-face {
      font-family: ${FontFamilyNames.DomineBook};
      font-style: normal;
      font-display: swap;
      src: local(${FontFamilyNames.DomineBook}), local('Domine-Book-900'),
        url(${DomineBookTtf}) format('truetype'),
        url(${DomineBookWoff}) format('woff');
    }
  `,
};

export default DomineFont;
