import React from 'react';
import { connect } from 'react-redux';

import {
  component as Number,
  selectors as numberSel,
  actions as numberActions } from './number/index';


import { component as Numbers,
         selectors as numbersSel,
         actions as numbersActions } from './numbers/index';
const { numbersFetch, numbersFetchCancel, searchFieldFilled } = numbersActions;
const { numberFetch } = numberActions;



const CNumber = connect(
  state => ({
    number: numberSel.number(state),
    fetchStatus: numberSel.fetchStatus(state)
  }),
  {
    onFetchNumber: numberFetch
  }
)(Number)

const CNumbers = connect(
  state => ({
    numbers: numbersSel.numbers(state),
    fields: numbersSel.fields(state),
    fetchStatus: numbersSel.fetchStatus(state)
  }),
  {
    onFetch: numbersFetch,
    onSearchFieldFilled: searchFieldFilled,
    onCancelFetch: numbersFetchCancel,
    onFetchNumber: numberFetch
  }
)(Numbers);


export function App({ number }) {
  return (
      <div className="App">
      <h1>Hello World</h1>
      <CNumbers />
      <CNumber />
      </div>)
  }

export default App;
