import GitHub from 'components/atoms/icons/GitHub';
import MySocialMedia from 'components/molecules/MySocialMedia';
import useConfig from 'hooks/useConfig';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { lang } = useConfig();
  return (
    <>
      <p>{lang?.sections?.home.text}</p>
      <MySocialMedia />
    </>
  );
};

export default Home;
