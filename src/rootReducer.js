import { combineReducers } from 'redux';

import { key as numbersKey,
         reducer as numbersReducer } from './numbers/index';
import { key as numberKey,
        reducer as numberReducer } from './number/index';

export default combineReducers({
  [numbersKey]: numbersReducer,
  [numberKey]: numberReducer,
});
