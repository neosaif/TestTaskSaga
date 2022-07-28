
// import { createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './root.saga';
import {rootReducer} from './root.reducer';
const sagaMiddleware = createSagaMiddleware()
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const store = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store

