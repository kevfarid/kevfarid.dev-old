import MySocialMedia from 'components/molecules/MySocialMedia';
import Text from 'components/atoms/Text';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <MySocialMedia />
      <Text>Hello Next.js</Text>
    </>
  );
};

export default Home;
