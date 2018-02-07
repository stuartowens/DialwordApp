import React from 'react';

export default function Contact({ fields, errors, valid, message, onContactFieldUpdates, onSendContactForm }) {

  return (
    <div>
      <h2 className="main">
        Contact Form:
      </h2>
      <form className="Contact" onSubmit={ onSendContactForm }>
        <div className="message"> { message }</div>
        <div className="error">
          <ul>
            { errors.length ?  errors.map( error => { return<li key={error}>{error}</li>}) : '' }
          </ul>
        </div>
        <input placeholder="First Name" type="text" name="first_name" value={ fields.first_name }  onChange={ onContactFieldUpdates } />
        <input placeholder="Last Name" name="last_name" value={ fields.last_name } onChange={ onContactFieldUpdates } />
        <input placeholder="Email" name="email" value={ fields.email } onChange={ onContactFieldUpdates } />
        <input placeholder="Phone" name="phone" value={ fields.phone } onChange={ onContactFieldUpdates } />
        <input placeholder="Company" name="company" value={ fields.company } onChange={ onContactFieldUpdates } />
        <input placeholder="Area" name="area" value={ fields.area } onChange={ onContactFieldUpdates } />
        <button type="submit" disabled={!valid}> Submit Contact Form</button>
      </form>
    </div>
  );
}
