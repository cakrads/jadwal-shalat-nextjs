import { useEffect, useContext, useState } from 'react';
import { AppContext } from '@context/store';
import { initialPrayTimeState } from '@api/prayTimes';
import { setDataCalcMethod } from '@api/calcMethod';
import { PRAY_TIME_ACTIONS } from '@context/actionsConst';

export default function useAction() {
  const { globalState, dispatch } = useContext(AppContext);
  const { config, prayTime } = globalState;

  const [calcMethod, setCalcMethod] = useState('');

  useEffect(() => {
    setCalcMethod(prayTime.calcMethod.value);
  }, []);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await setDataCalcMethod(calcMethod);
      initPrayTime();
      alert(`Data Berhasil Disimpan`);
    } catch (error) {
      alert(`Terjadi Kesalahan ${error.message}`);
    }
  };

  const initPrayTime = async ()=> {
    const data = await initialPrayTimeState();
    dispatch({
      data,
      type: PRAY_TIME_ACTIONS.SET_INITIAL,
    });
  };

  return {
    calcMethod,
    config,
    onSubmit,
    setCalcMethod,
  };
}
