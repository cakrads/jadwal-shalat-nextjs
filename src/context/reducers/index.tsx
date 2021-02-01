import prayTime, { initialPrayTime } from './prayTime';
import theme, { initialTheme } from './theme';

export const initailGlobalState = {
  prayTime: {...initialPrayTime},
  theme: {...initialTheme},
};

const allReducers = {
  prayTime,
  theme,
};

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce( // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const Reducers = combineReducers(allReducers);

export default Reducers;
