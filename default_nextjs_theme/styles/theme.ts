/* eslint-disable import/prefer-default-export */
import { createTheme, responsiveFontSizes } from '@mui/material';
import { cyan } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: cyan,
    secondary: {
      main: '#FF845E',
    },
  },
  typography: {
    fontFamily: ["'Avenir'"].join(','),
    body1: { fontSize: '1.5rem' },
    body2: { fontSize: '1.3rem' },
  },
});
export const themeResponsive = responsiveFontSizes(theme);
