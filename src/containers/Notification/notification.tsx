import useTimerWorker from './hooks/useTimerWorker';
import useAudio from './hooks/useAudio';
import useNotification from './hooks/useNotification';
import Button from '@components/atomic/Button';
import { generateNotif } from './utils';

const Notification = (): JSX.Element => {
  if (typeof window === 'undefined')
    return <></>;

  const { startAudio }: any = useAudio('./sounds/mecca.mp3');
  const { _askPermission, _showNotification, isGranted, } = useNotification();

  const startNotification = (nowPrayTitle = '') => {
    const { audioStart } = startAudio();
    const { title, body } = generateNotif(nowPrayTitle);
    _showNotification(title, { body, silent: audioStart });
  };

  useTimerWorker({ onExecute: startNotification, });

  if (isGranted) return <></>;

  return (
    <Button block className="mb-5" onClick={_askPermission}> INGATKAN SAYA! </Button>
  );
};

export default Notification;
