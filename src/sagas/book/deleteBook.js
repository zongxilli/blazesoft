import 'regenerator-runtime/runtime';
import { call, put, select } from 'redux-saga/effects';

import { actions } from '../../reducers/book';
import { getBookState, handleGenericError } from '../common';

export default function* deleteBook(action) {
  try {
    const { id } = action.payload;
    const { items } = yield select(getBookState);

    const newBooks = [...items].filter((book) => book.id !== id);

    yield put(actions.deleteBookSuccess(newBooks));
  } catch (e) {
    yield call(handleGenericError, action, e);
  }
}
