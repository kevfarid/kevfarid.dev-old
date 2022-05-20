import type { NextPage } from 'next';
import HomeSection from 'components/templates/HomeSection';
import useConfig from 'hooks/useConfig';
import ExperienceSection from 'components/templates/ExperienceSection';

const Home: NextPage = () => {
  const { lang, constants } = useConfig();

  return (
    <>
      <HomeSection
        title={lang.sections?.home?.title}
        description={lang.sections?.home?.text}
        image={constants.avatar}
        section="home"
      />
      <ExperienceSection
        section="experience"
        title={lang.sections?.experience?.title}
        description={lang.sections?.experience?.text}
        skillTitle={lang.sections?.experience.components?.skills?.title || ''}
        experienceTitle={
          lang.sections?.experience.components?.experience?.title || ''
        }
      />
    </>
  );
};

export default Home;
