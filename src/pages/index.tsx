import type { NextPage } from 'next';
import Hero from 'components/organism/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Hi! My name is Kev"
        description="Hello, I am a web developer"
        src="/static/images/me.png"
      />
    </>
  );
};

export default Home;
