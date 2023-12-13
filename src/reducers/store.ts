/* eslint-disable import/no-unused-modules */
import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';
import { Middleware } from 'redux';

import { runSagas, sagaMiddleware } from '../sagas/sagas';

import book from './book';
import initialState from './initialStates';
import * as storage from './localStorage';
import theme from './theme';

setAutoFreeze(false);

const persistedState = storage.loadState();

const store = configureStore({
  reducer: {
    book,
    theme,
  },
  preloadedState: {
    ...initialState,
    ...persistedState,
  },
  middleware: () => {
    const ms: Middleware[] = [sagaMiddleware];

    return ms;
  },
});

storage.observeStore(store);

// initialize redux-saga
runSagas();

export default store;

export type RootStore = typeof store;

export type RootState = typeof initialState;

export type AppDispatch = typeof store.dispatch;
