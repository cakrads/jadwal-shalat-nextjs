export const DB = {
  CALC_MEHTHOD: '_calcMethod',
  LOCATION: '_location',
};



export const setStorage = (field, value, mode = 'window')=>{

  if (mode === 'window') {
    localStorage.setItem(field, JSON.stringify(value));
    return {success:true};
  } else {
    return '';
  }

};

export const getStorage = async (field, mode = 'window') => {

  if (mode === 'window') {
    return JSON.parse(localStorage.getItem(field));
  } else {
    // chrome.storage.sync.get(['calcMethod', 'coords'], ({ calcMethod, coords }) => {
    //   return {
    //     calcMethod,
    //     coords,
    //   };
    // });
    return localStorage.getItem(field);
  }

};
