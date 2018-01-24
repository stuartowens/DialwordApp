import { createLogic } from 'redux-logic';
import { CONTACT_FIELD_UPDATED, SEND_CONTACT_FORM, contactFieldInvalid,
  sendContactFormSuccess, sendContactFormFailed } from './actions';
import { selectors as contactSel } from './reducer';


export function validateFields(fields) {
  const errors = [];
  if(!fields.email) { errors.push('Email is required'); }
  if (!fields.first_name) { errors.push('First name is required'); }
  if (!fields.last_name) { errors.push('Last name is required'); }
  if(!fields.area) { errors.push('Area of interest is required'); }
  return errors;
}

export const updateFieldsLogic = createLogic({
  type: CONTACT_FIELD_UPDATED,
  validate({ getState, action }, allow, reject) {
    const currentState = getState();
    console.log(currentState, 'currentState');
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
    console.log(currentState, 'currentState');
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
    console.log(currentState, 'currentState');
    const fields = contactSel.fields(currentState);
    httpClient.post('https://uk48h73c6c.execute-api.us-east-1.amazonaws.com/Zed/sendemail', fields)
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
