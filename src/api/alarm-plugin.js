/* eslint-disable no-undef */
export const initAlarm = (oneWeekPrayTime) => {
  const payload = {
    action: 'SET_ALARM',
    data: oneWeekPrayTime,
  };
  sendToExtension(payload);
};

const sendToExtension = (payload) => {
  const port = chrome.extension.connect({ name: 'jadwalShalatkuPopupCommunication' });
  port.postMessage(payload);
};

// only work in manifest v3
// const sendToSW = (payload) => {
//   try {
//     navigator.serviceWorker.controller.postMessage(payload);
//   } catch (error) {
//     sendToBG(payload);
//   }
// };
