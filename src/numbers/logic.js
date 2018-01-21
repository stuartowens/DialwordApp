import { createLogic } from 'redux-logic';
import { NUMBERS_FETCH, NUMBERS_FETCH_CANCEL, numbersFetchFulfilled,
         numbersFetchRejected } from './actions';

const delay = 2; // 2s delay for interactive use of cancel/take latest

export const numbersFetchLogic = createLogic({
  type: NUMBERS_FETCH,
  cancelType: NUMBERS_FETCH_CANCEL,
  latest: true, // take latest only

  // use axios injected as httpClient from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ httpClient }, dispatch, done) {
    try {
      // the delay query param adds arbitrary delay to the response
      const numbers =
        await httpClient.post("https://gm9gixp04b.execute-api.us-east-1.amazonaws.com/Zed/byname",{"startsWith":"S"}
      ).then(resp => resp.data); // use data property of payload
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
