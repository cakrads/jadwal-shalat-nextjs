import { ReactNode, Dispatch } from 'react';
import * as IPray from './pray';

export interface IMainLayout {
  children?: ReactNode,
  metSEO: IMetaSEO
}

export interface IMetaSEO {
  title?: string,
  description?: string,
}

export interface IConfig {
  bottomSheet: string,
}

export interface IPrayTime {
  calcMethod: IPray.ICalcMethod,
  location: IPray.ILocation,
  nextPrayTime: IPray.INextPrayTime
}

export interface IGlobalState {
  config: IConfig,
  prayTime: IPrayTime,
}

export interface IGlobalContext {
  globalState: IGlobalState,
  dispatch: Dispatch<any>,
}
