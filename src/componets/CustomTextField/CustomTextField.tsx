import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ICustomTextField } from '../App/App.types';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
  },
});

export default function CustomTextField({
  value,
  onChange,
  label,
}: ICustomTextField) {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        id="outlined-basic"
        label={label}
        type="number"
        value={value}
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#bbdefb',
              borderRadius: '8px',
            },
            '&:hover fieldset': {
              borderColor: '#bbdefb',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4527a0',
            },
          },
          '& .MuiInputLabel-root': {
            transition: 'transform 200ms',
            '&': {
              color: '#bbdefb',
            },
            '&:hover': {
              color: '#bbdefb',
            },
            '&.Mui-focused': {
              color: '#4527a0',
            },
          },
        }}
        InputProps={{
          style: {
            color: '#fff',
          },
        }}
      />
    </ThemeProvider>
  );
}
