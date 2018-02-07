import React from 'react';
// import './app.scss';
// import Form from './Form.jsx';
import Header from './Header';
import { connect } from 'react-redux';

import {
  component as Contact,
  selectors as contactSel,
  actions as contactActions } from './contact/index';
const { sendContactForm, contactFieldUpdates } = contactActions;

const CContact = connect(
  state => ({
    fields: contactSel.fields(state),
    errors: contactSel.errors(state),
    valid: contactSel.valid(state),
    message: contactSel.message(state),
    list: contactSel.messages(state)
  }),
  {
    onSendContactForm: sendContactForm,
    onContactFieldUpdates: contactFieldUpdates
  }
)(Contact)

class Dialword extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      // heroId: 'Hero_code'
    }
  }
  componentDidMount () {
    // heroContent();
  }
  render() {
    return (
        <div>
          <div className="Dialword" id="Dialword_code">
            <Header />
            <CContact />
            <div className="Learn-Head">
              <h1>1800Dialword<br /></h1>
              <p>Get a Premium Vanity Number</p>
            </div>
            <div className="Top-Content">
              <h2 id="Top-Content-H">GET MORE BUSINESS</h2>
              <p id="Top-Content-P">Gain Clients, Increase Your Sales and Boost Your Profits! <br /> dynamic, in-person classes. vanity numbers are memorable, they attract attention, they are literally the call to action</p>
            </div>
            <div className="Bottom-Content">
              <h2 id="Bottom-Content-H">EASY TO REMEMBER</h2>
              <p id="Bottom-Content-P">Since people remember words easier than numbers, including a toll free vanity number in all of your advertising greatly increases a consumer's ability to remember how to reach you.</p>
            </div>
            {/* <Form /> */}
          </div>
        </div>
      )
  }
}

export default Dialword;
