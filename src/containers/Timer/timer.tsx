import { useEffect } from 'react';
import { useAudio } from './hooks/useAudio';
import { useTimerWorker } from './hooks/useTimerWorker';

const Timer = (): JSX.Element => {
  if (typeof window === 'undefined')
    return <></>;

  const { playing, startAudio }: any = useAudio('./Alarm.mp3');
  const { startAlarm, setStartAlarm } = useTimerWorker();

  useEffect(() => {
    if (startAlarm)
      document.getElementById('button').click();
      // or
      // startAudio();
  }, [startAlarm]);

  useEffect(() => {
    if (!playing) {
      setStartAlarm(false);
    }
  }, [playing]);


  return (
    <div>
      <button id="button" onClick={startAudio}>{playing ? 'Playing' : 'Play'}</button>
    </div>
  );
};

export default Timer;
