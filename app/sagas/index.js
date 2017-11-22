import { /* call, put, */ takeEvery } from 'redux-saga/effects';
// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUserName(action) {
    try {
        console.log('Saga intercepted: ', action);
        // const user = yield call(Api.fetchUser, action.payload.userId);
        // yield put({type: 'USER_NAME_FETCH_SUCCEEDED', user: user});
    } catch (e) {
        // yield put({type: 'USER_NAME_FETCH_FAILED', message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery('USER_NAME', fetchUserName);
}

export default mySaga;
