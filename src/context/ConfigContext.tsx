import React, { useCallback, useEffect } from 'react';
import constants from 'config/constants';
import ILang from 'models/ILang';

const Context = React.createContext<IConfigContext>({
  language: '',
  isDark: false,
  languageTexts: {} as ILang,
  setLanguage: () => '',
  setIsDark: () => false,
});

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = React.useState<string>(
    constants.default.language
  );

  const [isDark, setIsDark] = React.useState<boolean>(
    constants.default.theme === 'dark'
  );

  const [languageTexts, setLenguageTexts] = React.useState<ILang>({} as ILang);

  const getLanguageTexts = useCallback(async () => {
    const response = await fetch(`/static/languages/${language}.json`);
    const data = await response.json();
    setLenguageTexts(data);
  }, [language]);

  useEffect(() => {
    getLanguageTexts();
  }, [getLanguageTexts, language]);

  const values = {
    language,
    isDark,
    languageTexts,
    setLanguage,
    setIsDark,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

type IConfigContext = {
  language: string;
  isDark: boolean;
  languageTexts: ILang;
  setLanguage: (language: string) => void;
  setIsDark: (isDark: boolean) => void;
};

export default Context;
