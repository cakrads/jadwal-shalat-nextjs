export const generateNotif = (nowPrayTitle = '') => {
  return {
    body : 'Ayo segera shalat.',
    title : `Telah Memasuki Waktu ${nowPrayTitle}`
  };
};
