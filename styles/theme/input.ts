import {
  ComponentsOverrides,
  ComponentsProps,
  ComponentsVariants,
} from '@mui/material';
import { Theme } from '@mui/system';

import { FontFamilyNames } from '../../types/global/theme/fonts';
import { COLORS } from '../../types/global/theme/colors';

const inputLabelStyles: {
  defaultProps?: ComponentsProps['MuiInputLabel'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiInputLabel'];
  variants?: ComponentsVariants['MuiInputLabel'];
} = {
  styleOverrides: {
    root: {
      fontFamily: FontFamilyNames.CircularStdBold,
      fontSize: 16,
      textTransform: 'uppercase',
      letterSpacing: '-0.5px',
      color: COLORS.black,
    },
  },
};

const textFieldStyles: {
  defaultProps?: ComponentsProps['MuiTextField'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
  variants?: ComponentsVariants['MuiTextField'];
} = {
  styleOverrides: {
    root: {
      maxWidth: 395,
      width: '100%',
    },
  },
};

const outlinedInputStyles: {
  defaultProps?: ComponentsProps['MuiOutlinedInput'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiOutlinedInput'];
  variants?: ComponentsVariants['MuiOutlinedInput'];
} = {
  styleOverrides: {
    input: {
      padding: '14px 24px 12px',
      maxWidth: '395px',
      fontSize: 14,
      border: `1px solid ${COLORS.green.main}`,
      borderRadius: 6,
      fontFamily: FontFamilyNames.CircularStdBook,
    },
    notchedOutline: {
      border: 'none',
    },
  },
};

const MuiInputs = {
  inputLabelStyles,
  textFieldStyles,
  outlinedInputStyles,
};

export default MuiInputs;
