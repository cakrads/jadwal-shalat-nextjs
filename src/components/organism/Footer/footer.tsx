
const Footer = (): JSX.Element => {
  return (
    <footer className="w-full h-24 flex justify-center items-center">
      <a
        className="container flex justify-center items-center border-t h-24"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{' '}
        <img alt="Vercel Logo" className="ml-2 h-4" src="/vercel.svg" />
        <b>PrayTimes.org</b>
      </a>
    </footer>
  );
};

export default Footer;
