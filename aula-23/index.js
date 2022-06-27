const express = require('express')
const app = express()
const porta = 1500

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.listen(porta, () => {
    console.log(`Serviço executando na porta: ${porta}`)
})