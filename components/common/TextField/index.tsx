import React, { memo } from 'react';

import { v4 as uuid } from 'uuid';
import MuiInputLabel from '@mui/material/InputLabel';
import MuiTextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { TextFieldProps } from '@mui/material';

const StyledTextField = styled((props: TextFieldProps) => (
  <MuiTextField
    {...props}
  />
))(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& .Mui-disabled': {
      background: theme.palette.grey[800],
      border: 'none',
    },
  },
}));

interface ITextFieldProps extends BaseTextFieldProps {
  withLabel?: boolean;
  restProps?: TextFieldProps;
}

const TextField = ({
  withLabel = true,
  id = uuid(),
  ...restProps
}: ITextFieldProps) => {
  return (
    <>
      {withLabel && (
        <MuiInputLabel htmlFor={id} shrink>Your e-mail</MuiInputLabel>
      )}
      <StyledTextField
        id={id}
        variant="outlined"
        InputLabelProps={{ disableAnimation: false }}
        {...restProps}
      />
    </>
  );
};

export default memo(TextField);
