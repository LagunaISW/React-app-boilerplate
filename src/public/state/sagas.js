import { fork, all } from 'redux-saga/effects';
import detailSagas from './detail/detailSagas';

export default function * rootSaga () {
  yield all([
    fork(detailSagas)
  ]);
}
