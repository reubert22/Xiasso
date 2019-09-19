import * as actions from './actions'
import * as repository from './repository'

export const authorization = (email, password) => async (dispatch, getState) => {
  try {
    dispatch(actions.isLoading(true))
    const response = await repository.authorization(email, password)
    dispatch(actions.isLoading(false))
  } catch (error) {
    //error message?
    dispatch(actions.isLoading(false))
  }
}