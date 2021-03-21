
import { PRAY_TIME_ACTIONS } from '../actionsConst';

export const initialPrayTime = {
  calcMethod: {
    title: '----',
    value: '',
  },
  location: {
    coors: [],
    title: ''
  },
  nextPrayTime: {
    time: '00:00',
    title: '----',
    value: 0,
  },
};

export default function reducer(state = initialPrayTime, action: any) {

  const {
    RESET_PRAY_TIME,
    SET_NEXT_PRAYTIME,
    SET_INITIAL,
    SET_LOCATION,
  } = PRAY_TIME_ACTIONS;

  const { type, data } = action;

  switch (type) {
    case RESET_PRAY_TIME:
      return initialPrayTime;
    case SET_NEXT_PRAYTIME:
      return {
        ...state,
        nextPrayTime: data,
      };
    case SET_INITIAL:
      return {
        ...state,
        ...data,
      };
    case SET_LOCATION:
      return {
        ...state,
        location: data,
      };
    default:
      return state;
  }
}
