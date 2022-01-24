import MuiButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, Divider, Typography } from '@mui/material';

import Button from '../components/common/Button';
import TextField from '../components/common/TextField';

const Test = () => {
  return (
    <>
      <Typography variant="h2">Inputs</Typography>

      <Box m={3}>
        <TextField defaultValue="pecherits4@gmail" type="text" placeholder="Type something..." />
      </Box>

      <Box m={3}>
        <TextField disabled defaultValue="pecherits4@gmail" type="text" placeholder="Type something..." />
      </Box>

      <Divider />

      <p>Circular Std Black 40pt, line-height 52pt</p>
      <hr />
      <MuiButton>I cool btn</MuiButton>
      <div>
        <MuiButton color="primary" variant="contained">
          Button 1
        </MuiButton>
      </div>
      <br />
      <div>
        <MuiButton color="secondary" variant="contained">
          Button 2
        </MuiButton>
      </div>
      <br />
      <div>
        <MuiButton color="warning" variant="outlined">
          Button 3
        </MuiButton>
      </div>
      <br />
      <div>
        <MuiButton color="error" variant="outlined">
          Button 4
        </MuiButton>
      </div>
      <hr />

      <h2>Custom Button</h2>

      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained">Button 5</Button>
        <Button color="secondary" variant="contained">Button 6</Button>
        <Button color="info" variant="outlined">Button 7</Button>
        <Button color="error" variant="outlined">Button 8</Button>
      </Stack>
      <Divider />

      {/* --------- Typography ------------*/}
      <Stack direction="column" spacing={2}>
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

      </Stack>
      <Divider />
      <Stack direction="column" spacing={4}>
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
      </Stack>
    </>
  );
};

export default Test;
