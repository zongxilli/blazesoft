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
        // state.mode = action.payload.themeMode;
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
  },
});

export default bookSlice.reducer;

export { initialState };

export const actions = bookSlice.actions;
