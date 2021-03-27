/* eslint-disable sort-keys */
import prayTimes from '@libraries/prayTimes';
import { getLocationFromStorage } from './location';
import { DATE, text } from '@helpers/index';
import { getCalcMethodeFromStorage } from '@api/calcMethod';
import { INextPrayTime, IPrayTable } from '@interfaces/pray';

export const getPrayTimesByDate = async (date): Promise<{}> => {
  try {
    const calcMethod = await getCalcMethodeFromStorage();
    const location = await getLocationFromStorage();

    if (calcMethod.data.value === '')
      throw new Error('No Data in Local Storage');

    prayTimes.setMethod(calcMethod.data?.value);
    const times = prayTimes.getTimes(date, location.data?.coords || [], +7);

    // return dummyGetPrayTimeByDate();
    return times;
  } catch (error) {
    return error;
  }
};
export const dummyGetPrayTimeByDate = () => {
  const h = '23';
  const m = (i: number) => {
    const min = 2;
    const calt = min + i;
    return calt < 10 ? `0${calt}` : calt;
  };

  return {
    imsak: `${h}:${m(0)}`,
    fajr: `${h}:${m(1)}`,
    sunrise: `${h}:${m(2)}`,
    dhuhr: `${h}:${m(3)}`,
    asr: `${h}:${m(4)}`,
    sunset: `${h}:${m(5)}`,
    maghrib: `${h}:${m(6)}`,
    isha: `${h}:${m(7)}`,
    midnight: `${h}:${m(8)}`,
  };
};

export const getNextPrayTime = async (): Promise<INextPrayTime> => {
  try {
    const today = DATE.today();
    const tomorrow = DATE.addDay(1, true);
    const now = DATE.now();

    const todayPrayTime = await getPrayTimesByDate(today);
    const tomorrowPrayTime = await getPrayTimesByDate(tomorrow);
    let nextPrayTime = {};
    let useTomorrowPrayTime = false;
    const allKey = Object.keys(todayPrayTime);
    allKey.forEach((key, index) => {
      if (!todayPrayTime[allKey[index + 1]]) return;
      const before = DATE.hourToTimestamp(todayPrayTime[key]);
      const after = DATE.hourToTimestamp(todayPrayTime[allKey[index + 1]]);
      if (checkIsValueBetween(now, before, after))
        nextPrayTime = {[allKey[index + 1]]: todayPrayTime[allKey[index + 1]]};
    });
    if (!Object.keys(nextPrayTime).length) {
      nextPrayTime = {'imsak': tomorrowPrayTime['imsak']};
      useTomorrowPrayTime = true;
    }
    const key: any = Object.keys(nextPrayTime);
    const value = DATE.hourToTimestamp(nextPrayTime[key], useTomorrowPrayTime);
    return {
      time: nextPrayTime[key],
      title: text.capitalize(key[0]),
      value,
    };
  } catch (error) {
    return {
      time: '00:00',
      title: '-----',
      value: 0,
    };
  }
};

export const getSchedulePrayByDate = async (date, isToday): Promise<IPrayTable> => {

  const todayPrayTime = await getPrayTimesByDate(date);
  const nextPrayTime = await getNextPrayTime();

  const allKey = Object.keys(todayPrayTime);
  const schedule = allKey.map((key) => {
    const isActive = nextPrayTime.time === todayPrayTime[key] && isToday;
    return {
      isActive: isActive,
      time: todayPrayTime[key],
      title: prayTitle(key),
    };
  });

  const selectedDate = DATE.format('dddd, D MMMM YYYY', date);

  return {
    schedule,
    selectedDate,
  };
};

const checkIsValueBetween = (now, before, after) => {
  return before <= now && now < after;
};

export const getTimeleftToPray = (nextPrayTime: INextPrayTime) => {
  let unixPrayTime = DATE.hourToTimestamp(nextPrayTime.time);
  let timeLeft: string = DATE.howLongFromNow(unixPrayTime);
  if (timeLeft.includes('lalu')) {
    unixPrayTime = unixPrayTime + 24 * 3600;
    timeLeft = DATE.howLongFromNow(unixPrayTime);
  }
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

export const prayTitle = (key)=>{
  const title = {
    'asr':'Asar',
    'dhuhr':'Zuhur',
    'fajr':'Subuh',
    'imsak':'Imsak',
    'isha':'Isya',
    'maghrib':'Magrib',
    'sunrise':'Dhuha',
  };

  return title[key];
};
