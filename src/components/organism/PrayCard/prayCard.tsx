import Card from '@components/atomic/Card';
import { IPrayCard } from '@interfaces/pray';

const PrayCard = (props: IPrayCard): JSX.Element => {
  return (
    <Card className="mb-5">
      <header className="flex justify-between mb-3">
        <div className="text-sm">{props.today}</div>
        <div className="text-sm text-right">{props.todayHijr}</div>
      </header>
      <main className="text-center mb-8">
        <b>{props.pray?.title}</b><br />
        <b className="text-4xl">{props.pray?.time}</b><br />
        <span className="text-sm text-gray-700">{props.timeLeft}</span>
      </main>
      <footer>
        <div className="text-xs text-gray-700">
          Menurut: <br />
          {props.calcMethod.title}
          {/* · <a href="/ubah">Ubah</a> */}
        </div>
      </footer>
    </Card>
  );
};

export default PrayCard;

PrayCard.defaultProps = {
  calcMethod: {},
  pray: {
    time: '00:00',
    timeLeft: '',
    title: '-----',
  },
  today: '',
  todayHijr: '',
};
