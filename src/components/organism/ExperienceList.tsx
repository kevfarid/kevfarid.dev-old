import styled from '@emotion/styled';
import Experience from 'components/molecules/Experience';
import { IExperience } from 'models/ILang';

export function ExperienceList(props: ExperienceListProps) {
  const { experiences } = props;
  return (
    <ExperienceListStyles>
      {experiences.map((experience) => (
        <Experience
          year={experience.year}
          position={experience.title}
          company={experience.company}
          key={experience.title}
        />
      ))}
    </ExperienceListStyles>
  );
}

const ExperienceListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

type ExperienceListProps = {
  experiences: IExperience[];
};
