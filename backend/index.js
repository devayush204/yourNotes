const connectToMongo = require('./db');
const express = require('express')

connectToMongo();
const app = express()
const port = 5000
var cors = require('cors')

app.use(express.json())
app.use(cors())

//available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})