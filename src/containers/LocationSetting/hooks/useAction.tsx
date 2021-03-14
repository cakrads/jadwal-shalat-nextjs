import { useEffect, useContext, useState } from 'react';
import { AppContext } from '@context/store';
import { initialPrayTimeState } from '@api/prayTimes';
import { getLocationFromGeoLocation, setDataCoords, getOptionAllCity } from '@api/location';
import { PRAY_TIME_ACTIONS, CONFIG_ACTIONS } from '@context/actionsConst';

function useAction() {
  const { globalState, dispatch } = useContext(AppContext);
  const { prayTime } = globalState;
  const countyOptions = getOptionAllCity();

  const [isLoading, setIsLoading] = useState(false);
  const [newCity, setNewCity] = useState('');

  useEffect(() => {
    setNewCity(prayTime.location.title);
  }, []);

  const initPrayTime = async ()=> {
    const data = await initialPrayTimeState();
    dispatch({
      data,
      type: PRAY_TIME_ACTIONS.SET_INITIAL,
    });
  };

  const _autoFindLocation = async ()=> {
    setIsLoading(true);

    try {
      const response: any = await getLocationFromGeoLocation();
      await initPrayTime();
      alert(response.message);
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await setDataCoords(newCity);
      initPrayTime();
      alert(`Data Berhasil Disimpan`);
      dispatch({
        data: {},
        type: CONFIG_ACTIONS.SET_BOTTOM_SHEET.HIDE_BOTTOM_SHEET,
      });
    } catch (error) {
      alert(`Terjadi Kesalahan ${error.message}`);
    }
  };

  return {
    _autoFindLocation,
    countyOptions,
    isLoading,
    newCity,
    onSubmit,
    setIsLoading,
    setNewCity,
  };
}

export default useAction;
