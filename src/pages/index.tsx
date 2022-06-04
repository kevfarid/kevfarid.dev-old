import type { NextPage } from 'next';
import HomeSection from 'components/templates/HomeSection';
import useConfig from 'hooks/useConfig';
import ExperienceSection from 'components/templates/ExperienceSection';
import ProjectSection from 'components/templates/ProjectSection';

const Home: NextPage = () => {
  const { lang, constants } = useConfig();

  return (
    <>
      <HomeSection
        title={lang.sections?.home?.title}
        description={lang.sections?.home?.text}
        image={constants.avatar}
        section="about"
      />
      <ExperienceSection
        skills={constants.skills}
        section="skills"
        title={lang.sections?.experience?.title}
        description={lang.sections?.experience?.text}
        skillTitle={lang.sections?.experience.components?.skills?.title || ''}
        experienceTitle={
          lang.sections?.experience.components?.experience?.title || ''
        }
        experiences={lang.experiences || []}
      />
      <ProjectSection
        section="portfolio"
        title={lang.sections?.portfolio?.title}
        description={lang.sections?.portfolio?.text}
        projects={lang?.projects || []}
      />
    </>
  );
};

export default Home;
