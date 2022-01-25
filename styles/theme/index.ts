import { createTheme, css, ThemeOptions } from '@mui/material/styles';

import CircularStdFont from '../../assets/fonts/CircularStd';
import MonsterRatFont from '../../assets/fonts/Montserrat';
import DomineFont from '../../assets/fonts/Domine';
import typography from './typography';
import palette from './palette';
import buttonStyles from './button';
import MuiInputs from './input';

const theme: ThemeOptions = createTheme({
  ...palette,
  typography,
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
    MuiButton: buttonStyles,
    // # Input
    MuiInputLabel: MuiInputs.inputLabelStyles,
    MuiTextField: MuiInputs.textFieldStyles,
    MuiOutlinedInput: MuiInputs.outlinedInputStyles,
  },
  shape: {
    borderRadius: '6px',
  },
});

export default theme;
