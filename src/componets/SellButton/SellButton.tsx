import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { red } from '@mui/material/colors';

const SellButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(red[800]),
  // margin: '0 auto',
  backgroundColor: red[800],
  '&:hover': {
    backgroundColor: red[900],
  },
}));

export default SellButton;
