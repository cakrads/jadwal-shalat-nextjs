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
    const data: ITableSalat = await getSchedulePrayByDate(usedDate);
    setData(data);
  };

  const _changeIndex = (index) => () => {
    setDateIndex(index);
  };

  return {
    _changeIndex,
    data,
  };
}
