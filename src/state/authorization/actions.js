import * as types from "./types";

export const successLogin = user => ({
    type: types.SUCCESS_LOGIN,
    user
});

export const isLoading = loading => ({
    type: types.IS_LOADING,
    loading
});

export const logout = () => ({ type: types.LOGOUT });
