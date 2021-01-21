import { ReactNode } from 'react';
import { IMetaSEO } from './metaSEO';

export interface IMainLayout {
  children?: ReactNode,
  metSEO: IMetaSEO
}
