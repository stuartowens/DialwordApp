

export const key = 'numbers';

// action type constants
export const NUMBERS_FETCH = 'NUMBERS_FETCH';
export const NUMBERS_FETCH_CANCEL = 'NUMBERS_FETCH_CANCEL';
export const NUMBERS_FETCH_FULFILLED = 'NUMBERS_FETCH_FULFILLED';
export const NUMBERS_FETCH_REJECTED = 'NUMBERS_FETCH_REJECTED';

export const actionTypes = {
  NUMBERS_FETCH,
  NUMBERS_FETCH_CANCEL,
  NUMBERS_FETCH_FULFILLED,
  NUMBERS_FETCH_REJECTED
};

// action creators
export const numbersFetch = () => ({ type: NUMBERS_FETCH });
export const numbersFetchCancel = () => ({ type: NUMBERS_FETCH_CANCEL });
export const numbersFetchFulfilled = (numbers) => ({
  type: NUMBERS_FETCH_FULFILLED,
  payload: numbers
});
export const numbersFetchRejected = (err) => ({
  type: NUMBERS_FETCH_REJECTED,
  payload: err,
  error: true
});

export const actions = {
  numbersFetch,
  numbersFetchCancel,
  numbersFetchFulfilled,
  numbersFetchRejected
};
