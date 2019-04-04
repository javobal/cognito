const express = require('express')
const app = express()
const port = 3001
const auth = require('./auth')
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World'))

app.get('/secure', auth.checkJwt, (req, res) => {
    res.json({ securedObject: true, message: 'it works' });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))