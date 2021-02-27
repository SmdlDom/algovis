import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

/* Instantiate and apply the middlewares*/
const sagaMiddleware = createSagaMiddleware();
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
}

middlewares.push(sagaMiddleware);

/*Create store*/
const store = createStore( rootReducer, applyMiddleware(...middlewares));

/*Run middleware*/
sagaMiddleware.run(rootSaga);

export default store;
