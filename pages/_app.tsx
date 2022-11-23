import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from 'components/document/Navbar';

import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {pageProps.noLayout ? (
        <Component {...pageProps} />
      ) : (
        <>
          <Navbar />
          <Container>
            <Component {...pageProps} />
          </Container>
          <ToastContainer
            position='bottom-right'
            newestOnTop={false}
            pauseOnHover
            theme='light'
            autoClose={3000}
          />
        </>
      )}
    </QueryClientProvider>
  );
}
