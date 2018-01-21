import React from 'react';
import { connect } from 'react-redux';

import { component as Numbers,
         selectors as numbersSel,
         actions as numbersActions } from './numbers/index';
const { numbersFetch, numbersFetchCancel, searchFieldFilled, categoryFieldFilled, prefixFieldFilled } = numbersActions;

const CNumbers = connect(
  state => ({
    numbers: numbersSel.numbers(state),
    searchField: numbersSel.searchField(state),
    category: numbersSel.category(state),
    prefix: numbersSel.prefix(state),
    fetchStatus: numbersSel.fetchStatus(state)
  }),
  {
    onFetch: numbersFetch,
    onSearchFieldFilled: searchFieldFilled,
    onCancelFetch: numbersFetchCancel,
    onCategoryFieldFilled: categoryFieldFilled,
    onPrefixFieldFilled: prefixFieldFilled
    // onFetchNumber: numbersFetch
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
