import { showSlice, hideSlice } from '../slice/loader.slice'
import { ENABLE_LOADING, DISABLE_LOADING } from '../actions'
import { put, takeEvery } from 'redux-saga/effects'

export function* enableLoader(action) {
    yield put(showSlice(action))
}

export function* disableLoader(action) {
    yield put(hideSlice(action))
}

export function* watchLoaderAsync() {
    yield takeEvery(ENABLE_LOADING, enableLoader)
    yield takeEvery(DISABLE_LOADING, disableLoader)
}