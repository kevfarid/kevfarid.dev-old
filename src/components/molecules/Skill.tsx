import styled from '@emotion/styled';
import ITheme from 'models/ITheme';
import Text from 'components/atoms/Text';

export function Skill(props: SkillProps) {
  const { icon, name } = props;

  return (
    <SkillStyles>
      <IconWrapper>{icon}</IconWrapper>
      <Text variant="subtitle" margin-top="0.4rem">
        {name}
      </Text>
    </SkillStyles>
  );
}

const SkillStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 1rem;
  width: 48px;
`;

const IconWrapper = styled.div<StyledProps>(({ theme }) => ({
  padding: '0.5rem',
  backgroundColor: theme.basic.text,
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type SkillProps = {
  icon: React.ReactNode;
  name: string;
};

type StyledProps = {
  theme?: ITheme;
  children: React.ReactNode;
};
