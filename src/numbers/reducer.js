import { key, NUMBERS_FETCH, NUMBERS_FETCH_CANCEL, NUMBERS_FETCH_FULFILLED,
         NUMBERS_FETCH_REJECTED } from './actions';

export const selectors = {
  numbers: state => state[key].list,
  fetchStatus: state => state[key].fetchStatus
};

const initialState = {
  list: [],
  fetchStatus: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case NUMBERS_FETCH:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      list: []
    };
  case NUMBERS_FETCH_FULFILLED:
    return {
      ...state,
      list: action.payload,
      fetchStatus: `Results from ${(new Date()).toLocaleString()}`
    };
  case NUMBERS_FETCH_REJECTED:
    return {
      ...state,
      fetchStatus: `errored: ${action.payload}`
    };
  case NUMBERS_FETCH_CANCEL:
    return {
      ...state,
      fetchStatus: 'user cancelled'
    };
  default:
    return state;
  }
}
