import { Stack, Switch, Typography } from '@mui/joy';
import { green } from '@mui/material/colors';
import { ICustomSwitch } from '../App/App.types';

export default function CustomSwitch({ checked, setChecked }: ICustomSwitch) {
  return (
    <Stack direction="row" justifyContent="flex-end" sx={{ marginBottom: 5 }}>
      <Switch
        checked={checked}
        onChange={event => setChecked(event.target.checked)}
        color="danger"
        slotProps={{
          track: {
            children: (
              <>
                <Typography
                  component="span"
                  level="inherit"
                  sx={{ ml: '10px' }}
                >
                  Sell
                </Typography>
                <Typography component="span" level="inherit" sx={{ mr: '8px' }}>
                  Buy
                </Typography>
              </>
            ),
          },
        }}
        sx={{
          '--Switch-thumbSize': '35px',
          '--Switch-trackWidth': '84px',
          '--Switch-trackHeight': '37px',
          '--Switch-trackBackground': green[800],
          '&:hover': { '--Switch-trackBackground': green[900] },
        }}
      />
    </Stack>
  );
}
