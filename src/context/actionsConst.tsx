export const PRAY_TIME_ACTIONS = {
  RESET_PRAY_TIME: 'RESET_PRAY_TIME',
  SET_CALC_METHODE: 'SET_CALC_METHODE',
  SET_INITIAL: 'SET_INITIAL',
  SET_LOCATION: 'SET_LOCATION',
  SET_NEXT_PRAYTIME: 'SET_NEXT_PRAYTIME',
};


export const THEME_ACTIONS = {
  RESET_THEME: 'RESET_THEME',
  SET_THEME: 'SET_THEME',
};

export const CONFIG_ACTIONS = {
  RESET_CONFIG: 'RESET_CONFIG',
  SET_BOTTOM_SHEET: {
    HIDE_BOTTOM_SHEET: 'HIDE_BOTTOM_SHEET',
    SHOW_LOCATION_SETTING: 'SHOW_LOCATION_SETTING',
    SHOW_PRAY_SETTING: 'SHOW_PRAY_SETTING',
  },
};

export const BOTTOM_SHEET_TYPE = {
  '' : '',
  LOCATION_SETTING: 'LOCATION_SETTING',
  PRAY_SETTING : 'PRAY_SETTING',
};

export default {
  ...PRAY_TIME_ACTIONS,
  ...THEME_ACTIONS,
  ...CONFIG_ACTIONS,
};
