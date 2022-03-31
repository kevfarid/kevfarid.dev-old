import { ThemeProvider, Global } from '@emotion/react';
import { ConfigProvider } from 'context/ConfigContext';
import type { AppProps } from 'next/app';
import 'styles/main.css';
import THEME from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
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
    </ConfigProvider>
  );
}

export default MyApp;
