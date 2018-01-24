import React from 'react';
import { connect } from 'react-redux';
import {
  component as Contact,
  selectors as contactSel,
  actions as contactActions } from './contact/index';
const { sendContactForm, contactFieldUpdates } = contactActions;

import {
  component as Number,
  selectors as numberSel,
  actions as numberActions } from './number/index';
const { numberFetch } = numberActions;

import { component as Numbers,
         selectors as numbersSel,
         actions as numbersActions } from './numbers/index';
const { numbersFetch, numbersFetchCancel, searchFieldFilled } = numbersActions;


const CContact = connect(
  state => ({
    fields: contactSel.fields(state),
    validationErrors: contactSel.errors(state),
    valid: contactSel.valid(state),
    message: contactSel.message(state),
    list: contactSel.messages(state)
  }),
  {
    onSendContactForm: sendContactForm,
    onContactFieldUpdates: contactFieldUpdates
  }
)(Contact)

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
      <CContact />
      </div>)
  }

export default App;
