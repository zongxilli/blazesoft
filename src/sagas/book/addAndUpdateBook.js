import 'regenerator-runtime/runtime';
import { call, put } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import { actions } from '../../reducers/book';
import { handleGenericError } from '../common';

export default function* addAndUpdateBook(action) {
  try {
    const bookInfo = action.payload.book;

    // if the book exists
    if (bookInfo.id) {
      yield put(actions.updateBookSuccess(bookInfo));
      return;
    }

    const newBook = {
      ...bookInfo,
      id: uuid(),
    };

    yield put(actions.addBookSuccess(newBook));
  } catch (e) {
    yield call(handleGenericError, action, e);
  }
}
