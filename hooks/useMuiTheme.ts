import { useTheme } from '@mui/styles';
import { Theme } from '@mui/material';

const useMuiTheme = () => {
  const theme = useTheme<Theme>();

  return theme;
};

export default useMuiTheme;
