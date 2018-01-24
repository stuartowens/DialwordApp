import { createLogic } from 'redux-logic';
import { CONTACT_FIELD_UPDATED, SEND_CONTACT_FORM, contactFieldInvalid,
  sendContactFormSuccess, sendContactFormFailed } from './actions';
import { selectors as contactSel } from './reducer';


export function validateFields(fields) {
  const errors = [];
  if(!fields.email) { errors.push('Email is required'); }
  if (!fields.first_name) { errors.push('First name is required'); }
  if (!fields.last_name) { errors.push('Last name is required'); }
  return errors;
}

export const updateFieldsLogic = createLogic({
  type: CONTACT_FIELD_UPDATED,
  validate({ getState, action }, allow, reject) {
    const currentState = getState();
    const fields = contactSel.fields(currentState);
    const fieldUpdate = action.payload;
    const updatedFields = {
      ...fields,
      [fieldUpdate.name]: fieldUpdate.value
    };
    const errors = validateFields(updatedFields)
    if(!errors.length) {
      allow(action);
    } else {
      reject(contactFieldInvalid(errors, fieldUpdate));
    }
  }
});

export const sendContactFormLogic = createLogic ({
  type: SEND_CONTACT_FORM,
  validate({getState, action}, allow, reject) {
    const currentState = getState();
    const fields = contactSel.fields(currentState);
    const errors = validateFields(fields);
    if(!errors.length) {
      allow(action);
    } else {
      reject();
    }
  },
  process({httpClient, getState }, dispatch, done) {
    const currentState = getState();
    const fields = contactSel.fields(currentState);
    const number = currentState.number.number != null ? currentState.number.number[0].name : '';
    const data = {
      ...fields,
      number
    }
    const email = {
      "subject": "Contact Email Submisstion",
      "emailTo": "homerowens@yahoo.com",
      "form": [data]
    }
    httpClient.post('https://uk48h73c6c.execute-api.us-east-1.amazonaws.com/Zed/sendemail', email)
      .then(resp => resp.data)
      .then( message => dispatch(sendContactFormSuccess(message)))
      .catch( err => {
        console.error(err);
        dispatch(sendContactFormFailed(err))
      })
      .then(()=> done());
  }
});

export default [
  sendContactFormLogic,
  updateFieldsLogic
];
