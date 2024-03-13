import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { green } from '@mui/material/colors';

const BuyButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[800]),
  // margin: '0 auto',
  backgroundColor: green[800],
  '&:hover': {
    backgroundColor: green[900],
  },
}));

export default BuyButton;
