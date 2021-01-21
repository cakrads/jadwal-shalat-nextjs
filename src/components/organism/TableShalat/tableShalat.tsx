import Card from '@components/atomic/Card';
import ListItem from '@components/molecules/ListItem';

const TableSalat = (): JSX.Element => {
  return (
    <Card className="mb-5">
      <header className="text-center border-b border-gray-50 -mx-5 pb-2">
        <b className="block">Jadwal Shalat</b>
        <span className="text-xs">Senin, 1 Januari 2021</span>
      </header>
      <main className="-mx-5 mb-2">
        <ListItem>
          <div>Fajr</div><div>04:21</div>
        </ListItem>
        <ListItem active>
          <div>Sunrise</div><div>05:46</div>
        </ListItem>
        <ListItem>
          <div>Dhuhr</div><div>12:01</div>
        </ListItem>
        <ListItem>
          <div>Asr</div><div>15:26</div>
        </ListItem>
        <ListItem>
          <div>Maghrib</div><div>18:15</div>
        </ListItem>
        <ListItem>
          <div>Isha</div><div>19:30</div>
        </ListItem>
        <ListItem>
          <div>Midnight</div><div>00:01</div>
        </ListItem>
      </main>
    </Card>
  );
};

export default TableSalat;
