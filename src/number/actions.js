export const key = 'number';

export const NUMBER_FETCH = 'NUMBER_FETCH';
export const NUMBER_FETCH_FULFILLED = 'NUMBER_FETCH_FULFILLED';
export const NUMBER_FETCH_REJECTED = 'NUMBER_FETCH_REJECTED';

export const actionTypes = {
  NUMBER_FETCH,
  NUMBER_FETCH_FULFILLED,
  NUMBER_FETCH_REJECTED
}

export const numberFetch = (name) => (
  {
    type: NUMBER_FETCH,
    payload: name
  }
);

export const numberFetchFulfilled = (number) => (
  {
    type: NUMBER_FETCH_FULFILLED,
    payload: number
  }
);

export const numberFetchRejected = (err) => (
  {
    type: NUMBER_FETCH_REJECTED,
    payload: err,
    error: true
  }
);

export const actions = {
  numberFetch,
  numberFetchFulfilled,
  numberFetchRejected
};
