import { firebaseAuth } from '../../utils/firebase'

export const authorization = (email, password) => {
  return firebaseAuth.signInWithEmailAndPassword(email, password)
}