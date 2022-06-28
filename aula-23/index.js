const express = require('express')
const app = express()
const porta = 1500
const routes = require('./routes/rotas')

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.use('/', routes)

app.listen(porta, () => {
    console.log(`Serviço executando na porta: ${porta}`)
})