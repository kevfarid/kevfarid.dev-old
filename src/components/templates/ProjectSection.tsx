import { IProject } from 'models/ILang';
import React from 'react';
import Text from 'components/atoms/Text';
import ProjectList from 'components/organism/ProjectList';
import styled from '@emotion/styled';

export default function ProjectSection(props: ProjectSectionProps) {
  const { title, description, section, projects } = props;
  return (
    <Content id={section}>
      <Text variant="h1">{title}</Text>
      <Text variant="body">{description}</Text>
      <ProjectList projects={projects} />
    </Content>
  );
}

const Content = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
`;

type ProjectSectionProps = {
  title: string;
  description: string;
  section: string;
  projects: IProject[];
};
