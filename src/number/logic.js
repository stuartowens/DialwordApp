import { createLogic } from 'redux-logic';
import { NUMBER_FETCH, numberFetchFulfilled, numberFetchRejected } from './actions';

export const numberFetchLogic = createLogic({
  type: NUMBER_FETCH,
  latest: true,

  process({ httpClient, action }, dispatch, done) {
    const name = action.payload;
    fetchNumber(httpClient, name)
      .then(number => dispatch(numberFetchFulfilled(number)))
      .catch(err => {
        console.error(err);
        dispatch(numberFetchRejected(err))
      })
      .then(()=> done());
  }
});

async functin fetchNumber(httpClient, name) {
  const number = await httpClient.post('https://gm9gixp04b.execute-api.us-east-1.amazonaws.com/Zed/byname', {startsWith: name})
    .then(resp => resp.data);

  return number;
}

export default [
  numberFetchLogic
];
