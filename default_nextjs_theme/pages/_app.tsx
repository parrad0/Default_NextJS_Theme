/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from '../rtk/store/store';
import { themeResponsive } from '../styles/theme';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeResponsive}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
