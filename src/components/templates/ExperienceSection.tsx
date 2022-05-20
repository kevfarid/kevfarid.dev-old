import SkillList from 'components/organism/SkillList';
import Text from 'components/atoms/Text';
import styled from '@emotion/styled';

export default function ExperienceSection(props: ExperienceSectionProps) {
  const { section, description, title, skillTitle, experienceTitle } = props;

  return (
    <ExperienceSectionStyles id={section}>
      <TitleStyles>
        <Text variant="h1">{title}</Text>
        <Text variant="body">{description}</Text>
      </TitleStyles>
      <SkillStyles>
        <Text variant="h2">{skillTitle}</Text>
        <SkillList />
      </SkillStyles>
      <ExperienceStyles>
        <Text variant="h2">{experienceTitle}</Text>
      </ExperienceStyles>
    </ExperienceSectionStyles>
  );
}

const ExperienceSectionStyles = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 1.3fr;
  grid-column-gap: 5rem;
`;

const TitleStyles = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const SkillStyles = styled.div`
  padding-top: 1rem;
  grid-area: 1 / 2 / 3 / 3;
`;

const ExperienceStyles = styled.div`
  grid-area: 2 / 1 / 3 / 2;
`;

type ExperienceSectionProps = {
  title: string;
  description: string;
  skillTitle: string;
  experienceTitle: string;
  section: string;
};
