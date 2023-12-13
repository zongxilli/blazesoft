import { MockBooks } from '../../mocks/books';
import { BookItem } from '../../types/book';

// eslint-disable-next-line import/no-unused-modules
export interface BookState {
  items: BookItem[];
  status: {
    addBookPending: boolean;
    addBookSuccess: boolean;
    addBookFailure: boolean;
    deleteBookPending: boolean;
    deleteBookSuccess: boolean;
    deleteBookFailure: boolean;
  };
}

const initialState = {
  items: MockBooks,
  status: {
    addBookPending: false,
    addBookSuccess: false,
    addBookFailure: false,
    deleteBookPending: false,
    deleteBookSuccess: false,
    deleteBookFailure: false,
  },
} as const as BookState;

export default initialState;
