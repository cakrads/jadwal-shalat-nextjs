import React, { useReducer } from 'react';
import Reducer, { initailGlobalState } from './reducers/index';

export const AppContext = React.createContext([]);

const Store = ({children})=> {

  const [state, dispatch] = useReducer(Reducer, initailGlobalState);

  React.useEffect(()=>{
    console.log('globalState', state);
  }, [state]);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );

};

export default Store;
