import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from 'components/document/Navbar';
import { Container } from 'react-bootstrap';

export default class RootDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined'
            rel='stylesheet'
          />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'
            integrity='sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          />
        </Head>
        <body>
          <Navbar />
          <Container>
            <Main />
            <NextScript />
          </Container>
        </body>
      </Html>
    );
  }
}
