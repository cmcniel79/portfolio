import { Layout } from '../components/common';
import { AppProps } from 'next/app';
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
