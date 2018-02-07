import React from 'react';
// import './app.scss';
// import Form from './Form.jsx';
import Header from './Header.js';
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

//As I mentionsed in the CSS file, the onClick handler lives here and it simply changes a class on
//the card element to flip it to the other side. Kind of a hack way to make a carousel, and if I had more items
//to switch between I would find a different way to do this. I also regret not having dedicated button for
//the switch, but if I had more time I could find a way to make the design and the functionality work together.
//I know the icon doesn't exactly look right  but if I knew where your icons come from I could recreate the mockup more acurrately

class DialwordMobile extends React.Component {
  constructor(props){
    super(props)
    this.state= {}
    this.onClickFunction = () => {
      var cardContainer = document.querySelector('.card-container');
      if(cardContainer.className === 'card-container flip') {
        cardContainer.className = 'card-container'
      } else {
        cardContainer.className += ' flip';
      }
    }
  }
  render() {
    return (
        <div>
          <div className="Dialword-Mobile">
                <div  className="Dialword_mobile">
                  <Header />
                  <div  className="card-container">
                    <div className="card">
                      <div className="front">
                        <div className="Learn-Heading">
                          <h1>1800Dialword</h1>
                          <p>Get a Premium Vanity Number</p>
                        </div>
                        <div className="Data-Content" onClick={()=> this.onClickFunction()}>
                          <p>Gain Clients, Increase Your Sales and Boost Your Profits! <br /> dynamic, in-person classes. vanity numbers are memorable, they attract attention, they are literally the call to action</p>
                        </div>
                      </div>
                      <div  className="back">
                        <div className="Learn-Heading">
                          <h1>1800Dialword</h1>
                          <p>Get a Premium Vanity Number</p>
                        </div>
                        <div className="Data-Content" onClick={()=> this.onClickFunction()}>
                          <p>Since people remember words easier than numbers, including a toll free vanity number in all of your advertising greatly increases a consumer's ability to remember how to reach you.</p>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <CContact />
          </div>
        </div>
      )
  }
}

export default DialwordMobile;
