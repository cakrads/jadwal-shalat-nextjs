import MainLayout from '@components/template/MainLayout';
import ShalatLocation from '@containers/ShalatLocation';
import CardShalatContainer from '@containers/CardShalat';
import TableShalat from '@components/organism/TableShalat';
import { generateMeta } from '@helpers/index';
import { getPrayTimesByDate, getNextPrayTime, getTimeleftToPray } from '@api/prayTimes';

const Home = (props: any): JSX.Element => {
  return (
    <MainLayout {...props}>
      <ShalatLocation />
      <CardShalatContainer {...props} />
      <TableShalat />
    </MainLayout>
  );
};

Home.getInitialProps = async () => {
  const metaSEO = generateMeta({});
  const todayPrayTime = getPrayTimesByDate('');
  const nextPrayTime = getNextPrayTime();
  const timeleftToPray = getTimeleftToPray(nextPrayTime);

  return {
    metaSEO,
    nextPrayTime,
    timeleftToPray,
    todayPrayTime,
  };
};
export default Home;
