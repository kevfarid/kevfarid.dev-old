import styled from '@emotion/styled';
import useConfig from 'hooks/useConfig';
import Skill from 'components/molecules/Skill';

export default function SkillList() {
  const { constants } = useConfig();
  return (
    <SkillListStyles>
      {Object.keys(constants.skills).map((key) => (
        <Skill
          key={key}
          icon={constants.skills[key].icon}
          name={constants.skills[key].name}
        />
      ))}
    </SkillListStyles>
  );
}

const SkillListStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
`;
