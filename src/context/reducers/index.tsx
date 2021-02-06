import prayTime, { initialPrayTime } from './prayTime';
import config, { initialConfig } from './config';

export const initailGlobalState = {
  config: {...initialConfig},
  prayTime: {...initialPrayTime},
};

const allReducers = {
  config,
  prayTime,
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
