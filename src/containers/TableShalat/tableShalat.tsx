import React from 'react';
import TableShalat from '@components/organism/TableShalat';
import { ITableSalat } from '@interfaces/pray';
import { DATE } from '@helpers/index';
import { getSchedulePrayByDate } from '@api/prayTimes';

const Component = (): JSX.Element => {

  const [dateIndex, setDateIndex] = React.useState(0);
  const [data, setData] = React.useState<ITableSalat>({schedule:[], selectedDate: '', });

  React.useEffect(() => {
    getData(dateIndex);
  }, [dateIndex]);

  const getData = async (value) => {
    const usedDate = DATE.addDay(value);
    const data: ITableSalat = await getSchedulePrayByDate(usedDate);
    setData(data);
  };

  const changeIndex = (index) => () => {
    setDateIndex(index);
  };

  const generateProps = {
    ...data,
    onChangeIndex: changeIndex
  };

  return (
    <TableShalat {...generateProps} />
  );
};

export default Component;
