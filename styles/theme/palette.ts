import { PaletteOptions } from '@mui/material';

import { COLORS } from '../../types/global/theme/colors';

const palette: PaletteOptions = {
  common: {
    black: COLORS.black,
    white: COLORS.white,
  },
  primary: {
    light: COLORS.blue.light,
    main: COLORS.blue.main,
    dark: COLORS.blue.dark,
  },
  text: {
    primary: COLORS.black,
    secondary: COLORS.white,
  },
  secondary: {
    main: COLORS.green.main,
    dark: COLORS.green.dark,
    contrastText: COLORS.white,
  },
  grey: {
    100: COLORS.grey[100],
    200: COLORS.grey[200],
  },
  info: {
    main: COLORS.grey[100],
    dark: COLORS.grey.dark,
  },
  success: {
    main: '#00d589',
  },
  warning: {
    main: '#E5E5E5',
    dark: COLORS.grey.dark,
  },
  error: {
    main: COLORS.red.main,
    dark: COLORS.red.dark,
  },
  background: {
    default: COLORS.white,
  },
};

export default { palette };
