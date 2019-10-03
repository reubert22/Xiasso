import * as types from "./types";

export const successLogin = payload => ({
  type: types.SUCCESS_LOGIN,
  payload
});

export const successUid = uid => ({
  type: types.SUCCESS_UID,
  uid
});

export const isLoading = loading => ({
  type: types.IS_LOADING,
  loading
});

export const logout = () => ({ type: types.LOGOUT });
