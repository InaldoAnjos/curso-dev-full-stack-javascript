const express = require('express')
const app = express()
const PORT = 3000

app.get('/filtro/:busca', (req, res) => {
    const busca = req.params.busca
    res.send('Sua busca foi: ' + busca)
})

app.get('/filtro', (req, res) => {
    const busca = req.query.imovel
    const query = req.query.q
    const banda = req.query.banda
    res.send(`Sua busca foi: ${busca}, ${query}, ${banda}`)
})

app.listen(PORT, () => console.log('API está funcionando corretamente.'))