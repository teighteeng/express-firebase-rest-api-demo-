const express = require('express')

app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

module.exports = app;
