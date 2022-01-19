import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Test = () => {
  return (
    <>
      Test
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, perferendis!</p>
      <Button>I cool btn</Button>
      <div>
        <Button color="secondary" variant="contained">Outlined</Button>
      </div>
      <div>
        <Button variant="contained">Contained</Button>
      </div>
      <div>
        <Button variant="outlined">Outlined</Button>
      </div>
      <hr />
      <div>
        <Typography>Lorem ipsum dolor.</Typography>
      </div>

    </>
  );
};

export default Test;
