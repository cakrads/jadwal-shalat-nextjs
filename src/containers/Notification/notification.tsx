import useTimerWorker from './hooks/useTimerWorker';
import useAudio from './hooks/useAudio';
import useNotification from './hooks/useNotification';
import Button from '@components/atomic/Button';
import { generateNotif } from './utils';

const Notification = (): JSX.Element => {
  if (typeof window === 'undefined')
    return <></>;

  const { startAudio }: any = useAudio('./Alarm.mp3');
  const { _askPermission, _showNotification, isGranted, } = useNotification();

  const startNotification = (nowPrayTitle = '') => {
    const { audioStart } = startAudio();
    const { title, body } = generateNotif(nowPrayTitle);
    _showNotification(title, { body, silent: audioStart });
  };

  useTimerWorker({ onExecute: startNotification, });

  return (
    <>
      <Button block hidden={isGranted} onClick={_askPermission}> Nyalakan Notifikasi </Button>
      {/* <Button block onClick={startNotification}> Test Send Notifikasi </Button> */}
    </>
  );
};

export default Notification;
