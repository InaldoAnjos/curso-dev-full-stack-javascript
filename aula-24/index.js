const express = require('express')
const moment = require('moment')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.get('/sobre', (req, res) => {
    res.send('Sobre Logos Academy')
})

app.listen(port, () => {
    console.log(`API executando na porta ${port}`)
})