import { getUsersList, getUserDetails, createUser, updateUser, deleteUser } from '../../services/api'
import { setUserSlice } from '../slice/user.slice'
import { createUserSlice, deleteUserSlice, updateUserSlice, getUsersSlice } from '../slice/users.slice'
import { setCount } from '../slice/count.slice'
import { CREATE_USER, DELETE_USER, GET_USERS_LIST, GET_USER_DETAILS, UPDATE_USER } from '../actions'
import { put, takeEvery } from 'redux-saga/effects'
export function* getUsersSaga(action) {    
    const users = yield getUsersList(action.query)
    yield put(setCount(users.headers["x-total-count"]))
    yield put(getUsersSlice(users.data))
}

export function* getUserByIdSaga(action) {
    yield getUserDetails(action.id)
    yield put(setUserSlice(action.id))
}

export function* createUserSaga(action) {
    yield createUser(action.user)
    yield put(createUserSlice(action.user))
}

export function* updateUserSaga(action) {
    yield updateUser(action.user)
    yield put(updateUserSlice(action.user))
}

export function* deleteUserByIdSaga(action) {
    yield deleteUser(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUsersAsync() {
    yield takeEvery(GET_USERS_LIST, getUsersSaga)
    yield takeEvery(GET_USER_DETAILS, getUserByIdSaga)
    yield takeEvery(CREATE_USER, createUserSaga)
    yield takeEvery(UPDATE_USER, updateUserSaga)
    yield takeEvery(DELETE_USER, deleteUserByIdSaga)
}