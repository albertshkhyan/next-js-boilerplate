import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useMuiTheme from '../hooks/useMuiTheme';

const Test = () => {
  const theme = useMuiTheme();
  return (
    <>
      <p>Circular Std Black 40pt, line-height 52pt</p>
      <hr />
      <Button>I cool btn</Button>
      <div>
        <Button color="primary" variant="contained">
          Button 1
        </Button>
      </div>
      <br />
      <div>
        <Button color="secondary" variant="contained">
          Button 2
        </Button>
      </div>
      <br />
      <div>
        <Button color="warning" variant="outlined">
          Button 3
        </Button>
      </div>
      <br />
      <div>
        <Button color="error" variant="outlined">
          Button 4
        </Button>
      </div>
      <hr />
      --------- Typography ------------
      <div>
        <Typography variant="h6">
          Circular Std Black 64pt, line-height 78pt
        </Typography>
        <Typography variant="h1">Header 1</Typography>
        <Typography variant="h6">
          Circular Std Black 64pt, line-height 78pt
        </Typography>
        <Typography variant="h2">Header 2</Typography>
        <Typography variant="h6">
          Circular Std Black 64pt, line-height 78pt
        </Typography>
        <Typography variant="h3">Header 3</Typography>
        <Typography variant="h6">
          Circular Std Black 64pt, line-height 78pt
        </Typography>
        <Typography variant="h4">Header 4</Typography>
        <Typography variant="h6">
          Circular Std Black 64pt, line-height 78pt
        </Typography>
        <Typography variant="h5">Header 5</Typography>
        <div>---- Part 2 maybe mobile ----</div>
        <Typography component="div" variant="h7">
          Circular Std Bold 24 pt, line-height 32 pt
        </Typography>
        <Typography component="div" variant="title1">
          Title 1 (Bold)
        </Typography>
        <Typography component="div" variant="subtitle1">
          Subtitle 1 (Bold)
        </Typography>
        <Typography component="div" variant="inputTitle">
          Input Tittle 2 (Bold)
        </Typography>
        <Typography component="div" variant="body1">
          Body 16 (Medium)
        </Typography>
        <Typography component="div" variant="body2">
          Body Small (Medium)
        </Typography>
        <Typography component="div" variant="inputTitle">
          Input Tittle 2 (Bold)
        </Typography>
        <Typography component="div" variant="subtitle2">
          Subtitle 2 (Regular)
        </Typography>
      </div>
    </>
  );
};

export default Test;
