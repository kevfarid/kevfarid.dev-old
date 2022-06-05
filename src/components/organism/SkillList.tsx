import styled from '@emotion/styled';
import useConfig from 'hooks/useConfig';
import Skill from 'components/molecules/Skill';

export default function SkillList({ skills }: { skills: string[] }) {
  const { constants } = useConfig();

  const technologies = Object.values(constants.technologies).filter(
    (technology) => skills?.includes(technology.key)
  );

  return (
    <SkillListStyles>
      {technologies.map((technology) => (
        <Skill
          key={technology.key}
          icon={technology.icon}
          name={technology.name}
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
