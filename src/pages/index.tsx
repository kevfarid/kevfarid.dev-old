import MySocialMedia from 'components/molecules/MySocialMedia';
import type { NextPage } from 'next';
import { About } from 'components/molecules/About';

const Home: NextPage = () => {
  return (
    <>
      <MySocialMedia />
      <About title="About" description="Hello, I am a web developer" />
    </>
  );
};

export default Home;
