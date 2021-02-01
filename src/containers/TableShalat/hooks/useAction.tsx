import React, { useContext } from 'react';
import { AppContext } from '@context/store';
import { ITableSalat } from '@interfaces/pray';
import { getSchedulePrayByDate } from '@api/prayTimes';
import { DATE } from '@helpers/index';


export default function useAction() {
  const [ globalState ] = useContext(AppContext);
  const { prayTime = {} } = globalState;

  const [dateIndex, setDateIndex] = React.useState(0);
  const [data, setData] = React.useState<ITableSalat>({schedule:[], selectedDate: '', });

  React.useEffect(() => {
    if (dateIndex === 0)
      getData(0);
    else
      setDateIndex(0);

  }, [prayTime]);

  React.useEffect(() => {
    getData(dateIndex);
  }, [dateIndex]);

  const getData = async (value) => {
    const usedDate = DATE.addDay(value);
    const isToday = !dateIndex;
    const data: ITableSalat = await getSchedulePrayByDate(usedDate, isToday);
    setData(data);
  };

  const _changeIndex = (type) => () => {
    const types = {
      'add': dateIndex + 1,
      'dec': dateIndex - 1,
    };
    setDateIndex(types[type]);
  };

  return {
    ...data,
    dateIndex,
    onChangeIndex: _changeIndex,
  };
}
