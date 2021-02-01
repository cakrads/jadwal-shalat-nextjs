import React, { Fragment, } from 'react';
import Head from 'next/head';
import Header from '@components/organism/Header';
import Footer from '@components/organism/Footer';
import { IMainLayout } from '@interfaces/template';


export const MainLayout: React.FC = (props: IMainLayout) => {

  const { children, metSEO } = props;
  const { title = '', description = '' } = metSEO || {};

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content={description} name="description"/>
        <meta charSet="utf-8" />
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>

      <div className="overflow-hidden relative">
        <div className="w-full absolute"
          style={{
            background: 'radial-gradient(circle,#b43ab3 40%,#427bd5 52%,#37dbff 68%)',
            minHeight: '280vh',
            zIndex: -1,
          }}/>

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

    </Fragment>
  );
};

export default MainLayout;
