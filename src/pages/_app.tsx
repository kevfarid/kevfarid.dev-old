import Wrapper from 'components/templates/Wrapper';
import { ConfigProvider } from 'context/ConfigContext';
import type { AppProps } from 'next/app';
import 'styles/main.css';

function MyApp(props: AppProps) {
  return (
    <ConfigProvider>
      <Wrapper {...props} />
    </ConfigProvider>
  );
}

export default MyApp;
