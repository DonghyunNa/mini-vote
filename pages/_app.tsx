import Navbar from 'components/document/Navbar';
import type { AppProps } from 'next/app';
import { Container } from 'react-bootstrap';

import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {pageProps.noLayout ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Navbar />
          <Container>
            <Component {...pageProps} />
          </Container>
        </>
      )}
    </>
  );
}
