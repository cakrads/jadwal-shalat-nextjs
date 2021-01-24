import Card from '@components/atomic/Card';
import ListItem from '@components/molecules/ListItem';
import { ITableSalat } from '@interfaces/pray';


const TableSalat = ({selectedDate, schedule}: ITableSalat): JSX.Element => {
  return (
    <Card className="mb-5">
      <header className="text-center border-b border-gray-50 -mx-5 pb-2">
        <b className="block">Jadwal Shalat</b>
        <span className="text-xs">{selectedDate}</span>
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
  schedule: [],
  today: '----',
};
