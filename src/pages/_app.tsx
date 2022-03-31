import { ThemeProvider, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import 'styles/main.css';
import THEME from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
      <Global
        styles={{
          body: {
            backgroundColor: THEME.colors.background,
            color: THEME.colors.text,
          },
        }}
      />
    </ThemeProvider>
  );
}

export default MyApp;
