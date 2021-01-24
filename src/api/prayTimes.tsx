import prayTimes from '@libraries/prayTimes';
import { DATE, text } from '@helpers/index';
import { INextPrayTime, ITableSalat } from '@interfaces/pray';

export const getPrayTimesByDate = (date): {} => {
  prayTimes.setMethod('KJP');
  const times = prayTimes.getTimes(date, [-6.564910502033864, 106.72985166512684], +7);
  return times;
};

export const getNextPrayTime = (): INextPrayTime => {
  const today = DATE.today();
  const tomorrow = DATE.addDay(1, false);
  const now = DATE.now();

  const todayPrayTime = getPrayTimesByDate(today);
  const tomorrowPrayTime = getPrayTimesByDate(tomorrow);

  let nextPrayTime = {};
  const allKey = Object.keys(todayPrayTime);
  allKey.forEach((key, index) => {
    if (!todayPrayTime[allKey[index + 1]]) return;
    const before = DATE.hourToTimestamp(todayPrayTime[key]);
    const after = DATE.hourToTimestamp(todayPrayTime[allKey[index + 1]]);
    if (checkIsValueBetween(now, before, after))
      nextPrayTime = {[allKey[index + 1]]: todayPrayTime[allKey[index + 1]]};
  });
  if (!Object.keys(nextPrayTime).length)
    nextPrayTime = tomorrowPrayTime['subuh'];

  const key: any = Object.keys(nextPrayTime);
  return {
    time: nextPrayTime[key],
    title: text.capitalize(key[0]),
  };
};

export const getSchedulePrayByDate = (date): ITableSalat => {

  const todayPrayTime = getPrayTimesByDate(date);
  const nextPrayTime = getNextPrayTime();

  const allKey = Object.keys(todayPrayTime);
  const schedule = allKey.map((key) => {
    const isActive = nextPrayTime.time === todayPrayTime[key];
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
  return `${tmp[1]} ${tmp[2]} menuju ${nextPrayTime.title}`;
};
