import { Toast } from "../components/notifications/Toast";
import * as types from './toastTypes'

export default (error, dispatch) => {
  if (error && error.code) {
    switch (error.code) {
      case types.WRONG_PASSWORD:
        return Toast("Senha incorreta.");
      case types.USER_NOT_FOUND:
        return Toast("Usuário não encontrado.");
      default:
        return;
    }
  }
  if (error && error.response) {
    return Toast(error.response.data.message);
  }
};
