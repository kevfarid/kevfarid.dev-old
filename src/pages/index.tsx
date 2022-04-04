import useConfig from 'hooks/useConfig';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { lang } = useConfig();
  return <p>{lang?.sections?.home.text}</p>;
};

export default Home;
