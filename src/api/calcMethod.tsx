import { STORAGE } from '@helpers/index';
import CALC_MEHTHOD from './../database/calcution-method.json';
import { ICalcMethod } from '@interfaces/pray';

interface IGetLocation {
  data: ICalcMethod,
  message: string,
  success: boolean,
}

export const getAllCalcMethod = ()=> {
  return CALC_MEHTHOD;
};

export const getCalcMethodeFromStorage = async (): Promise<IGetLocation> => {
  let calcMethod: ICalcMethod = { title: '', value: '' };
  const message = '';
  const status = false;

  const data: any = await STORAGE.getStorage(STORAGE.DB.CALC_MEHTHOD);

  if (!data || data === '') {
    const defaultMethod = CALC_MEHTHOD[0];
    calcMethod = defaultMethod;
    await setCalcMethod(defaultMethod);
  } else {
    calcMethod = data;
  }

  return {
    data: calcMethod,
    message: message,
    success: status,
  };
};

export const setCalcMethod = async (value)=> {
  return await STORAGE.setStorage(STORAGE.DB.CALC_MEHTHOD, value);
};
