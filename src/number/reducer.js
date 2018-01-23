import { key, NUMBER_FETCH, NUMBER_FETCH_FULFILLED, NUMBER_FETCH_REJECTED } from './actions';

export const selectors = {
  number: state => state[key].number,
  fetchStatus: state => state[key].fetchStatus
};

const initialState = {
  number: null,
  fetchStatus: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
  case NUMBER_FETCH:
    return {
      ...state,
      number: null,
      fetchStatus: `fetching ${action.payload}...${(new Date()).toLocaleString()}`
    };
    case NUMBER_FETCH_FULFILLED:
      return {
        ...state,
        number: action.payload,
        fetchStatus: `Results from ${(new Date()).toLocaleString()}`
      };
    case NUMBER_FETCH_REJECTED:
      return {
        ...state,
        fetchStatus: `error: ${action.payload}`
      };
    default:
      return state;
  }
}
