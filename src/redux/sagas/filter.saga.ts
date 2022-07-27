import { setFilterSlice } from '../slice/filter.slice'
import { SET_FILTER_PARAMS } from '../actions'
import { put, takeEvery } from 'redux-saga/effects'

export function* setFilterParams(action) {
    yield put(setFilterSlice(action.filter))
}

export function* watchFilterAsync() {
    yield takeEvery(SET_FILTER_PARAMS, setFilterParams)
}