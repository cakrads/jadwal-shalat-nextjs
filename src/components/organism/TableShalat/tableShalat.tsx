import Card from '@components/atomic/Card';
import ListItem from '@components/molecules/ListItem';
import Icon from '@components/atomic/Icon';
import { ITableSalat } from '@interfaces/pray';

const TableSalat = (props: ITableSalat): JSX.Element => {

  const { dateIndex, selectedDate, schedule, onChangeIndex } = props;

  const ChevronLeft = ()=> {
    const isDisable = !dateIndex;

    return (
      <button
        className="ml-5 disabled:opacity-50 "
        disabled={isDisable}
        onClick={onChangeIndex('dec')}
      >
        <Icon color={isDisable ? 'text-gray-500' : 'text-black'} icon="CHEVRON_LEFT"/>
      </button>
    );
  };

  const ChevronRoght = ()=> {
    return (
      <button className="mr-5" onClick={onChangeIndex('add')}>
        <Icon icon="CHEVRON_RIGHT" />
      </button>
    );
  };

  return (
    <Card className="mb-5">
      <header className="flex justify-between text-center border-b border-gray-50 -mx-5 pb-2">
        <ChevronLeft />
        <div>
          <b className="block">Jadwal Shalat</b>
          <span className="text-xs">{selectedDate}</span>
        </div>
        <ChevronRoght />
      </header>
      <main className="-mx-5 mb-2">
        {schedule.map((item, index) => {
          return (
            <ListItem active={item.isActive} key={index}>
              <div>{item.title}</div><div>{item.time}</div>
            </ListItem>
          );
        })}
      </main>
    </Card>
  );
};

export default TableSalat;

TableSalat.defaultProps = {
  dateIndex: 0,
  onChangeIndex: () => () => (true),
  schedule: [],
  selectedDate: '----',
};
