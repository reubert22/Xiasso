const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const firebase = require('firebase')
const { loginErros } = require('./utils/erros');

const serviceAccount = require('./serviceAccount.json')
firebase.initializeApp({
  apiKey: functions.config().someservice.apikey,
  authDomain: functions.config().someservice.authdomain,
  projectId: functions.config().someservice.projectid
})
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.newUserCreated = functions.auth.user().onCreate(async (user) => {
  try {    
    const customToken = await admin.auth().createCustomToken(user.uid);
    await firebase.auth().signInWithCustomToken(customToken);
    const mycurrentUser = firebase.auth().currentUser;
    await mycurrentUser.sendEmailVerification();
    console.log("sendEmailVerification", user.email)
  } catch (err) {
    console.error(err)
    console.error("Erro on sendEmailVerification", user.email)
  }
})

const app = express()

app.use(cors({ origin: true }));

app.post('/register', async (req, res) => {
  const { email, firstName, lastName, password } = req.body

  if(!email || !firstName || !lastName || !password) {
    return res.status(400).send({message: "Informações incorretas"})
  }

  try {
    const userRecord = await admin.auth().createUser({ email, password, displayName: firstName })
    const userFirestoreRef = admin.firestore().collection('users')
    await userFirestoreRef.doc(userRecord.uid).set({ email, firstName, lastName })
    return res.send(userRecord.uid)
  } catch (e) {
    if(e.code) {
      const erroDetails = loginErros(e.code)
      return res.status(erroDetails.code).send({ message: erroDetails.message })
    }
    return res.status(500).send({ message: "Falha no sistema, tente novamente mais tarde" })
  }
})

exports.api = functions.https.onRequest(app)
