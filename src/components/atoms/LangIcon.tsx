import useConfig from 'hooks/useConfig';

export default function LangIcon() {
  const { language, setLanguage } = useConfig();

  const handleClick = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return <small onClick={handleClick}>{language}</small>;
}
