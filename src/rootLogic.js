import { logic as numbersLogic } from './numbers/index';
import { logic as numberLogic } from './number/index';
import { logic as contactLogic } from './contact/index';


// This is where I bring in most of the logic from all three smart components

export default [
  ...numbersLogic,
  ...numberLogic,
  ...contactLogic
];
