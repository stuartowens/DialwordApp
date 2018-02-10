import { combineReducers } from 'redux';

import { key as numbersKey,
         reducer as numbersReducer } from './numbers/index';
import { key as numberKey,
        reducer as numberReducer } from './number/index';
import { key as contactKey,
        reducer as contactReducer } from './contact/index';

//this is where I use combine reducers to bring in all the reducers from all three smart components

export default combineReducers({
  [numbersKey]: numbersReducer,
  [numberKey]: numberReducer,
  [contactKey]: contactReducer
});
