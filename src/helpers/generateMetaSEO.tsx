import { IMetaSEO } from '@interfaces/config';

export const generateMetaSEO = (meta: IMetaSEO) =>{
  const { title, description } = meta;
  return {
    description: description || 'simple structure next ',
    title: title || 'Simple Starter Next JS',
  };
};

export default generateMetaSEO;
