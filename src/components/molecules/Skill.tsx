import styled from '@emotion/styled';
import ITheme from 'models/ITheme';
import Text from 'components/atoms/Text';
import ImageCustom from 'components/atoms/Image';
import useConfig from 'hooks/useConfig';

export default function Skill(props: SkillProps) {
  const { icon, name } = props;

  const { isDark } = useConfig();

  return (
    <SkillStyles>
      <IconWrapper isDark={isDark}>
        <ImageCustom src={icon} alt={name} />
      </IconWrapper>
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

const IconWrapper = styled.div<StyledProps>(({ theme, isDark }) => ({
  padding: '0.5rem',
  backgroundColor: theme.basic.text,
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img': {
    filter: isDark ? 'invert(0%)' : 'invert(100%)',
  },
}));

type SkillProps = {
  icon: string;
  name: string;
};

type StyledProps = {
  theme?: ITheme;
  isDark?: boolean;
  children: React.ReactNode;
};
