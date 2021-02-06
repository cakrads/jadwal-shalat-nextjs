import { Store } from '@context/index';
import React from 'react';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }): JSX.Element => {

  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );

};

export default MyApp;
