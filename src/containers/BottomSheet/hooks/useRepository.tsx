import { useContext } from 'react';
import { AppContext } from '@context/store';
import { CONFIG_ACTIONS, BOTTOM_SHEET_TYPE } from '@context/actionsConst';

export default function useRepository() {
  const [ globalState, dispatch ] = useContext(AppContext);
  const { config = {} } = globalState;
  const { bottomSheet = '' } = config;

  const isOpen = bottomSheet !== '';
  const containerType = BOTTOM_SHEET_TYPE[bottomSheet];

  const onClose = () => {
    dispatch({
      data: {},
      type: CONFIG_ACTIONS.SET_BOTTOM_SHEET.HIDE_BOTTOM_SHEET,
    });
  };

  return {
    containerType,
    isOpen,
    onClose,
  };
}
