import { styled } from '@mui/styles';
import { default as MuiTypography } from '@mui/material/Typography';

interface MyTypographyProps {
  fontFamily: '';
}

const MyTypograpy = styled(
  ({
    color,
    ...other
  }: MyTypographyProps & Omit<Props, keyof MyTypographyProps>) => (
    <MuiTypography {...other} />
  ),
)({
  fontFamily: (props: MyTypographyProps) => props.fontFamily,
});

export default MyTypograpy;
