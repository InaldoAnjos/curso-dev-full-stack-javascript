const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.post('/', (req, res) => {
    console.log(req)
    res.status(201).send(req.body)
})

app.listen(port, () => {
    console.log(`API executando na porta ${port}`)
})