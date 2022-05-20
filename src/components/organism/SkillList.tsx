import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import GitHub from 'components/atoms/icons/GitHub';
import { Skill } from 'components/molecules/Skill';
import ITheme from 'models/ITheme';

export default function SkillList() {
  const { basic } = useTheme() as ITheme;

  return (
    <SkillListStyles>
      <Skill icon={<GitHub color={basic?.background} />} name="React" />
      <Skill icon={<GitHub color={basic?.background} />} name="JavaScript" />
      <Skill icon={<GitHub color={basic?.background} />} name="TypeScript" />
      <Skill icon={<GitHub color={basic?.background} />} name="Nodejs" />
      <Skill icon={<GitHub color={basic?.background} />} name="Git" />
      <Skill icon={<GitHub color={basic?.background} />} name="Angular" />
    </SkillListStyles>
  );
}

const SkillListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
`;
