import { all } from "redux-saga/effects";
import { watchUsersAsync } from "../sagas/user.saga";
import { watchLoaderAsync } from "../sagas/loader.saga";
import { watchCountAsync } from "../sagas/count.saga";
import { watchFilterAsync } from "../sagas/filter.saga";

export function* rootSaga() {
    yield all([
        watchUsersAsync(),
        watchLoaderAsync(),
        watchCountAsync(),
        watchFilterAsync()
    ])
}