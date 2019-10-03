import apiClient from '../../utils/apiClient'
import { firebaseAuth } from '../../utils/firebase'

export const authorization = (email, password) => {
  return firebaseAuth.signInWithEmailAndPassword(email, password)
}

export const register = data =>
  apiClient.post(`register`, {
    ...data
  });

export const logout = () => firebaseAuth.signOut()