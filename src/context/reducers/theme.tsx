
import { THEME_ACTIONS } from '../actionsConst';

export const initialTheme = {
  theme: 'LIGHT',
};

export default function reducer(state = initialTheme, action: any) {

  const {
    RESET_THEME,
    SET_THEME,
  } = THEME_ACTIONS;

  const { type, data } = action;

  switch (type) {
    case RESET_THEME:
      return initialTheme;
    case SET_THEME:
      return {
        ...state,
        theme: data,
      };
    default:
      return state;
  }
}
