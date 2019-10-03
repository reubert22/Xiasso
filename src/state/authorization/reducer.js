import * as types from "./types";

const initialState = {
  uid: null,
  isLoading: false
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_LOGIN:
      return { ...state, uid: action.uid };
    case types.IS_LOADING:
      return { ...state, isLoading: action.loading };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export { initialState };
export default reducers;
