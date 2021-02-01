
const Footer = (): JSX.Element => {
  return (
    <footer className="w-full h-24 flex flex-col justify-center items-center border-t">
      <p>
      Created by: <a className="font-bold " href="https://www.instagram.com/cakrads/" rel="noreferrer" target="_blank">@cakrads</a>
      </p>
      <p>
      Find the project in <a className="font-bold underline" href="https://github.com/cakrads/jadwal-shalat-nextjs" rel="noreferrer" target="_blank">github</a><br />
      </p>
    </footer>
  );
};

export default Footer;
