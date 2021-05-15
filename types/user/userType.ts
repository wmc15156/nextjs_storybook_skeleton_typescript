// userInitialState

export type UserInitialState = {
  loadMyInfoLoading: boolean;
  loadMyInfoDone: boolean;
  loadMyInfoError: null | Error;
  signUpLoading: boolean;
  signUpDone: boolean;
  signUpError: null | Error;
  me: {} | any;
};

// sign up
type SignUpData = {
  email: string;
  password: string;
  nickname: string;
  phone: string;
}

export type SignUpAction = {
  type: string;
  data: SignUpData;
}

export const LOAD_MY_INFO_REQUEST = 'user/LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'user/LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'user/LOAD_MY_INFO_FAILURE';
export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';
