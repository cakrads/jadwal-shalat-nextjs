import Card from '@components/atomic/Card';
import { ICardShalat } from '@interfaces/pray';

const CardShalat = (props: ICardShalat): JSX.Element => {
  return (
    <Card className="mb-5">
      <header className="flex justify-between mb-3">
        <div className="text-sm">{props.today}</div>
        <div className="text-sm text-right">{props.todayHijr}</div>
      </header>
      <main className="text-center mb-8">
        <b>{props.shalat?.title}</b><br />
        <b className="text-4xl">{props.shalat?.time}</b><br />
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

export default CardShalat;

CardShalat.defaultProps = {
  calcMethod: {},
  shalat: {
    time: '00:00',
    timeLeft: '',
    title: '-----',
  },
  today: '',
  todayHijr: '',
};
