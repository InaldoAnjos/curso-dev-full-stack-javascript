const express = require('express')
const app = express()
const axios = require('axios')
const PORT = 3002

app.get('/', (req, res) => {
    res.send('Hello, Xuxinha')
})

app.get('/usuarios', (req, res) => {
    axios.get('http://localhost:3001/usuarios').then((resposta) => {
        res.send(resposta.data)
    })
    .catch((error) => {
        console.log(error)
        res.send(error)
    })
    .finally(() => {
        console.log('Finalmente terminamos essa promise')
    })
})

app.get('/usuarios-await', async (req, res) => {
    try {
        const usuarios = await axios.get('http://localhost:3001/usuarios')
        res.send(usuarios.data)
    } catch(e) {
        console.log(e)
    } finally { // Lembrando que é opcional o uso do finally
        console.log('Xuxinha')
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})