import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SignUpAction,
} from '../types/user/userType';
import { userService } from '../services';
import axios from 'axios';

function* signUp(action: SignUpAction) {
  try {
    const result = yield call(userService().signUp, action.data);
  } catch (e) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: e.response.data,
    });
  }
}

function* loadMyInfo() {
  try {
    const result = yield call(userService().loadMyInfo);
    console.log(result);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e.response.data);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

export default function* userSaga() {
  yield all([fork(watchSignUp), fork(watchLoadMyInfo)]);
}
