import { ThemeLanguage, ThemeMode } from '../theme';
import { BookItem } from '../types/book';

import { initialState as initialBookState } from './book';
import { RootState, RootStore } from './store';
import { initialState as initialThemeState } from './theme';
import { ThemeState } from './theme/initialState';

type LocalStorageState = {
  theme: {
    mode: ThemeMode;
    language: ThemeLanguage;
  };
  book: {
    items: BookItem[];
  };
};

export const STORAGE_NAME = 'zongxikenny';

const load = (storage: Storage) => {
  try {
    const serializedState = storage.getItem(STORAGE_NAME);
    if (!serializedState) return null;

    return JSON.parse(serializedState) as LocalStorageState;
  } catch (err) {
    return null;
  }
};

export const save = (storage: Storage, state: LocalStorageState) => {
  try {
    const serializedState = JSON.stringify(state);
    storage.setItem(STORAGE_NAME, serializedState);
  } catch (err) {
    // ignore write errors
  }
};

export const loadState: () => {
  theme: ThemeState;
} = () => {
  const storedState = load(window.localStorage) || { theme: {}, book: {} };

  return {
    theme: {
      ...initialThemeState,
      ...storedState.theme,
    },
    book: {
      ...initialBookState,
      ...storedState.book,
    },
  };
};

export const saveState = (state: RootState) => {
  const localState = {
    theme: { mode: state.theme.mode, language: state.theme.language },
    book: { items: state.book.items },
  };
  save(window.localStorage, localState);
};

// watch for changes to relevant session data in redux store,
// updating LocalStorage and SessionStorage as appropriate
export const observeStore = (store: RootStore) => {
  const onChange = () => {
    saveState(store.getState());
  };
  const unsubscribe = store.subscribe(onChange);
  onChange(); // call once to populate currentSessionState
  return unsubscribe;
};
