export const key = 'contact';

export const CONTACT_FIELD_UPDATED = 'CONTACT_FIELD_UPDATED';
export const CONTACT_FIELD_INVALID = 'CONTACT_FIELD_INVALID';
export const SEND_CONTACT_FORM = 'SEND_CONTACT_FORM';
export const SEND_CONTACT_FORM_SUCCESS = 'SEND_CONTACT_FORM_SUCCESS';
export const SEND_CONTACT_FORM_FAILED = 'SEND_CONTACT_FORM_FAILED';



export const actionTypes = {
  CONTACT_FIELD_UPDATED,
  CONTACT_FIELD_INVALID,
  SEND_CONTACT_FORM,
  SEND_CONTACT_FORM_SUCCESS,
  SEND_CONTACT_FORM_FAILED
}

//action creators

export const contactFieldUpdates = (event) => ({
  type: CONTACT_FIELD_UPDATED,
  payload: {
    name: event.target.name,
    value: event.target.value
  }
})

export const contactFieldInvalid = (err) => ({
  type: CONTACT_FIELD_INVALID,
  payload: err,
  error: true
})

export const sendContactForm = (event) => {
  event.preventDefault();
  return {
    type: SEND_CONTACT_FORM,
    payload: 'Contact form sending'  
  }
}

export const sendContactFormSuccess = (form) => ({
  type: SEND_CONTACT_FORM_SUCCESS,
  payload: form
})

export const sendContactFormFailed = (err) => ({
  type: SEND_CONTACT_FORM_FAILED,
  payload: err,
  error: true
})

export const actions = {
  sendContactForm,
  sendContactFormSuccess,
  sendContactFormFailed,
  contactFieldUpdates,
  contactFieldInvalid
};
