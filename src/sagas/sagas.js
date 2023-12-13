import createSagaMiddleware from 'redux-saga';

import bookSaga from './book';
import themeSaga from './theme';

const sagaMiddleware = createSagaMiddleware();

const runSagas = () => {
  sagaMiddleware.run(bookSaga);
  sagaMiddleware.run(themeSaga);
};

export { sagaMiddleware, runSagas };
