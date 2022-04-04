import { ThemeProvider, Global } from '@emotion/react';
import useConfig from 'hooks/useConfig';
import ITheme from 'models/ITheme';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import DARK from 'styles/themes/dark';
import LIGHT from 'styles/themes/ligth';

function Wrapper({ Component, pageProps }: AppProps) {
  const { isDark } = useConfig();

  const [THEME, setTheme] = React.useState<ITheme>(isDark ? DARK : LIGHT);

  useEffect(() => {
    setTheme(isDark ? DARK : LIGHT);
  }, [isDark]);

  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
      <Global
        styles={{
          body: {
            backgroundColor: THEME.basic.background,
            color: THEME.basic.text,
          },
        }}
      />
    </ThemeProvider>
  );
}

export default Wrapper;