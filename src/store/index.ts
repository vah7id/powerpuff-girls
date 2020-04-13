/*
 * store.js
 * store setup and configurations
*/

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

export default function configureStore() {
    // create the saga middleware
    const sagaMiddleware = createSagaMiddleware();
    // redux-devtools-extension configuration
    const composeEnhancers =
        ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 100 })) ||
        compose;
    const store = createStore(
        rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, thunk)),
    );
    // fork and run all the sagas
    sagaMiddleware.run(rootSaga);
    return {store};
};
