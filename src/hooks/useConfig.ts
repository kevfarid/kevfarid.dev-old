import ConfigContext from 'context/ConfigContext';
import { useContext } from 'react';
import constants from 'config/constants';
import es from 'config/languages/es';

const languageList = {
  es,
};

export default function useConfig() {
  const { language, theme, setLanguage, setTheme } = useContext(ConfigContext);

  const languageTexts = languageList[language as keyof typeof languageList];

  return {
    language,
    theme,
    languageTexts,
    constants,
    setLanguage,
    setTheme,
  };
}
