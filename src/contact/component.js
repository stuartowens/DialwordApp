import React from 'react';

export default function Contact({ fields, errors, valid, message, onContactFieldUpdates, onSendContactForm }) {

  return (
    <div>
      <h2>
        Contact Form:
      </h2>
      <form onSubmit={ onSendContactForm }>
        <div className="message"> { message }</div>
        <div className="error">
          <ul>
            { errors.length ?  errors.map( error => { return<li key={error}>{error}</li>}) : '' }
          </ul>
        </div>
        <label>First Name</label>
        <input type="text" name="first_name" value={ fields.first_name }  onChange={ onContactFieldUpdates } />
        <label>Last Name</label>
        <input name="last_name" value={ fields.last_name } onChange={ onContactFieldUpdates } />
        <label>Email</label>
        <input name="email" value={ fields.email } onChange={ onContactFieldUpdates } />
        <label>Phone</label>
        <input name="phone" value={ fields.phone } onChange={ onContactFieldUpdates } />
        <label>Company</label>
        <input name="company" value={ fields.company } onChange={ onContactFieldUpdates } />
        <label>Area</label>
        <input name="area" value={ fields.area } onChange={ onContactFieldUpdates } />
        <button type="submit" disabled={!valid}> Submit Contact Form</button>
      </form>
    </div>
  );
}
