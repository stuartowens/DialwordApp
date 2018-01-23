import { key, SEARCH_FIELD_UPDATED, NUMBERS_FETCH, NUMBERS_FETCH_CANCEL, NUMBERS_FETCH_FULFILLED,
         NUMBERS_FETCH_REJECTED } from './actions';

export const selectors = {
  numbers: state => state[key].numbers,
  fields: state => state[key].fields,
  fetchStatus: state => state[key].fetchStatus
};

const initialState = {
  numbers: [],
  fields: {
    name: '',
    category: '',
    prefix: ''
  },
  fetchStatus: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
  case NUMBERS_FETCH:
    return {
      ...state,
      fetchStatus: `fetching... ${(new Date()).toLocaleString()}`,
      numbers: []
    };
  case SEARCH_FIELD_UPDATED:
    const fieldUpdate = action.payload;
    const updatedFields = {
      ...state.fields,
      [fieldUpdate.name]: fieldUpdate.value
    };
    return {
      ...state,
      fields: updatedFields
    };
  case NUMBERS_FETCH_FULFILLED:
    return {
      ...state,
      numbers: action.payload,
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
