import 'regenerator-runtime/runtime';
import { call, put } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import { actions } from '../../reducers/book';
import { handleGenericError } from '../common';

export default function* addBook(action) {
  try {
    const bookInfo = action.payload.book;
    const newBook = {
      ...bookInfo,
      id: uuid(),
    };

    yield put(actions.addBookSuccess(newBook));
  } catch (e) {
    yield call(handleGenericError, action, e);
  }
}
