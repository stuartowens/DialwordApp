import React from 'react';

export default function Contact({ fields, errors, valid, message, onContactFieldUpdates, onSubmit }) {

  return (
    <div>
      <h2>
        Contact Form:
      </h2>
      <form onSubmit={onSubmit}>
        <div className="message"> { message }</div>
        <div className="error">
          <ul>
            { errors ?  errors.map( error => { return<li key={error}>{error}</li>}) : console.log('no errors') }
          </ul>
        </div>
        <label>First Name</label>
        <input type="text" name="first_name"  onChange={onContactFieldUpdates} />
        <label>Last Name</label>
        <input name="last_name" onChange={onContactFieldUpdates} />
        <label>Email</label>
        <input name="email"  onChange={onContactFieldUpdates} />
        <label>Phone</label>
        <input name="phone"  onChange={onContactFieldUpdates} />
        <label>Company</label>
        <input name="company"  onChange={onContactFieldUpdates} />
        <label>Area</label>
        <input name="area" onChange={onContactFieldUpdates} />
        <button type="submit" disabled={!valid}> Submit Contact Form</button>
      </form>
    </div>
  );
}
