import { key,   CONTACT_FIELD_UPDATED, CONTACT_FIELD_INVALID,
  SEND_CONTACT_FORM_SUCCESS, SEND_CONTACT_FORM_FAILED} from './actions'

export const selectors = {
  fields: state => state[key].fields,
  errors: state => state[key].errors,
  valid: state => state[key].valid,
  message: state => state[key].message,
  messages: state => state[key].messages
}

const initialState = {
  fields: {
    first_name: '',
    last_name: '',
    area: '',
    phone: '',
    email: '',
    company: '',
    message: '',
    number: ''
  },
  errors: [],
  valid: false,
  message: '',
  messages: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CONTACT_FIELD_UPDATED:
      {
        const fieldUpdate = action.payload;
        const updatedFields = {
          ...state.fields,
          [fieldUpdate.name]: fieldUpdate.value
        };
        return {
          ...state,
          fields: updatedFields,
          errors: [],
          valid: true,
          message: ''
        };
      }
    case CONTACT_FIELD_INVALID:
      {
        const {errors, fieldUpdate} = action.payload;
        const updatedFields = {
          ...state.fields,
          [fieldUpdate.name]: fieldUpdate.value
        };
        return {
          ...state,
          fields: updatedFields,
          errors: errors,
          valid: false,
          message: ''
        };
      }
    case SEND_CONTACT_FORM_SUCCESS:
      {
        const message = action.payload;
        return {
          ...state,
          fields: {
            first_name: '',
            last_name: '',
            area: '',
            phone: '',
            email: '',
            company: '',
            message: '',
            number: ''
          },
          errors: [],
          valid: false,
          message: `Message ${message} sent successfully`,
          messages: state.messages.concat(message)
        }

      }
    case SEND_CONTACT_FORM_FAILED:
      {
        const err = action.payload;
        return {
          ...state,
          errors: state.errors.concat(err),
          message: ''
        };
      }
    default:
      return state;
  }
}
