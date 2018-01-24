import { combineReducers } from 'redux';

import { key as numbersKey,
         reducer as numbersReducer } from './numbers/index';
import { key as numberKey,
        reducer as numberReducer } from './number/index';
import { key as contactKey,
        reducer as contactReducer } from './contact/index';

export default combineReducers({
  [numbersKey]: numbersReducer,
  [numberKey]: numberReducer,
  [contactKey]: contactReducer
});
