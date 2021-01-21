import prayTimes from '@libraries/prayTimes';
import { date, text } from '@helpers/index';
import { INextPrayTime } from '@interfaces/pray';

export const getPrayTimesByDate = (date): {} => {
  prayTimes.setMethod('KJP');
  const times = prayTimes.getTimes(date, [-6.564910502033864, 106.72985166512684], +7);
  return times;
};

export const getNextPrayTime = (): INextPrayTime => {
  const today = date.today();
  const tomorrow = date.addDay(1);
  const now = date.now();

  const todayPrayTime = getPrayTimesByDate(today);
  const tomorrowPrayTime = getPrayTimesByDate(tomorrow);

  let nextPrayTime = {};
  const allKey = Object.keys(todayPrayTime);
  allKey.forEach((key, index) => {
    if (!todayPrayTime[allKey[index + 1]]) return;
    const before = date.hourToTimestamp(todayPrayTime[key]);
    const after = date.hourToTimestamp(todayPrayTime[allKey[index + 1]]);
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

const checkIsValueBetween = (now, before, after) => {
  return before < now && now <= after;
};

export const getTimeleftToPray = (nextPrayTime: INextPrayTime) => {
  const unixPrayTime = date.hourToTimestamp(nextPrayTime.time);
  const timeLeft: string = date.howLongFromNow(unixPrayTime);
  const tmp = timeLeft.split(' ');
  return `${tmp[1]} ${tmp[2]} menuju ${nextPrayTime.title}`;
};
