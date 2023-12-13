import 'regenerator-runtime/runtime';
import { all, takeEvery } from 'redux-saga/effects';

import { actions } from '../../reducers/book';

import addBook from './addBook';
import deleteBook from './deleteBook';

export default function* themeSaga() {
  yield all([
    takeEvery(actions.addBookRequest, addBook),
    takeEvery(actions.deleteBookRequest, deleteBook),
  ]);
}
