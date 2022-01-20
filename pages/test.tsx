import Button from '@mui/material/Button';

// interface IMyTypographyProps extends TypographyProps {
//   fontFamily?: '';
// }

// const MyTypography = styled(MuiTypography)(({ theme }) => ({
//   color: theme.palette.primary.contrastText,
//   backgroundColor: theme.palette.primary.main,
//   padding: theme.spacing(1),
//   borderRadius: theme.shape.borderRadius,
// }));

const Test = () => {
  return (
    <>
      Test
      <p>Circular Std Black 40pt, line-height 52pt</p>
      <hr />
      <Button>I cool btn</Button>
      <div>
        <Button color="secondary" variant="contained">Button</Button>
      </div>
      <div>
        <Button variant="contained">Button</Button>
      </div>
      <div>
        <Button variant="outlined">Button</Button>
      </div>
      <hr />
      <div>
        {/* <MyTypography>Lorem ipsum dolor.</MyTypography> */}
        {/* <MuiTypograph>Lorem ipsum</MuiTypograph> */}
      </div>

    </>
  );
};

export default Test;
