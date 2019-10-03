import * as actions from './actions'
import * as repository from './repository'
import handleErrors from '../../utils/handleErrors';

export const authorization = (email, password) => async (dispatch) => {
  dispatch(actions.isLoading(true))
  try {
    const response = await repository.authorization(email, password)
    dispatch(actions.successLogin({ email: response.user.email, emailVerified: response.user.emailVerified }))
    dispatch(actions.successUid(response.user.uid))
  } catch (error) {
    handleErrors(error, dispatch)
  }
  dispatch(actions.isLoading(false))
}

export const register = data => async (dispatch) => {
  dispatch(actions.isLoading(true))
  try {
    const response = await repository.register(data)
    dispatch(actions.successLogin({ email: data.email, emailVerified: response.data.emailVerified }))
    dispatch(actions.successUid(response.data.uid))
  } catch (error) {
    handleErrors(error, dispatch)
  }
  dispatch(actions.isLoading(false))
}

export const logout = () => async (dispatch) => {
  dispatch(actions.isLoading(true))
  try {
    await repository.logout()
    dispatch(actions.logout())
  } catch (error) { }
  dispatch(actions.isLoading(false))
}
