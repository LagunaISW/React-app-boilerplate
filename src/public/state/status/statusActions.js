import { LOCATION_CHANGE } from 'react-router-redux';
import * as actionTypes from '../actionTypes';

const defaultState = {};
/*
Example
{
  [key]: {
    isWorking: false,
    type: 'error',
    message: 'Something went wrong'
  }
}
*/

export default (currState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.STATUS_WORKING:
      return Object.assign({}, currState, {
        [action.key]: { isWorking: true }
      });
    case actionTypes.STATUS_RESULT_ADD:
      return Object.assign({}, currState, {
        [action.key]: {
          isWorking: false,
          type: action.resultType,
          message: action.message
        }
      });
    case actionTypes.STATUS_RESULT_DISMISS: {
      let clone = Object.assign({}, currState);
      delete clone[action.key];
      return clone;
    }
    case LOCATION_CHANGE:
      return defaultState;
    default:
      return currState;
  }
};
