import React, { useReducer } from 'react';
import Reducer, { initailGlobalState } from './reducers/index';
import { IGlobalContext } from '@interfaces/config';

const initUseContext = { dispatch: ()=> ({ }), globalState: initailGlobalState };

export const AppContext = React.createContext<IGlobalContext>(initUseContext);

const Store = ({children})=> {

  const [state, dispatch] = useReducer(Reducer, initailGlobalState);

  React.useEffect(() => {
    console.log('globalState', state);
  }, [state]);

  return (
    <AppContext.Provider value={{ dispatch, globalState: state }}>
      {children}
    </AppContext.Provider>
  );

};

export default Store;
