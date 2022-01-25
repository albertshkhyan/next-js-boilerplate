import { ComponentsOverrides, ComponentsProps, ComponentsVariants } from '@mui/material';
import { Theme } from '@mui/system';

import { COLORS } from '../../types/global/theme/colors';

const buttonStyles: {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
} = {
  styleOverrides: {
    root: {
      borderRadius: '100px',
      fontSize: '16px',
      minWidth: '112px',
      lineHeight: '1.95',
      textTransform: 'none',
    },
    contained: {
      color: COLORS.white,
    },
  },
};

export default buttonStyles;
