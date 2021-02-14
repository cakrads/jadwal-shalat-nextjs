
import { CONFIG_ACTIONS, BOTTOM_SHEET_TYPE } from '../actionsConst';

export const initialConfig = {
  bottomSheet: '',
};

export default function reducer(state = initialConfig, action: any) {

  const {
    RESET_CONFIG,
    SET_BOTTOM_SHEET,
  } = CONFIG_ACTIONS;

  const { type } = action;

  switch (type) {
    case RESET_CONFIG:
      return initialConfig;
    case SET_BOTTOM_SHEET.HIDE_BOTTOM_SHEET:
      return {
        ...state,
        bottomSheet: '',
      };
    case SET_BOTTOM_SHEET.SHOW_PRAY_SETTING:
      return {
        ...state,
        bottomSheet: BOTTOM_SHEET_TYPE.PRAY_SETTING,
      };
    case SET_BOTTOM_SHEET.SHOW_LOCATION_SETTING:
      return {
        ...state,
        bottomSheet: BOTTOM_SHEET_TYPE.LOCATION_SETTING,
      };
    default:
      return state;
  }
}
