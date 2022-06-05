import { Global, ThemeProvider } from '@emotion/react';
import SEO from 'components/generics/SEO';
import Header from 'components/molecules/Header';
import Footer from 'components/organism/Footer';
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
      <SEO />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
      <Global
        styles={{
          body: {
            backgroundColor: THEME.basic.background,
            color: THEME.basic.text,
          },
          'main > section': {
            margin: '0 auto',
            marginBottom: '6rem',
            padding: '0 2rem',
            maxWidth: THEME.breakpoints.desktop,
          },
        }}
      />
    </ThemeProvider>
  );
}

export default Wrapper;
