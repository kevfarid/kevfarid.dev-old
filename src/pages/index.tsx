import Callout from 'components/atoms/Callout';
import useConfig from 'hooks/useConfig';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { lang } = useConfig();
  return (
    <Callout emojin="🏗" variant="danger" align="center">
      {lang?.sections?.buildBanner.text}
    </Callout>
  );
};

export default Home;
