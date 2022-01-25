import { FC, memo } from 'react';

import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface IButtonProps extends ButtonProps {}

const StyledButton = styled(MuiButton)<IButtonProps>(({ theme, ...prop }) => {
  if (prop.color === 'info' && prop.variant === 'outlined') {
    return {
      border: `2px solid ${theme.palette.info.main}`,
      color: theme.palette.common.black,
      '&:hover': {
        border: `2px solid ${theme.palette.info.main}`,
        background: `${theme.palette.info.dark}`,
      },
    };
  }

  if (prop.color === 'error' && prop.variant === 'outlined') {
    return {
      border: `2px solid ${theme.palette.error.main}`,
      color: theme.palette.error.main,
      '&:hover': {
        border: `2px solid ${theme.palette.error.dark}`,
        color: theme.palette.error.dark,
        background: 'none',
      },
    };
  }
});

const Button: FC<IButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);

export default memo(Button);
