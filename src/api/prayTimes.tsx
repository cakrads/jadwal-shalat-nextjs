import prayTimes from '@libraries/prayTimes';
import { getLocationFromStorage } from './location';
import { DATE, text } from '@helpers/index';
import { getCalcMethodeFromStorage } from '@api/calcMethod';
import { INextPrayTime, ITableSalat } from '@interfaces/pray';

export const getPrayTimesByDate = async (date): Promise<{}> => {
  try {
    const calcMethod = await getCalcMethodeFromStorage();
    const location = await getLocationFromStorage();

    if (calcMethod.data.value === '')
      throw new Error('No Data in Local Storage');

    prayTimes.setMethod(calcMethod.data?.value);
    const times = prayTimes.getTimes(date, location.data?.coords || [], +7);

    return times;
  } catch (error) {
    return error;
  }
};

export const getNextPrayTime = async (): Promise<INextPrayTime> => {
  try {
    const today = DATE.today();
    const tomorrow = DATE.addDay(1, false);
    const now = DATE.now();

    const todayPrayTime = await getPrayTimesByDate(today);
    const tomorrowPrayTime = await getPrayTimesByDate(tomorrow);

    let nextPrayTime = {};
    const allKey = Object.keys(todayPrayTime);
    allKey.forEach((key, index) => {
      if (!todayPrayTime[allKey[index + 1]]) return;
      const before = DATE.hourToTimestamp(todayPrayTime[key]);
      const after = DATE.hourToTimestamp(todayPrayTime[allKey[index + 1]]);
      if (checkIsValueBetween(now, before, after))
        nextPrayTime = {[allKey[index + 1]]: todayPrayTime[allKey[index + 1]]};
    });
    if (!Object.keys(nextPrayTime).length) {
      nextPrayTime = tomorrowPrayTime['subuh'];
    }

    const key: any = Object.keys(nextPrayTime);
    return {
      time: nextPrayTime[key],
      title: text.capitalize(key[0]),
    };
  } catch (error) {
    return {
      time: '00:00',
      title: '-----',
    };
  }
};

export const getSchedulePrayByDate = async (date, isToday): Promise<ITableSalat> => {

  const todayPrayTime = await getPrayTimesByDate(date);
  const nextPrayTime = await getNextPrayTime();

  const allKey = Object.keys(todayPrayTime);
  const schedule = allKey.map((key) => {
    const isActive = nextPrayTime.time === todayPrayTime[key] && isToday;
    return {
      isActive: isActive,
      time: todayPrayTime[key],
      title: text.capitalize(key),
    };
  });

  const selectedDate = DATE.format('dddd, D MMMM YYYY', date);

  return {
    schedule,
    selectedDate,
  };
};

const checkIsValueBetween = (now, before, after) => {
  return before < now && now <= after;
};

export const getTimeleftToPray = (nextPrayTime: INextPrayTime) => {
  const unixPrayTime = DATE.hourToTimestamp(nextPrayTime.time);
  const timeLeft: string = DATE.howLongFromNow(unixPrayTime);
  const tmp = timeLeft.split(' ');
  return `${tmp[1]} ${tmp[2] || ''} menuju ${nextPrayTime.title}`;
};

export const initialPrayTimeState = async () => {

  const calcMethod = await getCalcMethodeFromStorage();
  const location = await getLocationFromStorage();
  const nextPrayTime = await getNextPrayTime();

  return {
    calcMethod: calcMethod.data,
    location: location.data,
    nextPrayTime,
  };
};
