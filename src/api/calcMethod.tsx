import { STORAGE } from '@helpers/index';
import CALC_MEHTHOD from './../database/calcution-method.json';

export const getAllCalcMethod = ()=> {
  return CALC_MEHTHOD;
};

export const getCalcMethod = async (): Promise<any> => {
  const data: any = await STORAGE.getStorage(STORAGE.DB.CALC_MEHTHOD);
  const defaultMethod = CALC_MEHTHOD[0].text;
  let calcMethod = '';

  if (!data || data === '') {
    calcMethod = defaultMethod;
    setCalcMethod(defaultMethod);
  } else {
    calcMethod = data;
  }

  return calcMethod;
};

export const setCalcMethod = async (value)=> {
  return await STORAGE.setStorage(STORAGE.DB.CALC_MEHTHOD, value);
};
