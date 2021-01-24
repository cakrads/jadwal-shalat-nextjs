import CardShalat from '@components/organism/CardShalat';
import { ICardShalat } from '@interfaces/pray';
import { DATE, hijrDate } from '@helpers/index';

const Component = (props): JSX.Element => {

  const { nextPrayTime, timeleftToPray } = props;

  const calcMethod = 'Kemenag Jakarta Pusat, Indonesia';
  const today = DATE.format('dddd, D MMMM YYYY');
  const todayHijr = hijrDate.writeIslamicDate();

  const generateProps: ICardShalat = {
    calcMethod,
    shalat: nextPrayTime,
    timeLeft: timeleftToPray,
    today,
    todayHijr,
  };

  return (
    <CardShalat {...generateProps}/>
  );
};

export default Component;
