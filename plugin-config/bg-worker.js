/* eslint-disable no-console */
/* eslint-disable no-undef */
// Manifest V2
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

chrome.alarms.onAlarm.addListener(function ({ name }) {
  const notifData = remindPrayTime(name);
  showNotification(notifData);
});

chrome.notifications.onClicked.addListener(function () {
  ring('stop');
});

chrome.notifications.onButtonClicked.addListener(function () {
  ring('stop');
});


const showNotification = (data) => {
  chrome.notifications.create(data.title, {
    buttons: [
      { 'title': 'Segera Shalat', },
      { 'title': 'Mute', }
    ],
    'iconUrl': './images/android-icon-144x144.png',
    'message': data.message,
    'silent': true,
    'title': data.title,
    'type': 'basic',
  }, function () { ring(); });
};

const adzanAudio = new Audio();
adzanAudio.src = 'sounds/mecca.mp3';

const ring = (action = 'play') => {
  if (action === 'stop') {
    adzanAudio.load();
  } else {
    adzanAudio.play();
  }
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
