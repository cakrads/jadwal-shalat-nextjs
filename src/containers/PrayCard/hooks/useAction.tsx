import React, { useState, useContext } from 'react';
import { AppContext } from '@context/store';
import { getTimeleftToPray, } from '@api/prayTimes';
import { IPrayCard } from '@interfaces/pray';
import { DATE, hijrDate } from '@helpers/index';

export default function useAction() {
  const { globalState } = useContext(AppContext);
  const { prayTime } = globalState;

  const DEFAULT = {
    calcMethod: { name:'', value: '', },
    pray: { time:'', title:'', value: 0 },
    timeLeft: '',
    today:'',
    todayHijr:'',
  };
  const [data, setData] = useState<IPrayCard>(DEFAULT);

  React.useEffect(() => {
    initPrayTime();
  }, [prayTime]);

  const initPrayTime = async () => {
    const today = DATE.format('dddd, D MMMM YYYY');
    const todayHijr = hijrDate.writeIslamicDate();

    const timeleftToPray = getTimeleftToPray(prayTime.nextPrayTime);

    setData({
      calcMethod: prayTime.calcMethod,
      pray: prayTime.nextPrayTime,
      timeLeft: timeleftToPray,
      today,
      todayHijr,
    });
  };

  return {
    data,
  };
}
