const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

const serviceAccount = require('./serviceAccount.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express()

app.use(cors({ origin: true }));

app.get('/test', (req, res) => {
  res.send("hello boy")
})

exports.api = functions.https.onRequest(app)
