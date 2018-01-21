import { key, CATEGORY, PREFIX, SEARCH, NUMBERS_FETCH, NUMBERS_FETCH_CANCEL, NUMBERS_FETCH_FULFILLED,
         NUMBERS_FETCH_REJECTED } from './actions';

export const selectors = {
  numbers: state => state[key].list,
  searchField: state => state[key].searchField,
  category: state => state[key].category,
  prefix: state => state[key].prefix,
  fetchStatus: state => state[key].fetchStatus
};

const initialState = {
  list: [],
  searchField: '',
  category: '',
  prefix: '',
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
  case CATEGORY:
    return {
      ...state,
      category: action.payload
    };
  case PREFIX:
    return {
      ...state,
      prefix: action.payload
    };
  case SEARCH:
    return {
      ...state,
      searchField: action.payload
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
