import type { NextPage } from 'next';
import HomeSection from 'components/templates/HomeSection';
import useConfig from 'hooks/useConfig';

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
    </>
  );
};

export default Home;
