const express = require('express')

const app = express()

app.get('/test', (_req, res) =>  {
  res.status(200).send('Hello world, test commit')
})

module.exports = app
