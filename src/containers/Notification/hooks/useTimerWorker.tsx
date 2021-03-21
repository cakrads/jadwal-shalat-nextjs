import { useEffect, useState, useContext } from 'react';
import WebWorker from '@helpers/workerSetup';
import worker from '@libraries/workerTimer';
import { initialPrayTimeState } from '@api/prayTimes';
import { AppContext } from '@context/store';
import { PRAY_TIME_ACTIONS } from '@context/actionsConst';


function useTimerWorker (props) {

  const { onExecute } = props;
  const [ workerTimer, setWorkerTimer ]: any = useState('');
  const { globalState, dispatch } = useContext(AppContext);
  const { prayTime } = globalState;
  const [ nextPrayTitle, setNextPrayTime ]: any = useState(prayTime.nextPrayTime.title);
  const [ alarmStart, setAlarmStart ]: any = useState(false);

  useEffect(() => {
    if (typeof (WebWorker) !== 'undefined') {
      if (workerTimer === '') {
        setWorkerTimer(new WebWorker(worker));
      }
    }
  }, []);

  useEffect(() => {

    sendTimeToWorker(prayTime.nextPrayTime.value);
    setNextPrayTime(prayTime.nextPrayTime.title);

    if (alarmStart) {
      onExecute(nextPrayTitle);
      setAlarmStart(false);
    }

  }, [prayTime]);

  useEffect(() => {
    if (workerTimer) {
      workerTimer.addEventListener('message', ({ data }) => {
        // console.log('receive from worker');
        if (data.remindNow) {
          setAlarmStart(true);
          reInitPrayTime();
        }
      });
    }
  }, [workerTimer]);

  const sendTimeToWorker = (remindMeWhen: number) => {
    if (workerTimer) {
      workerTimer.postMessage({
        remindMeWhen,
        // remindMeWhen: dummyTime, // for test
        startCounter: true,
      });
    }
  };

  const reInitPrayTime = async () => {
    const data = await initialPrayTimeState();
    dispatch({
      data,
      type: PRAY_TIME_ACTIONS.SET_INITIAL,
    });
  };

}

export default useTimerWorker;

