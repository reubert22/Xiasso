import * as types from "./types";

export const successLogin = uid => ({
  type: types.SUCCESS_LOGIN,
  uid
});

export const isLoading = loading => ({
    type: types.IS_LOADING,
    loading
});

export const logout = () => ({ type: types.LOGOUT });
