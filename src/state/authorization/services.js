import * as actions from './actions'
import * as repository from './repository'

export const authorization = (email, password) => async (dispatch) => {
  try {
    dispatch(actions.isLoading(true))
    const response = await repository.authorization(email, password)
    dispatch(actions.isLoading(false))
  } catch (error) {
    //error message?
    dispatch(actions.isLoading(false))
  }
}

export const logout = () => async (dispatch) => {
  try {
    dispatch(actions.isLoading(true))
    const response = await repository.logout()
    dispatch(actions.isLoading(false))
  } catch (error) {
    dispatch(actions.isLoading(false))
  }
}