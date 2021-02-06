import React, { useState, useContext } from 'react';
import { AppContext } from '@context/store';
import { PRAY_TIME_ACTIONS } from '@context/actionsConst';
import { getLocationFromGeoLocation } from '@api/location';
import { initialPrayTimeState } from '@api/prayTimes';


export default function useAction() {
  const { globalState, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const { prayTime } = globalState;
  const { location = {} } = prayTime;

  React.useEffect(()=> {
    initPrayTime();
  }, []);

  const initPrayTime = async ()=> {
    const data = await initialPrayTimeState();
    dispatch({
      data,
      type: PRAY_TIME_ACTIONS.SET_INITIAL,
    });
  };

  const _chooseLocation = async () => {
    setIsLoading(true);

    try {
      if (location?.title === '' || !location?.title) {
        const response: any = await getLocationFromGeoLocation();
        await initPrayTime();
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    _chooseLocation,
    isLoading,
    location,
  };
}
