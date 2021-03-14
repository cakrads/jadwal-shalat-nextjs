import { useEffect, useState, useContext } from 'react';
import WebWorker from '@helpers/workerSetup';
import worker from '@libraries/workerTimer';
import { initialPrayTimeState } from '@api/prayTimes';
import { AppContext } from '@context/store';
import { PRAY_TIME_ACTIONS } from '@context/actionsConst';


export const useTimerWorker = ()=> {
  const [workerTimer, setWorkerTimer]: any = useState('');
  const { globalState, dispatch } = useContext(AppContext);
  const { prayTime } = globalState;
  const [nextPrayTime, setNextPrayTime]: any = useState(prayTime.nextPrayTime.value);
  const [startAlarm, setStartAlarm]: any = useState(false);

  useEffect(() => {
    if (typeof (WebWorker) !== 'undefined') {
      if (workerTimer === '') {
        setWorkerTimer(new WebWorker(worker));
      }
    }
  }, []);

  useEffect(() => {
    _sendTimeToWorker();
  }, [nextPrayTime]);

  useEffect(() => {
    setNextPrayTime(prayTime.nextPrayTime.value);
  }, [prayTime]);

  useEffect(() => {
    if (workerTimer) {
      workerTimer.addEventListener('message', ({ data }) => {
        // console.log('receive from worker');
        if (data.remindNow) {
          setStartAlarm(true);
          reInitPrayTime();
        }
      });
    }
  }, [workerTimer]);

  const _sendTimeToWorker = () => {
    if (workerTimer) {
      workerTimer.postMessage({
        remindMeWhen: nextPrayTime,
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

  return {
    setStartAlarm,
    startAlarm,
    workerTimer
  };
};
