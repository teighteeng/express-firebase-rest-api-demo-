const express = require('express')

app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/post', (req, res) => {
  res.send('POST :' + req.body)
})

module.exports = app;
