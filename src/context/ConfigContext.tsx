import constants from 'config/constants';
import React from 'react';
import { getItemLocalStorage } from 'utils/storageManager';

const Context = React.createContext<IConfigContext>({
  language: constants.default.language,
  theme: constants.default.theme,
  setLanguage: () => '',
  setTheme: () => '',
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = React.useState<string>(
    () => getItemLocalStorage('language') || constants.default.language
  );
  const [theme, setTheme] = React.useState<string>(
    () => getItemLocalStorage('theme') || constants.default.theme
  );

  const values = React.useMemo(
    () => ({
      language,
      theme,
      setLanguage,
      setTheme,
    }),
    [language, theme]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

type IConfigContext = {
  language: string;
  theme: string;
  setLanguage: (language: string) => void;
  setTheme: (theme: string) => void;
};

export default Context;
