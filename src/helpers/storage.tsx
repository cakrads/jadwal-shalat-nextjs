export const DB = {
  CALC_MEHTHOD: '_calcMethod',
  LOCATION: '_location',
};



export const setStorage = (field, value, isBrowser = true)=>{

  if (typeof window !== 'undefined' && isBrowser) {
    localStorage.setItem(field, JSON.stringify(value));
    return { success: true };
  } else {
    return '';
  }

};

export const getStorage = async (field, isBrowser = true) => {

  if (typeof window !== 'undefined' && isBrowser) {
    return JSON.parse(localStorage.getItem(field));
  } else {
    // chrome.storage.sync.get(['calcMethod', 'coords'], ({ calcMethod, coords }) => {
    //   return {
    //     calcMethod,
    //     coords,
    //   };
    // });
    return '';
  }

};
