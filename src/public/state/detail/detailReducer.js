import * as actionTypes from '../actionTypes';
import { LOCATION_CHANGE } from 'react-router-redux';

const defaultState = null;

export default (currState = defaultState, action) => {
  switch (action.type) {
    case actionTypes.DETAIL_SUCCESS:
      return action.detail;
    case actionTypes.DETAIL_FAIL:
    case LOCATION_CHANGE:
      return defaultState;
    default:
      return currState;
  }
};
