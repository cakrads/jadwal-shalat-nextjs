import React, { useState, useContext } from 'react';
import { AppContext } from '@context/store';
import { PRAY_TIME_ACTIONS, CONFIG_ACTIONS } from '@context/actionsConst';
import { getLocationFromGeoLocation } from '@api/location';
import { initialPrayTimeState } from '@api/prayTimes';


export default function useAction() {
  const { globalState, dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const { prayTime } = globalState;
  const { location } = prayTime;
  const locationTitle = location?.title || '';

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
      if (locationTitle !== '') {
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

  const _changeLocation = () => {
    dispatch({
      data: {},
      type: CONFIG_ACTIONS.SET_BOTTOM_SHEET.SHOW_LOCATION_SETTING,
    });
  };

  const isLocationSet = () => {
    return locationTitle !== '' && location?.coords?.length > 0;
  };

  return {
    _changeLocation,
    _chooseLocation,
    isLoading,
    isLocationSet: isLocationSet(),
    locationTitle,
  };
}
