import { STORAGE } from '@helpers/index';
import CITIES from './../database/cities-indonesia.json';
import { ILocation } from '@interfaces/pray';

interface IGetLocation {
  data: ILocation,
  success: boolean,
  message: string,
}

export const getLocationFromStorage = async (): Promise<IGetLocation> => {
  const data: any = await STORAGE.getStorage(STORAGE.DB.LOCATION);
  const status = data && data !== '';

  return {
    data: {
      coords: data?.coords || [],
      title: data?.title || '',
    },
    message: status ? 'sukses' : 'Silahkan Klik "PILIH LOKASI ANDA"',
    success: status,
  };
};

export const getLocationFromGeoLocation = async (): Promise<IGetLocation>=> {
  let location: ILocation = { coords: [0, 0], title: ''};
  let status = false;
  let message = '';

  if (navigator.geolocation) {
    try {
      const resGeoLocation: any = await getGeoLocation();
      const response = await handlePosition(resGeoLocation);
      if (!response?.success) throw response;
      location = response.data;
      status = true;
      message = 'Berhasil Menemukan Alamat Anda';
    } catch (error) {
      message = error.message;
    }
  } else {
    message = 'Browser Anda tidak mendukung pencarian Lokasi Otomatis. Silahkan Lakukan Secara Manual, Terimakasih';
  }

  return {
    data: location,
    message: message,
    success: status,
  };
};

export const getGeoLocation = (options = {}) => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        resolve,
        ({code, message}) => {
          let tmpMsg = '';
          if (message === 'User denied Geolocation')
            tmpMsg = 'Anda me-NON AKTFIK-kan fitur Pencarian Lokasi, ' +
              'Silahkan Mengaktifkan Fitur Tersebut atau Lakukan Pencarian Lokasi Secara Manual, Terimakasih';
          else
            tmpMsg = message;
          reject(Object.assign(new Error(tmpMsg), {code, name: 'PositionError'}));
        },
        options);
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};

export const handlePosition = async (position): Promise<IGetLocation> => {
  let location: ILocation = {coords:[0, 0], title:''};
  let message = '';
  let status = false;

  try {
    const coords: [any, any] = [position.coords.latitude, position.coords.longitude];
    const response = await getCityFromCoords(coords);
    if (!response.success) throw response;

    const city = response.data;
    location = {
      coords: coords,
      title: city,
    };
    await STORAGE.setStorage(STORAGE.DB.LOCATION, location);
    status = true;
    message = 'sukses';
  } catch (error) {
    message = error.message;
  }

  return {
    data: location,
    message: message,
    success: status,
  };
};

const getCityFromCoords = async ([lat, long]) => {
  let city = '';
  let message = '';
  try {
    const data = CITIES;
    const distances = data.map(item => {
      return getDistanceBetweenPointsNew(lat, long, item.latitude, item.longitude, 'Km');
    });
    const nearestDistance = Math.min(...distances);
    const indexMin = distances.indexOf(nearestDistance);

    city = data[indexMin].city;
    message = 'sukses';
  } catch (error) {
    message = error.message;
  }
  return {
    data: city,
    message,
    success: city !== '',
  };

  function deg2rad(degrees) {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }

  function rad2deg(radians) {
    const pi = Math.PI;
    return radians * (180 / pi);
  }

  function getDistanceBetweenPointsNew(latitude1, longitude1, latitude2, longitude2, unit = 'Mi') {
    const theta = longitude1 - longitude2;
    let distance =
      Math.sin(deg2rad(latitude1)) * Math.sin(deg2rad(latitude2)) +
      Math.cos(deg2rad(latitude1)) * Math.cos(deg2rad(latitude2)) * Math.cos(deg2rad(theta));

    distance = Math.acos(distance);
    distance = rad2deg(distance);
    distance = distance * 60 * 1.1515;

    switch (unit) {
      case 'Mi': break;
      case 'Km': distance = distance * 1.609344;
    }
    return (Math.round(distance, 2));
  }
};
