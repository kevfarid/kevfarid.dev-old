import ConfigContext from 'context/ConfigContext';
import { useContext } from 'react';
import constants from 'config/constants';

export default function useConfig() {
  const { language, isDark, setLanguage, languageTexts, setIsDark } =
    useContext(ConfigContext);

  return {
    language,
    isDark,
    lang: languageTexts,
    constants,
    setLanguage,
    setIsDark,
  };
}
