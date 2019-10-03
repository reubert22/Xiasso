import * as actions from './actions'
import * as repository from './repository'

export const authorization = (email, password) => async (dispatch) => {
  try {
    dispatch(actions.isLoading(true))
    const response = await repository.authorization(email, password)
    dispatch(actions.successLogin(response.user.uid))
    dispatch(actions.isLoading(false))
  } catch (error) {
    console.log(error)
    dispatch(actions.isLoading(false))
  }
}

export const logout = () => async (dispatch) => {
  try {
    dispatch(actions.isLoading(true))
    await repository.logout()
    dispatch(actions.logout())
    dispatch(actions.isLoading(false))
  } catch (error) {
    dispatch(actions.isLoading(false))
  }
}
