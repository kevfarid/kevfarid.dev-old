import styled from '@emotion/styled';
import useConfig from 'hooks/useConfig';

export default function LangIcon() {
  const { language, setLanguage } = useConfig();

  const languageToChange = language === 'en' ? 'es' : 'en';

  const handleClick = () => {
    setLanguage(languageToChange);
  };

  return <SmallStyled onClick={handleClick}>{languageToChange}</SmallStyled>;
}

const SmallStyled = styled.small`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
