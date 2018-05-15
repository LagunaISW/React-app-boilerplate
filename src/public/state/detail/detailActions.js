import * as actionTypes from '../actionTypes';

export const getCustomerDetail = (organizationId, customerId, livemode) => {
  return {
    type: actionTypes.CUSTOMER_DETAIL_REQUEST,
    organizationId,
    customerId,
    livemode
  };
};

export const getProductDetail = (organizationId, productId) => {
  return {
    type: actionTypes.PRODUCT_DETAIL_REQUEST,
    organizationId,
    productId
  };
};

export const getInvoiceDetail = (organizationId, invoiceId) => {
  return {
    type: actionTypes.INVOICE_DETAIL_REQUEST,
    organizationId,
    invoiceId
  };
};

export const usageRequest = (query) => {
  return {
    type: actionTypes.ORG_USAGE_REQUEST,
    query
  };
};

export const detailSuccess = (detail) => {
  return {
    type: actionTypes.DETAIL_SUCCESS,
    detail
  };
};

export const detailFail = (error) => {
  return {
    type: actionTypes.DETAIL_FAIL,
    error
  };
};

export const getCardRequest = () => ({
  type: actionTypes.CARD_DETAIL_REQUEST
});
