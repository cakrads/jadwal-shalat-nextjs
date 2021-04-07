/* eslint-disable no-console */
/* eslint-disable no-undef */
// Manifest V3
// V3 use service worker, we can't load audio here
'use strict';

chrome.extension.onConnect.addListener(function (port) {

  if (port.name === 'jadwalShalatkuPopupCommunication') {
    port.onMessage.addListener(function (payload) {
      const action = payload?.action || '';
      const data = payload?.data || {};
      switch (action) {
        case 'SET_ALARM':
          _setMultiAlarm(data);
          break;
        default:
          break;
      }
    });
  }

});
// only work in v3
// self.addEventListener('message', event => {
// });

chrome.alarms.onAlarm.addListener(function ({ name }) {
  const notifData = remindPrayTime(name);
  showNotification(notifData);
});

const showNotification = (data) => {
  self.registration.showNotification(data.title, {
    body: data.message,
    icon: './images/android-icon-144x144.png',
  });
};


const _setMultiAlarm = (schedule) => {
  clearAlarm();

  schedule.map((inDay) => {
    inDay.map(({ title, date, time }) => {
      if (time * 1000 > Date.now())
        createAlarm(`${title} | ${date}`, time * 1000);
    });
  });
  chrome.alarms.getAll(alarms => {
    console.log(alarms);
  });
};

const createAlarm = (alarmName, when) => {
  chrome.alarms.create(alarmName, { when });
};

const clearAlarm = () => {
  chrome.alarms.clearAll();
};

const remindPrayTime = (title) => {
  const newTitle = title.split('|')[0];

  if (newTitle === 'Matahari Terbit ' || newTitle === 'Imsak ') {
    return {
      message: 'Bismillah, Ya Allah, dengan kehendak-Mu, sesungguhnya hamba memohon kelancaran atas kegiatan-kegiatan yang hamba lakukan hari ini ya Allah, Ridhoilah kegiatan-kegiatan hamba y Allah, Aamiin',
      title: newTitle,
    };
  }

  return {
    message: 'Sudah Masuk waktu shalat ' + newTitle + '. Ayo segera shalat.',
    title: `Memasuki Waktu Shalat ${newTitle}`,
  };
};
