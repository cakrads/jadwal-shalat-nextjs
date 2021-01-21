import dayjs from 'dayjs';

// Locales
import 'dayjs/locale/pt';
import localeId from 'dayjs/locale/id';

// Plugins
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

// Load plugins
dayjs.extend(advancedFormat);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

dayjs.locale('id');

export const today = () => {
  return new Date();
};

export const now = () => {
  return dayjs(today()).unix();
};

export const addDay = (value) => {
  return dayjs(today()).add(value, 'day');
};

export const format = (value, date: any = today()) => {
  if (typeof date === 'number' && date < 9999999999)
    date *= 1000;

  return dayjs(date).locale(localeId).format(value);
};

export const hourToTimestamp = (time) => {
  const date = dayjs(today()).format('YYYY-MM-DD');
  return dayjs(`${date} ${time}:00`).unix();
};

export const howLongFromNow = (date) => {
  if (typeof date === 'number' && date < 9999999999)
    date *= 1000;

  return dayjs(date).locale(localeId).fromNow();
};
