const express = require('express')

const port = process.env.PORT || 3000

app = express()
app.use(express.json())

app.listen(port, err => {
  if (err) throw err
  console.log(`> Ready On Server http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/post', (req, res) => {
  res.send('POST :' + req.body)
})

module.exports = app;
