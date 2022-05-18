import ITheme from 'models/ITheme';
import styled from '@emotion/styled';
import Text from 'components/atoms/Text';

export function About({ title, description }: HeroProps) {
  return (
    <HeroStyled>
      <Text variant="h2">{title}</Text>
      <Text variant="body">{description}</Text>
    </HeroStyled>
  );
}

const HeroStyled = styled.header<StyledProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  margin: '0 1rem',
}));

type HeroProps = {
  title: string;
  description: string;
};

type StyledProps = {
  theme?: ITheme;
};
