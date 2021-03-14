import MainLayout from '@components/template/MainLayout';
import ShalatLocation from '@containers/PrayLocation';
import ShalatCardContainer from '@containers/PrayCard';
import ShalatTable from '@containers/PrayTable';
import Timer from '@containers/Timer';
import { generateMeta } from '@helpers/index';

const Home = (props: any): JSX.Element => {
  return (
    <MainLayout {...props}>
      <ShalatLocation />
      <ShalatCardContainer />
      <ShalatTable />
      <Timer />
    </MainLayout>
  );
};

Home.getInitialProps = async () => {
  const metaSEO = generateMeta({});

  return {
    metaSEO,
  };
};
export default Home;
