import { FC, memo } from 'react';
import { styled } from '@mui/material/styles';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface IButtonProps extends ButtonProps {};

const StyledButton = styled(MuiButton)<IButtonProps>(({ theme, ...prop }) => {
  if (prop.color === 'info' && prop.variant === 'outlined') {
    return ({
      border: `2px solid ${theme.palette.info.main}`,
      color: '#333333',
      '&:hover': {
        borderColor: `${theme.palette.info.main}`,
        background: `${theme.palette.info.dark}`,
      },
    });
  }

  if (prop.color === 'error' && prop.variant === 'outlined') {
    return ({
      border: `2px solid ${theme.palette.error.main}`,
      color: '#FF5C00',
      '&:hover': {
        border: `2px solid ${theme.palette.error.dark}`,
        color: '#c94c00',
        background: 'none',
      },
    });
  }

  return;
});

const Button: FC<IButtonProps> = ({ children, ...restProps }) => (
  <StyledButton {...restProps}>{children}</StyledButton>
);

export default memo(Button);
