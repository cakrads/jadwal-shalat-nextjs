import MainLayout from '@components/template/MainLayout';
import ShalatLocation from '@containers/ShalatLocation';
import CardShalatContainer from '@containers/CardShalat';
import TableShalat from '@containers/TableShalat';
import { generateMeta } from '@helpers/index';

const Home = (props: any): JSX.Element => {
  return (
    <MainLayout {...props}>
      <ShalatLocation />
      <CardShalatContainer />
      <TableShalat />
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
