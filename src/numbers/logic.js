import { createLogic } from 'redux-logic';
import { SEARCH_FIELD_UPDATED, numbersFetchFulfilled,
         numbersFetchRejected } from './actions';

export const numbersFetchLogic = createLogic({
  type: SEARCH_FIELD_UPDATED,
  debounce: 500,
  latest: true, // take latest only

  /* let's prevent empty requests */
  // validate({ getState, action }, allow, reject) {
  //   if (action.payload) {
  //     allow(action);
  //   } else {  /* empty request, silently reject */
  //     reject();
  //   }
  // },
  // use axios injected as httpClient from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ httpClient, action, getState }, dispatch, done) {
    try {
      console.log(getState().numbers.fields, 'getState')
      // the delay query param adds arbitrary delay to the response
      let currentState = getState().numbers.fields;
      console.log(currentState, 'currentState')
      let prefix = currentState.prefix;
      let category = currentState.category;
      let startsWith = currentState.name;
      const numbers = await httpClient.post("https://kvcb6yoa1b.execute-api.us-east-1.amazonaws.com/Zed/bycatprefix",
        { "startsWith": startsWith, "prefix":prefix, "category":category})
        .then(resp => resp.data)
      dispatch(numbersFetchFulfilled(numbers));
    } catch(err) {
      console.error(err); // might be a render err
      dispatch(numbersFetchRejected(err));
    }
    done(); // call when finished dispatching
  }
});

export default [
  numbersFetchLogic
];
