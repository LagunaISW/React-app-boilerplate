import * as actionTypes from '../actionTypes';

export const dismissResult = (key = 'default') => {
  return {
    type: actionTypes.STATUS_RESULT_DISMISS,
    key
  };
};

export const successResult = (message, key = 'default') => {
  return {
    type: actionTypes.STATUS_RESULT_ADD,
    resultType: 'success',
    message,
    key
  };
};

export const failResult = (message, key = 'default') => {
  return {
    type: actionTypes.STATUS_RESULT_ADD,
    resultType: 'error',
    message,
    key
  };
};

export const statusWorking = (key = 'default') => {
  return {
    type: actionTypes.STATUS_WORKING,
    key
  };
};
