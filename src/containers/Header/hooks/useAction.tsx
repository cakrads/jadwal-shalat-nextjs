import { useContext } from 'react';
import { AppContext } from '@context/store';
import { CONFIG_ACTIONS } from '@context/actionsConst';

function useAction() {
  const { globalState, dispatch } = useContext(AppContext);
  const { config } = globalState;
  const { bottomSheet = '' } = config;

  const _onOpen = () => {
    if (bottomSheet !== '') return '';

    dispatch({
      data: {},
      type: CONFIG_ACTIONS.SET_BOTTOM_SHEET.SHOW_PRAY_SETTING,
    });
  };

  return {
    _onOpen,
  };
}

export default useAction;
