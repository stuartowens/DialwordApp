import React from 'react';
import { connect } from 'react-redux';

import { component as Numbers,
         selectors as numbersSel,
         actions as numbersActions } from './numbers/index';
const { numbersFetch, numbersFetchCancel } = numbersActions;

const CNumbers = connect(
  state => ({
    numbers: numbersSel.numbers(state),
    fetchStatus: numbersSel.fetchStatus(state)
  }),
  {
    onFetch: numbersFetch,
    onCancelFetch: numbersFetchCancel,
    // onFetchNumber: numberFetch
  }
)(Numbers);


export function App({ number }) {
  return (
      <div className="App">
      <h1>Hello World</h1>
      <CNumbers />
      </div>)
  }

export default App;
