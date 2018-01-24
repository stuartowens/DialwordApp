import { createLogic } from 'redux-logic';
import { SEARCH_FIELD_UPDATED, numbersFetchFulfilled,
         numbersFetchRejected } from './actions';

export const numbersFetchLogic = createLogic({
  type: SEARCH_FIELD_UPDATED,
  debounce: 500,
  latest: true,

  validate({ getState, action }, allow, reject) {
    if (action.payload) {
      allow(action);
    } else {
      reject();
    }
  },
  async process({ httpClient, action, getState }, dispatch, done) {
    try {
      let currentState = getState().numbers.fields;
      let prefix = currentState.prefix;
      let category = currentState.category;
      let startsWith = currentState.name;
      const numbers = await httpClient.post("https://kvcb6yoa1b.execute-api.us-east-1.amazonaws.com/Zed/bycatprefix",
        { "startsWith": startsWith, "prefix":prefix, "category":category})
        .then(resp => resp.data)
      dispatch(numbersFetchFulfilled(numbers));
    } catch(err) {
      console.error(err);
      dispatch(numbersFetchRejected(err));
    }
    done();
  }
});

export default [
  numbersFetchLogic
];
