import styled from '@emotion/styled';
import Project from 'components/molecules/Project';
import { IProject } from 'models/ILang';
import ITheme from 'models/ITheme';
import React from 'react';

export default function ProjectList({ projects }: { projects: IProject[] }) {
  return (
    <Content>
      {projects.map((item, index) => (
        <Project
          key={`project-${index}`}
          title={item.title}
          img={item.img}
          isPrivate={item.isPrivate}
          url={item.url}
          repo={item.repo}
          technologies={item.technologies}
        />
      ))}
    </Content>
  );
}

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 1rem;

  @media (max-width: ${({ theme }: StyleProps) => theme?.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

type StyleProps = {
  theme?: ITheme;
};
