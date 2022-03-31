import Callout from 'components/atoms/Callout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Callout emojin="🏗" variant="danger" align="center">
      Side in development.
    </Callout>
  );
};

export default Home;
