import React from 'react';
import CardShalat from '@components/organism/CardShalat';
import { ICardShalat } from '@interfaces/pray';
import { DATE, hijrDate } from '@helpers/index';
import { getNextPrayTime, getTimeleftToPray } from '@api/prayTimes';

const Component = (): JSX.Element => {

  const DEFAULT = {
    calcMethod:'',
    shalat: {time:'', title:'', },
    timeLeft: '',
    today:'',
    todayHijr:'',
  };
  const [data, setData] = React.useState<ICardShalat>(DEFAULT);

  React.useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    const calcMethod = 'Kemenag Jakarta Pusat, Indonesia';
    const today = DATE.format('dddd, D MMMM YYYY');
    const todayHijr = hijrDate.writeIslamicDate();

    const nextPrayTime = await getNextPrayTime();
    const timeleftToPray = getTimeleftToPray(nextPrayTime);

    setData({
      calcMethod,
      shalat: nextPrayTime,
      timeLeft: timeleftToPray,
      today,
      todayHijr,
    });
  };

  return (
    <CardShalat {...data}/>
  );
};

export default Component;
