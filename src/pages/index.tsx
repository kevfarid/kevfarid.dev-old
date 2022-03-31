import Callout from 'components/atoms/Callout';
import useConfig from 'hooks/useConfig';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { languageTexts } = useConfig();
  console.log(languageTexts);
  return (
    <Callout emojin="🏗" variant="danger" align="center">
      Side in development.
    </Callout>
  );
};

export default Home;
