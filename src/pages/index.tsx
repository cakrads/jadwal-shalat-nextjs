import Head from 'next/head';

export const Home = (): JSX.Element => {
  return (
    <div className="container mx-auto px-8">
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="flex flex-col justify-center items-center md:py-20">
        <h1 className="m-0 text-6xl leading-normal text-center">
        Welcome to
          <a className="hover:underline focus:underline active:underline text-blue-600" href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="leading-normal text-2xl">
        Get started by editing{' '}
          <code className="bg-gray-100 rounded p-3 text-lg">pages/index.js</code>
        </p>

        <div className="flex items-center justify-center flex-wrap lg:max-w-screen-md md:w-full sm:w-full mt-12">
          <a
            className="lg:w-2/5 md:w-full m-4 p-6 text-left no-underline border border-gray-200 rounded-lg
            transition duration-150 ease-in
            hover:text-blue-600 hover:border-blue-600"
            href="https://nextjs.org/docs"
          >
            <h3 className="text-2xl mb-4">Documentation &rarr;</h3>
            <p className="m-0 text-xl leading-normal">Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            className="lg:w-2/5 md:w-full m-4 p-6 text-left no-underline border border-gray-200 rounded-lg
            transition duration-150 ease-in
            hover:text-blue-600 hover:border-blue-600"
            href="https://nextjs.org/learn"
          >
            <h3 className="text-2xl mb-4">Learn &rarr;</h3>
            <p className="m-0 text-xl leading-normal">Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            className="lg:w-2/5 md:w-full m-4 p-6 text-left no-underline border border-gray-200 rounded-lg
            transition duration-150 ease-in
            hover:text-blue-600 hover:border-blue-600"
            href="https://github.com/vercel/next.js/tree/master/examples"
          >
            <h3 className="text-2xl mb-4">Examples &rarr;</h3>
            <p className="m-0 text-xl leading-normal">Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            className="lg:w-2/5 md:w-full m-4 p-6 text-left no-underline border border-gray-200 rounded-lg
            transition duration-150 ease-in
            hover:text-blue-600 hover:border-blue-600"
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          >
            <h3 className="text-2xl mb-4">Deploy &rarr;</h3>
            <p className="m-0 text-xl leading-normal">
            Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 flex justify-center items-center">
        <a
          className="container flex justify-center items-center border-t h-24"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
        Powered by{' '}
          <img alt="Vercel Logo" className="ml-2 h-4" src="/vercel.svg" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
