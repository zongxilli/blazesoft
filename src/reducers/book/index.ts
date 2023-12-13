import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BookItem } from '../../types/book';

import initialState from './initialState';

type BookInfo = Omit<BookItem, 'id'>;

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBookRequest: {
      prepare: (book: BookInfo) => ({
        payload: { book },
      }),
      reducer: (state) => {
        state.status.addBookPending = true;
        state.status.addBookSuccess = false;
      },
    },
    addBookSuccess: {
      prepare: (book: BookItem) => ({
        payload: { book },
      }),
      reducer: (state, action: PayloadAction<{ book: BookItem }>) => {
        state.items = [...state.items, action.payload.book];
        state.status.addBookPending = false;
        state.status.addBookSuccess = true;
      },
    },
    addBookFailure: {
      prepare: (error: Error) => ({
        payload: { error },
      }),
      reducer: (state) => {
        state.status.addBookPending = false;
        state.status.addBookSuccess = false;
      },
    },

    deleteBookRequest: {
      prepare: (id: string) => ({
        payload: { id },
      }),
      reducer: (state) => {
        state.status.deleteBookPending = true;
        state.status.deleteBookSuccess = false;
      },
    },
    deleteBookSuccess: {
      prepare: (newBooks: BookItem[]) => ({
        payload: { newBooks },
      }),
      reducer: (state, action: PayloadAction<{ newBooks: BookItem[] }>) => {
        state.items = action.payload.newBooks;
        state.status.deleteBookPending = false;
        state.status.deleteBookSuccess = true;
      },
    },
    deleteBookFailure: {
      prepare: (error: Error) => ({
        payload: { error },
      }),
      reducer: (state) => {
        state.status.deleteBookPending = false;
        state.status.deleteBookSuccess = false;
      },
    },
  },
});

export default bookSlice.reducer;

export { initialState };

export const actions = bookSlice.actions;
