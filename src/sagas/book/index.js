import 'regenerator-runtime/runtime';
import { all, takeEvery } from 'redux-saga/effects';

import { actions } from '../../reducers/book';

import addAndUpdateBook from './addAndUpdateBook';
import deleteBook from './deleteBook';

export default function* themeSaga() {
  yield all([
    takeEvery(actions.addBookRequest, addAndUpdateBook),
    takeEvery(actions.deleteBookRequest, deleteBook),
  ]);
}
