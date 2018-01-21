import { createLogic } from 'redux-logic';
import { SEARCH, CATEGORY, NUMBERS_FETCH, NUMBERS_FETCH_CANCEL, numbersFetchFulfilled,
         numbersFetchRejected } from './actions';

const delay = 2; // 2s delay for interactive use of cancel/take latest

export const numbersFetchLogic = createLogic({
  type: SEARCH,
  debounce: 500,
  latest: true, // take latest only

  /* let's prevent empty requests */
  validate({ getState, action }, allow, reject) {
    if (action.payload) {
      allow(action);
    } else {  /* empty request, silently reject */
      reject();
    }
  },
  // use axios injected as httpClient from configureStore logic deps
  // we also have access to getState and action in the first argument
  // but they were not needed for this particular code
  async process({ httpClient, action, getState }, dispatch, done) {
    try {
      console.log(getState().numbers.category, 'getState')
      // the delay query param adds arbitrary delay to the response
      let currentState = getState().numbers;
      let prefix = currentState.prefix;
      let category = currentState.category;
      let numbers;
      if(prefix.length && category.length) {
        numbers = await httpClient.post("https://kvcb6yoa1b.execute-api.us-east-1.amazonaws.com/Zed/bycatprefix",{ "startsWith": action.payload, "prefix":prefix, "category":category}).then(resp => resp.data)
      } else if(prefix.length) {
        numbers = await httpClient.post("https://et4y5kijs1.execute-api.us-east-1.amazonaws.com/Zed/byprefix",{ "startsWith": action.payload, "prefix":prefix}).then(resp => resp.data)
      } else if (category.length) {
        numbers = await httpClient.post("https://xod3dzex23.execute-api.us-east-1.amazonaws.com/zed/bycategory",{ "startsWith": action.payload, "category":category}).then(resp => resp.data)
      } else {
        numbers = await httpClient.post("https://gm9gixp04b.execute-api.us-east-1.amazonaws.com/Zed/byname",{ "startsWith": action.payload}).then(resp => resp.data)
      }
      //Tried to use a step function but it was too slow, will probably reqwrite a single lambda function to handle this
      //And use each sepparate function for something else
      // const numbers = await httpClient.post("https://nvebbpncre.execute-api.us-east-1.amazonaws.com/zed/execution",
      // {"input": "{\"prefix\": \"\", \"category\": \"Medical\", \"startsWith\": \"S\"}","stateMachineArn":"arn:aws:states:us-east-1:077838313479:stateMachine:GetNumbersStateMachine"})
      // .then((resp) => {
      //   await httpClient.post("https://hcfu4wpi09.execute-api.us-east-1.amazonaws.com/zed/execution",{"executionArn": resp.data.executionArn}).then(resp => resp.data);
      // });
        // console.log(numbers, 'numbers')
      // const numbers = await httpClient.post("https://hcfu4wpi09.execute-api.us-east-1.amazonaws.com/zed/execution",{"executionArn": arn}).then(resp => resp.data); // use data property of payload
      // console.log(numbers, 'numbers')
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
