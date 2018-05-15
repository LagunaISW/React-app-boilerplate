import { fork, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';

// Workers

function * getCustomerDetail ({ organizationId, customerId }) {
  return {};
}

function * getProductDetail ({ organizationId, productId }) {
  return {};
}

function * getInvoiceDetail ({ organizationId, invoiceId }) {
  return {};
}

function * getUsage ({ query }) {
  return {};
}

function * getCard () {
  return {};
}

// Watchers

function * watchGetCustomerDetail () {
  yield takeLatest(actionTypes.CUSTOMER_DETAIL_REQUEST, getCustomerDetail);
}

function * watchGetProductDetail () {
  yield takeLatest(actionTypes.PRODUCT_DETAIL_REQUEST, getProductDetail);
}

function * watchGetInvoiceDetail () {
  yield takeLatest(actionTypes.INVOICE_DETAIL_REQUEST, getInvoiceDetail);
}

function * watchGetUsage () {
  yield takeLatest(actionTypes.ORG_USAGE_REQUEST, getUsage);
}

function * watchGetCard () {
  yield takeLatest(actionTypes.CARD_DETAIL_REQUEST, getCard);
}

// root

export default function * () {
  yield all([
    fork(watchGetCustomerDetail),
    fork(watchGetProductDetail),
    fork(watchGetInvoiceDetail),
    fork(watchGetUsage),
    fork(watchGetCard)
  ]);
}
