import { setCount } from '../slice/count.slice'
import { SET_TOTAL_COUNT } from '../actions'
import { put, takeEvery } from 'redux-saga/effects'

export function* setTotalCount(action) {
    yield put(setCount(action.count))
}

export function* watchCountAsync() {
    yield takeEvery(SET_TOTAL_COUNT, setTotalCount)
}