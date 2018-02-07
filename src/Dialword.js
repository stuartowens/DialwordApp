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
          <div className="Hero" id="Hero_code">
            <Header />
            <CContact />
            <div className="Learn-Head">
              <h1>Get a Premium<br /> Vanity Number</h1>
              <p>Class starts May 15, 2018</p>
            </div>
            <div className="Top-Content">
              <h2 id="Top-Content-H">CODING</h2>
              <p id="Top-Content-P">Coding Boot Camp equips students skills for full-stack web development through <br /> dynamic, in-person classes.</p>
            </div>
            <div className="Bottom-Content">
              <h2 id="Bottom-Content-H">DATA ANALYTICS</h2>
              <p id="Bottom-Content-P">Data Boot Camp equips students with the key skills for full-stack web development<br /> through dynamic, in-person classes.</p>
            </div>
            {/* <Form /> */}
          </div>
        </div>
      )
  }
}

export default Dialword;
