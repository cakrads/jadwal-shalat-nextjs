import React, { Fragment, } from 'react';
import Head from 'next/head';
import Header from '@containers/Header';
import Footer from '@components/organism/Footer';
import { PrimaryBackground } from '@components/atomic/Background';
import { IMainLayout } from '@interfaces/config';
import BottomSheet from '@containers/BottomSheet';


export const MainLayout: React.FC = (props: IMainLayout) => {

  const { children, metSEO } = props;
  const { title = '', description = '' } = metSEO || {};

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description"/>
        <meta content="Keywords" name="keywords" />

        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          name="viewport"
        />

        <link href="/manifest.json" rel="manifest" />
        <link href="/favicon.ico" rel="icon" />
        <link
          href="/images/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/images/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link href="/images/apple-icon.png" rel="apple-touch-icon" />
        <meta content="#317EFB" name="theme-color" />
      </Head>

      <div className="overflow-hidden relative">
        <PrimaryBackground />
        <div className="container antialiased">
          <main className="max-w-lg mx-auto p-6 bg-white bg-glass pb-0">
            <Header />

            <section>
              {children}
            </section>

            <Footer />
          </main>
        </div>
      </div>
      <BottomSheet />
    </Fragment>
  );
};

export default MainLayout;
