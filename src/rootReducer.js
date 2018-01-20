import { combineReducers } from 'redux';

import { key as numbersKey,
         reducer as numbersReducer } from './numbers/index';

export default combineReducers({
  [numbersKey]: numbersReducer,
});
